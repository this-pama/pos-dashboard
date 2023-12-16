provider "aws" {
  region = "eu-west-2"
}

resource "aws_instance" "dev" {
  ami = "ami-0505148b3591e4c07"
  instance_type = "t2.micro"

  tags = {
    Name = "dev-instance"
  }
}

resource "aws_instance" "staging" {
  ami = "ami-0505148b3591e4c07"
  instance_type = "t2.micro"

  tags = {
    Name = "staging-instance"
  }
}

resource "aws_instance" "prod" {
  ami = "ami-0505148b3591e4c07"
  instance_type = "t2.micro"

  tags = {
    Name = "prod-instance"
  }
}
