# sample-devops [![Node.js CI](https://github.com/nekoprog/sample-devops/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/nekoprog/sample-devops/actions/workflows/build-deploy.yml)
DevOps CI/CD pipeline for Node.js and Docker

```
docker run -d \
--name sample-devops \
--restart unless-stopped \
-p 8080:8080 \
ghcr.io/nekoprog/sample-devops
```
