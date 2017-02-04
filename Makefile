# Help
# https://gist.github.com/prwhite/8168133
help: ## Show this help.
	@echo "\
		\n\
		Usage: make [options] [target] ...\n\
		Targets:"; \
		fgrep -h '##' Makefile | awk -F'##|:' '{printf "%40s %s\n", $$1, $$3}' | fgrep -v 'fgrep'

dep:
	@npm install && npm link

clean:
	@cd android && ./gradlew clean && cd ..

android: ## Build Android application
	@npm run android

android_release:
	@cd android && ./gradlew assembleRelease && cd ..

android_release_test:
	@react-native run-android --variant=release

ios: ## Build Android application
	@npm run ios

npm_test:
	@npm test # --inspect --debug-brk

gradle_test:
	@cd android && ./gradlew lint && cd ..

test: npm_test gradle_test ## Run all tests (unit/lint)

compile:
	@npm run start

release: android_release

build: dep npm_test compile gradle_test

.PHONY: android ios
