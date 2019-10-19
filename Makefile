PROJECT_NAME= personal-website
DOCKER_PROJECT_NAME= ${DOCKER_USERNAME}/$(PROJECT_NAME)

HASH=$(shell git rev-parse --short HEAD)

deploy:
	docker build \
		-t $(DOCKER_PROJECT_NAME):$(HASH) \
		-t $(DOCKER_PROJECT_NAME):latest \
		.

	docker push $(DOCKER_PROJECT_NAME):$(HASH)
	docker push $(DOCKER_PROJECT_NAME):latest

	kubectl set image \
		deployments/$(PROJECT_NAME) \
		$(PROJECT_NAME)=$(DOCKER_PROJECT_NAME):$(HASH)
