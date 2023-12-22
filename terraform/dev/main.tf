################################################################################
# VPC Module
################################################################################

module "vpc" {
  source = "./modules/vpc"

  main-region = var.main-region
  profile     = var.profile
}

################################################################################
# EKS Cluster Module
################################################################################

module "eks" {
  source = "./modules/eks-cluster"

  main-region = var.main-region
  profile     = var.profile
  rolearn     = var.rolearn

  vpc_id          = module.vpc.vpc_id
  private_subnets = module.vpc.private_subnets
}

################################################################################
# AWS ALB Controller
################################################################################

module "aws_alb_controller" {
  source = "./modules/aws-alb-controller"

  main-region  = var.main-region
  env_name     = var.env_name
  cluster_name = var.cluster_name

  vpc_id            = module.vpc.vpc_id
  oidc_provider_arn = module.eks.oidc_provider_arn
}


################################################################################
# Sample Application Namespace
################################################################################

resource "kubernetes_namespace" "sample-application-namespace" {
  metadata {
    annotations = {
      name = "sample-application"
    }

    labels = {
      application = "sample-nginx-application"
    }

    name = "sample-application"
  }
}

################################################################################
# Sample Application Policy to attach to the Role
################################################################################
module "sample_application_iam_policy" {
  source = "terraform-aws-modules/iam/aws//modules/iam-policy"

  name        = "${var.env_name}_sample_application_policy"
  path        = "/"
  description = "sample Application Policy"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "ec2:Describe*"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
}

################################################################################
# Sample Application Role
################################################################################
module "sample_application_role" {
  source = "terraform-aws-modules/iam/aws//modules/iam-role-for-service-accounts-eks"

  role_name = "${var.env_name}_sample_application"
  role_policy_arns = {
    policy = module.sample_application_iam_policy.arn
  }

  oidc_providers = {
    main = {
      provider_arn               = module.eks.oidc_provider_arn
      namespace_service_accounts = ["sample-application:sample-application-sa"]
    }
  }
}

################################################################################
# Sample Application Service Account
################################################################################

resource "kubernetes_service_account" "service-account" {
  metadata {
    name      = "sample-application-sa"
    namespace = kubernetes_namespace.sample-application-namespace.metadata[0].name
    labels = {
      "app.kubernetes.io/name" = "sample-application-sa"
    }
    annotations = {
      "eks.amazonaws.com/role-arn"               = module.sample_application_role.iam_role_arn
      "eks.amazonaws.com/sts-regional-endpoints" = "true"
    }
  }
}

################################################################################
# Sample Application Deployment
################################################################################

resource "kubernetes_deployment_v1" "sample_application_deployment" {
  metadata {
    name      = "sample-application-deployment"
    namespace = kubernetes_namespace.sample-application-namespace.metadata[0].name
    labels = {
      app = "nginx"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "nginx"
      }
    }

    template {
      metadata {
        labels = {
          app = "nginx"
        }
      }

      spec {
        service_account_name = kubernetes_service_account.service-account.metadata[0].name
        container {
          image = "httpd:latest"
          name  = "apache"

          resources {
            limits = {
              cpu    = "0.5"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "50Mi"
            }
          }

          liveness_probe {
            http_get {
              path = "/"
              port = 80

              http_header {
                name  = "X-Custom-Header"
                value = "Awesome"
              }
            }

            initial_delay_seconds = 3
            period_seconds        = 3
          }
        }
      }
    }
  }
}

################################################################################
# Sample Application Service
################################################################################

resource "kubernetes_service_v1" "sample_application_svc" {
  metadata {
    name      = "sample-application-svc"
    namespace = kubernetes_namespace.sample-application-namespace.metadata[0].name
  }
  spec {
    selector = {
      app = "nginx"
    }
    session_affinity = "ClientIP"
    port {
      port        = 80
      target_port = 80
    }

    type = "NodePort"
  }
}

################################################################################
# Sample Application Ingress
################################################################################

resource "kubernetes_ingress_v1" "sample_application_ingress" {
  metadata {
    name      = "sample-application-ingress"
    namespace = kubernetes_namespace.sample-application-namespace.metadata[0].name
    annotations = {
      "alb.ingress.kubernetes.io/scheme" = "internet-facing"
    }
  }

  wait_for_load_balancer = "true"

  spec {
    ingress_class_name = "alb"
    default_backend {
      service {
        name = "sample-application-svc"
        port {
          number = 80
        }
      }
    }

    rule {
      http {
        path {
          backend {
            service {
              name = "sample-application-svc"
              port {
                number = 80
              }
            }
          }

          path = "/app1/*"
        }

      }
    }

    tls {
      secret_name = "tls-secret"
    }
  }
}

################################################################################
# Managed Grafana Module
################################################################################

module "managed_grafana" {
  source = "./modules/grafana"

  main-region = var.main-region
  profile     = var.profile
  env_name    = var.env_name

  private_subnets = module.vpc.private_subnets
  sso_admin_group_id = var.sso_admin_group_id
}



################################################################################
# Managed Prometheus Module
################################################################################

module "prometheus" {
  source = "./modules/prometheus"

  main-region = var.main-region
  profile     = var.profile
  env_name    = var.env_name

  cluster_name      = var.cluster_name
  oidc_provider_arn = var.oidc_provider_arn
  vpc_id            = module.vpc.vpc_id
  private_subnets   = module.vpc.private_subnets
}



################################################################################
# VPC Endpoints for Prometheus and Grafana Module
################################################################################

module "vpcendpoints" {
  source = "./modules/vpcendpoints"

  main-region = var.main-region
  profile     = var.profile
  env_name    = var.env_name

  vpc_id                    = module.vpc.vpc_id
  private_subnets           =  module.vpc.private_subnets
  grafana_security_group_id = module.managed_grafana.security_group_id
}
