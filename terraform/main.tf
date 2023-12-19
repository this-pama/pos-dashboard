provider "aws" {
  region = "eu-west-2" 
}

data "aws_availability_zones" "available" {
  filter {
    name   = "opt-in-status"
    values = ["opt-in-not-required"]
  }
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name                 = "my-vpc"
  cidr                 = "10.0.0.0/16"
  azs                  = slice(data.aws_availability_zones.available.names, 0, 3)
  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_support   = true
  enable_dns_hostnames = true
}

module "eks_dev" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "eks-dev-cluster"
  subnet_ids         = module.vpc.private_subnets
  vpc_id          = module.vpc.vpc_id
  cluster_version = "1.21"

  cluster_endpoint_public_access = true
}

module "eks_staging" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "eks-staging-cluster"
  subnet_ids         = module.vpc.private_subnets
  vpc_id          = module.vpc.vpc_id
  cluster_version = "1.21"

  cluster_endpoint_public_access = true
}

module "eks_prod" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "eks-prod-cluster"
  subnet_ids         = module.vpc.private_subnets
  vpc_id          = module.vpc.vpc_id
  cluster_version = "1.21"

  cluster_endpoint_public_access = true
}

output "vpc_id" {
  value = module.vpc.vpc_id
}

output "private_subnet_ids" {
  value = module.vpc.private_subnet_ids
}

output "eks_dev_cluster_id" {
  value = module.eks_dev.cluster_id
}

output "eks_staging_cluster_id" {
  value = module.eks_staging.cluster_id
}

output "eks_prod_cluster_id" {
  value = module.eks_prod.cluster_id
}
