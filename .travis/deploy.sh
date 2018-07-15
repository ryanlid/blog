#!/bin/bash
set -ev
export TZ='Asia/Shanghai'

# 先 clone 再 commit，避免直接 force commit
git clone -b gh-pages https://github.com/ryanlid/blog.git .deploy_git

cd .deploy_git
git checkout gh-pages
mv .git/ ../public/
cd ../public

git add .
git commit -m "Site updated: `date +"%Y-%m-%d %H:%M:%S"`"
git push --quiet --force https://$REPO_TOKEN@github.com/ryanlid/blog gh-pages:gh-pages
