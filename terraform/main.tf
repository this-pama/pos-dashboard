provider "aws" {
  region = "eu-west-2"
}

data "aws_availability_zones" "available" {
  filter {
    name   = "opt-in-status"
    values = ["opt-in-not-required"]
  }
}

module "vpc_dev" {
  source = "terraform-aws-modules/vpc/aws"

  name                 = "dev-vpc"
  cidr                 = "10.1.0.0/16"
  azs                  = slice(data.aws_availability_zones.available.names, 0, 3)

  private_subnets = ["10.1.1.0/24", "10.1.2.0/24", "10.1.3.0/24"]
  public_subnets  = ["10.1.4.0/24", "10.1.5.0/24", "10.1.6.0/24"]

  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_support   = true
  enable_dns_hostnames = true
}

module "vpc_staging" {
  source = "terraform-aws-modules/vpc/aws"

  name                 = "staging-vpc"
  cidr                 = "10.2.0.0/16"
  azs                  = slice(data.aws_availability_zones.available.names, 0, 3)

  private_subnets = ["10.2.1.0/24", "10.2.2.0/24", "10.2.3.0/24"]
  public_subnets  = ["10.2.4.0/24", "10.2.5.0/24", "10.2.6.0/24"]

  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_support   = true
  enable_dns_hostnames = true
}

module "vpc_prod" {
  source = "terraform-aws-modules/vpc/aws"

  name                 = "prod-vpc"
  cidr                 = "10.3.0.0/16"
  azs                  = slice(data.aws_availability_zones.available.names, 0, 3)

  private_subnets = ["10.3.1.0/24", "10.3.2.0/24", "10.3.3.0/24"]
  public_subnets  = ["10.3.4.0/24", "10.3.5.0/24", "10.3.6.0/24"]

  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_support   = true
  enable_dns_hostnames = true
}

module "eks_dev" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "eks-dev-cluster"
  subnet_ids      = module.vpc_dev.private_subnets
  vpc_id          = module.vpc_dev.vpc_id
  cluster_version = "1.21"

  cluster_endpoint_public_access = true
}

module "eks_staging" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "eks-staging-cluster"
  subnet_ids      = module.vpc_staging.private_subnets
  vpc_id          = module.vpc_staging.vpc_id
  cluster_version = "1.21"

  cluster_endpoint_public_access = true
}

module "eks_prod" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "eks-prod-cluster"
  subnet_ids      = module.vpc_prod.private_subnets
  vpc_id          = module.vpc_prod.vpc_id
  cluster_version = "1.21"

  cluster_endpoint_public_access = true
}

output "vpc_dev_id" {
  value = module.vpc_dev.vpc_id
}

output "vpc_staging_id" {
  value = module.vpc_staging.vpc_id
}

output "vpc_prod_id" {
  value = module.vpc_prod.vpc_id
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
