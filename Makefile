ENVIRONMENT_TOKEN="my-secret"

build_not_ideal:
	docker build -f Dockerfile.not-ideal -t node-app:not-ideal . --build-arg NPM_TOKEN_ARG=${ENVIRONMENT_TOKEN}

run_not_ideal:
	docker run -it --rm node-app:not-ideal /bin/bash

build_better:
	envsubst < .npmrc > /tmp/.npmrc && \
	docker build -f Dockerfile.better -t node-app:better . --secret id=npmrc,src="/tmp/.npmrc"

run_better:
	docker run -it --rm node-app:better /bin/bash
