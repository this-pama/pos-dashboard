provider "aws" {
  region = "eu-west-2" 
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name                 = "my-vpc"
  cidr                 = "10.0.0.0/16"
  azs                  = ["eu-west-2a", "eu-west-2b", "eu-west-2c"]
  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_support   = true
  enable_dns_hostnames = true
}

module "eks_dev" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "eks-dev-cluster"
  subnets         = module.vpc.private_subnets
  vpc_id          = module.vpc.vpc_id
  cluster_version = "1.21"
}

module "eks_staging" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "eks-staging-cluster"
  subnets         = module.vpc.private_subnets
  vpc_id          = module.vpc.vpc_id
  cluster_version = "1.21"
}

module "eks_prod" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "eks-prod-cluster"
  subnets         = module.vpc.private_subnets
  vpc_id          = module.vpc.vpc_id
  cluster_version = "1.21"
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
