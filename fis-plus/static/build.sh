#!/usr/bin/env bash

ROOT=$(pwd)
FIS_CONFIG_TEMPLATE="$ROOT/fis-conf.js"
FRAMEWORKS=(fis-plus)

if [ "$1" = "" ];then
    output="output"
else
    output=$1
fi

gitpush_gh () {
    framework=$1
    git clone https://github.com/fex-team/${framework}.git
    cd "$framework"
    git checkout gh-pages
    cp -rf ../output/* .
    git add *
    git commit -m 'update auto'
    git push origin gh-pages
    cd ..
    rm -rf "$framework"
}

for framework in $FRAMEWORKS; do
    echo $framework
    rm -rf $ROOT/doc
    cat $FIS_CONFIG_TEMPLATE | sed s/{%FRAMEWORK%}/${framework}/g > fis-conf-${framework}.js
    git clone https://github.com/fex-team/${framework}.wiki.git $ROOT/doc
    fis release -cd $output -f fis-conf-${framework}.js
    if [ "$?" = "0" ]; then
        gitpush_gh "$framework"
        rm -rf fis-conf-${framework}.js
        rm -rf output
    fi
done
