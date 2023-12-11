help:
	@echo "The following make targets are available:"
	@echo "build	build the docker image"
	@echo "publish	deploys the next version with the current commit"
	@echo "dockerpush	push the current docker image to azure"
	@echo "name	generate a unique permanent name for the current commit"
	@echo "version-file	create the version file"
	@echo "current-version	computes the current version"
	@echo "next-version	computes the next version"
	@echo "git-check	ensures no git visible files have been altered"
	@echo "run-web	runs the webserver"
	@echo "run-web-build	runs the webserver build"
	@echo "run-web-preview	runs the webserver build preview"

export LC_ALL=C
export LANG=C

name:
	git describe --abbrev=10 --tags HEAD

commit:
	git describe --match NOTATAG --always --abbrev=40 --dirty='*'

branch:
	git rev-parse --abbrev-ref HEAD

version-file:
	./sh/versionfile.sh

current-version:
	./sh/version.sh --current

next-version:
	./sh/version.sh

git-check:
	./sh/git_check.sh

run-web:
	CMD=dev ./sh/run.sh

run-web-build:
	CMD=build ./sh/run.sh

run-web-preview:
	CMD=preview ./sh/run.sh

build:
	./sh/build.sh

publish:
	./sh/deploy.sh

azlogin:
	./sh/azlogin.sh

dockerpush:
	./sh/dockerpush.sh

