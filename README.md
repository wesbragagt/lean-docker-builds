# Lean and secure Dockerfile with multi-stage builds

This repository serves as an example for the article [Lean and secure Dockerfile with multi-stage builds](https://wesbraga.com/posts/lean-secure-docker-file-with-multi-stage-builds)

## Getting Started

`make build_not_ideal`
`make run_not_ideal`

Just run `ls -a` when you are inside the interactive shell for the container to see the files included. And to check the environment quick `printenv` and notice our secret is there.

`make build_better`
`make run_better`

With the better version you will only see the distribution folder required to run the application and no secrets as part of build output or runtime environment.

## Comparing Image Size

There is also a difference in the size of both images

`docker images`
