###############################################################
# Display load balancer hostname (typically present in AWS)
################################################################

output "load_balancer_hostname" {
  value = kubernetes_ingress_v1.sample_application_ingress.status.0.load_balancer.0.ingress.0.hostname
}

################################################################################
# EKS Cluster
################################################################################

output "cluster_arn" {
  description = "The Amazon Resource Name (ARN) of the cluster"
  value       = module.eks.cluster_arn
}

output "cluster_certificate_authority_data" {
  description = "Base64 encoded certificate data required to communicate with the cluster"
  value       = module.eks.cluster_certificate_authority_data
}

output "cluster_endpoint" {
  description = "Endpoint for your Kubernetes API server"
  value       = module.eks.cluster_endpoint
}

output "oidc_provider" {
  description = "The OpenID Connect identity provider (issuer URL without leading `https://`)"
  value       = module.eks.oidc_provider
}

output "oidc_provider_arn" {
  description = "The ARN of the OIDC Provider if `enable_irsa = true`"
  value       = module.eks.oidc_provider_arn
}

################################################################################
# VPC
################################################################################

output "vpc_id" {
  description = "The ID of the VPC"
  value       = module.vpc.vpc_id
}

output "private_subnets" {
  description = "List of IDs of private subnets"
  value       = module.vpc.private_subnets
}

################################################################################
# Prometheus Workspace
################################################################################

output "prometheus_workspace_arn" {
  description = "Amazon Resource Name (ARN) of the workspace"
  value       = module.prometheus.workspace_arn
}

output "prometheus_workspace_id" {
  description = "Identifier of the workspace"
  value       = module.prometheus.workspace_id
}

output "workspace_prometheus_endpoint" {
  description = "Prometheus endpoint available for this workspace"
  value       = module.prometheus.workspace_prometheus_endpoint
}

################################################################################
# Grafana Workspace
################################################################################

output "grafana_workspace_arn" {
  description = "The Amazon Resource Name (ARN) of the Grafana workspace"
  value       = module.managed_grafana.workspace_arn
}

output "grafana_workspace_id" {
  description = "The ID of the Grafana workspace"
  value       = module.managed_grafana.workspace_id
}

output "grafana_workspace_endpoint" {
  description = "The endpoint of the Grafana workspace"
  value       = module.managed_grafana.workspace_endpoint
}

output "workspace_grafana_version" {
  description = "The version of Grafana running on the workspace"
  value       = module.managed_grafana.workspace_grafana_version
}

output "security_group_id" {
  description = "The ID of the security group"
  value       = module.managed_grafana.security_group_id
}