provider "aws" {
  profile = var.profile
  region  = var.main-region
  alias   = "us-east-2"
}

provider "kubernetes" {
  host                   = module.eks.cluster_endpoint
  cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)
  exec {
    api_version = "client.authentication.k8s.io/v1beta1"
    command     = "aws"
    # This requires the awscli to be installed locally where Terraform is executed
    args = ["eks", "get-token", "--cluster-name", var.cluster_name]
  }
}


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

################################################################################
# Load Balancer Role
################################################################################

module "lb_role" {
  source = "terraform-aws-modules/iam/aws//modules/iam-role-for-service-accounts-eks"

  role_name                              = "${var.env_name}_eks_lb"
  attach_load_balancer_controller_policy = true

  oidc_providers = {
    main = {
      provider_arn               = module.eks.oidc_provider_arn
      namespace_service_accounts = ["kube-system:aws-load-balancer-controller"]
    }
  }
}

################################################################################
# Aws Load balancer Controller Service Account
################################################################################

resource "kubernetes_service_account" "service-account" {
  metadata {
    name      = "aws-load-balancer-controller"
    namespace = "kube-system"
    labels = {
      "app.kubernetes.io/name"      = "aws-load-balancer-controller"
      "app.kubernetes.io/component" = "controller"
    }
    annotations = {
      "eks.amazonaws.com/role-arn"               = module.lb_role.iam_role_arn
      "eks.amazonaws.com/sts-regional-endpoints" = "true"
    }
  }
}

################################################################################
# Install Load Balancer Controler With Helm
################################################################################

resource "helm_release" "lb" {
  name       = "aws-load-balancer-controller"
  repository = "https://aws.github.io/eks-charts"
  chart      = "aws-load-balancer-controller"
  namespace  = "kube-system"
  depends_on = [
    kubernetes_service_account.service-account,
    module.eks,
  ]

  set {
    name  = "region"
    value = var.main-region
  }

  set {
    name  = "vpcId"
    value = module.vpc.vpc_id
  }

  set {
    name  = "image.repository"
    value = "602401143452.dkr.ecr.${var.main-region}.amazonaws.com/amazon/aws-load-balancer-controller"
  }

  set {
    name  = "serviceAccount.create"
    value = "false"
  }

  set {
    name  = "serviceAccount.name"
    value = "aws-load-balancer-controller"
  }

  set {
    name  = "clusterName"
    value = var.cluster_name
  }
}







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

resource "kubernetes_service_account" "service-account-name" {
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
          service_account_name = kubernetes_service_account.service-account-name.metadata[0].name
          container {
          image = "nginx:1.21.6"
          name  = "nginx"

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



