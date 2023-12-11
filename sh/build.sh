#!/usr/bin/env bash

set -e

cd -- "$( dirname -- "${BASH_SOURCE[0]}" )/../" &> /dev/null

IMAGE_TAG="${IMAGE_TAG:-$(make -s name)}"
IMAGE_NAME="pos-dashboard:${IMAGE_TAG}"

make -s version-file
trap 'rm -- version.txt' EXIT

echo "building ${IMAGE_NAME}"

docker buildx build \
    --platform linux/amd64 \
    -t "${IMAGE_NAME}" \
    -f Dockerfile \
    .

echo "built ${IMAGE_NAME}"
