#!/bin/bash

git checkout webpage && git merge main --no-edit
npm run build

git add dist -f && git commit -m "New Build"
git subtree push --prefix dist origin webpage

git checkout main