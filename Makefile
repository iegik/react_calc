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
	@cd android && ./gradlew.bat clean && cd ..

android: ## Build Android application
	@node_modules/.bin/react-native run-android

ios: ## Build Android application
	@node_modules/.bin/react-native run-ios

test: ## Testing
	@node ./node_modules/jest/bin/jest.js # --inspect --debug-brk

compile:
	@npm run start

build: dep compile

.PHONY: android
