#!/usr/bin/env sh

set -e

npm run build

cd dist

git add -A
git commit -m 'Last Deployment'
git push -u origin main

cd -
