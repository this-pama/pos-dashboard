provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "dev" {
  ami = "ami-0fc5d935ebf8bc3bc"
  instance_type = "t2.micro"

  tags = {
    Name = "dev-instance"
  }
}
