!/bin/bash

docker build --platform=linux/amd64 -t registry.cn-qingdao.aliyuncs.com/yydsorg/doc -f ./Dockerfile .

docker push registry.cn-qingdao.aliyuncs.com/yydsorg/doc