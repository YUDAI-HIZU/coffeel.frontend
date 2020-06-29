.PHONY: yarn install
yarn-install:
	docker-compose run --rm app yarn install

.PHONY: yarn build
yarn-build:
	docker-compose run --rm app yarn build

.PHONY: yarn dev
yarn-dev:
	docker-compose run -e NUXT_HOST=0.0.0.0 -p 3000:3000 --rm app yarn dev

.PHONY: build production
build-production:
	docker-compose run --rm app yarn build:production
