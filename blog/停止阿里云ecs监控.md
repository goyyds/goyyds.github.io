---
title: 停止阿里云ecs监控
date: 2021-05-05 08:52:20
lang: zh-CN
tags: [阿里云]
categories: [技术篇,服务器]
thumbnail: https://michaelgzy.zhenxishenghuo.club/images/article/aliyun.png
cover: https://michaelgzy.zhenxishenghuo.club/images/article/aliyun.png
toc: true
excerpt: 监控,再见
---

# 重启阿里云云监控
以root用户登录云监控插件所在服务器。
执行以下命令，进入云监控插件所在目录。
cd /usr/local/cloudmonitor
执行以下命令，重启云监控插件。
./cloudmonitorCtl.sh restart

那么问题来了，如何停止或者移除云监控呢？

我们来看，cloudmonitorCtl.sh 写了啥
```shell script
update-rc.d -f ${SERVICE_NAME} start 20 2 3 4 5 . stop 20 0 1 6 .
elif [ -f /sbin/chkconfig ];then
    #old centos
    cp -f ${SERVICE_FILE} /etc/init.d/${SERVICE_NAME}
    chmod +x /etc/init.d/${SERVICE_NAME}
    chkconfig --add ${SERVICE_NAME}
    chkconfig --level 2345 ${SERVICE_NAME} on
else
    echo "unknow os!"
fi
}
uninstall()
{
   if [ -f /bin/systemctl ];then
      systemctl disable  ${SYSTEMD_SERVICE_NAME}
   elif [ -f /usr/sbin/update-rc.d -a -f /etc/init.d/${SERVICE_NAME} ];then
    #old ubuntu
    update-rc.d -f ${SERVICE_NAME} remove
  elif [ -f /sbin/chkconfig -a -f /etc/init.d/${SERVICE_NAME} ];then
    #old centos
    chkconfig --del ${SERVICE_NAME}
  else
      echo "unknow os!"
   fi
}
remove()
{
        stop
        uninstall
}

case "$1" in
        start)
        start
        ;;
        stop)
        stop
        ;;
        restart)
        restart
        ;;
        install)
        install
        ;;
        uninstall)
        uninstall
        ;;
        remove)
        remove
        ;;
        *)
        echo $"Usage: $0 {start|stop|restart|install|uninstall|remove}"

```

好像看到我认识的字了，stop and remove,so  你懂得
