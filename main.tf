variable "region" {
  description = "AWS region"
  default     = "eu-west-2"
}

variable "ami" {
  description = "AMI ID"
  default     = "ami-0505148b3591e4c07"
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t2.micro"
}

variable "user_data" {
  description = "User data script"
  default     = <<-EOF
                #!/bin/bash
                sudo yum update -y
                sudo amazon-linux-extras install docker -y
                sudo service docker start
                sudo usermod -a -G docker ec2-user
                sudo chkconfig docker on
                sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes
                sudo systemctl enable --now kubelet
                EOF
}

provider "aws" {
  region = var.region
}

resource "aws_security_group" "devops" {
  name        = "devops"
  description = "Devops security group"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "dev_instance" {
  ami           = var.ami
  instance_type = var.instance_type
  user_data     = var.user_data

  vpc_security_group_ids = [aws_security_group.devops.id]

  tags = {
    Name = "dev-instance"
  }
}

resource "aws_instance" "staging_instance" {
  ami           = var.ami
  instance_type = var.instance_type
  user_data     = var.user_data

  vpc_security_group_ids = [aws_security_group.devops.id]

  tags = {
    Name = "staging-instance"
  }
}

resource "aws_instance" "prod_instance" {
  ami           = var.ami
  instance_type = var.instance_type
  user_data     = var.user_data

  vpc_security_group_ids = [aws_security_group.devops.id]

  tags = {
    Name = "prod-instance"
  }
}
