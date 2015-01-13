#!/usr/bin/env bash

ROOT=$(pwd)
FIS_CONFIG_TEMPLATE="$ROOT/fis-conf.js"
FRAMEWORKS=(fis-plus)

if [ "$1" = "" ];then
    output="output"
else
    output=$1
fi

domain=
if [ "$2" != "dev" ]; then
    domain="\/fis-plus\/"
fi

isDev=
if [ "$2" == "dev" ]; then
    isDev="dev"
fi

gitpush_gh () {
    framework=$1
    git clone https://github.com/fex-team/${framework}.git
    cd "$framework"
    git checkout gh-pages
    rm -rf * #clear
    cp -rf ../output/* .
    git add *
    git commit -m 'update auto'
    git push origin gh-pages
    cd ..
    rm -rf "$framework"
}

for framework in $FRAMEWORKS; do
    echo $framework
    
    if [ "isDev" = "" ]; then
        rm -rf $ROOT/doc
    fi
    
    cat $FIS_CONFIG_TEMPLATE | sed s/{%FRAMEWORK%}/${framework}/g > fis-conf-${framework}.js
    cat fis-conf-${framework}.js | sed s/{%DOMAIN%}/${domain}/g > fis-conf-${framework}_tmp.js
    mv fis-conf-${framework}_tmp.js fis-conf-${framework}.js
    
    if [ "isDev" = "" ]; then
        git clone https://github.com/fex-team/${framework}.wiki.git $ROOT/doc
    fi
    
    fis release -cmDd $output -f fis-conf-${framework}.js
    if [ "$?" = "0" -a -d "./output" ]; then
        gitpush_gh "$framework"
        rm -rf fis-conf-${framework}.js
        rm -rf output
    fi
done
