!/bin/bash

docker build -t registry.cn-qingdao.aliyuncs.com/yydsorg/doc -f ./Dockerfile .

docker push registry.cn-qingdao.aliyuncs.com/yydsorg/doc