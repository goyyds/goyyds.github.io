---
sidebar_position: 4
label: '服务注册与发现'
id: doc-golang-micro-consul
title: go-micro[consul版]
tags:
  - doc
  - micro
---

## consul注册

![result](/img/golang/consul.png)
user_service
```golang
package main

import (
	"github.com/asim/go-micro/plugins/registry/consul/v4"
	"github.com/gin-gonic/gin"
	"go-micro.dev/v4/registry"
	"go-micro.dev/v4/web"
)

var reg registry.Registry

func  init()  {
	//新建一个consul注册的地址，也就是我们consul服务启动的机器ip+端口
	reg = consul.NewRegistry(
		registry.Addrs(":8500"),
	)
}

func main()  {

	service := web.NewService(
		web.Name("userserver"),
		//web.RegisterTTL(time.Second*30),//设置注册服务的过期时间
		//web.RegisterInterval(time.Second*20),//设置间隔多久再次注册服务
		web.Address(":18001"),
		web.Handler(InitRouters()),
		web.Registry(reg),
	)

	// start the service
	service.Run()
}

func InitRouters() *gin.Engine {
	ginRouter := gin.Default()
	ginRouter.POST("/users", func(context *gin.Context) {
		context.String(200, "get userinfos")
	})

	return ginRouter
}


```

order_service
```golang
package main

import (
	"bytes"
	"fmt"
	"github.com/asim/go-micro/plugins/registry/consul/v4"
	"github.com/gin-gonic/gin"
	"go-micro.dev/v4/registry"
	"go-micro.dev/v4/selector"
	"go-micro.dev/v4/web"
	"net/http"
	"time"

)

var reg registry.Registry

func  init()  {
	//新建一个consul注册的地址，也就是我们consul服务启动的机器ip+端口
	reg = consul.NewRegistry(
		registry.Addrs(":8500"),
	)
}

func main()  {
	service:= web.NewService(
		web.Name("orderserver"),
		//web.RegisterTTL(time.Second*30),//设置注册服务的过期时间
		//web.RegisterInterval(time.Second*20),//设置间隔多久再次注册服务
		web.Address(":18002"),
		web.Handler(InitRouters()),
		web.Registry(reg),
	)
	//获取服务地址
	hostAddress := GetServiceAddr("userserver")
	if len(hostAddress) <= 0{
		fmt.Println("hostAddress is null")
	}else {
		url := "http://" + hostAddress + "/users"
		response, _ := http.Post(url, "application/json;charset=utf-8", bytes.NewBuffer([]byte("")))

		fmt.Println("response",response)
	}
	service.Run()
}

func InitRouters() *gin.Engine {
	ginRouter := gin.Default()
	ginRouter.POST("/orders/", func(context *gin.Context) {
		context.String(200, "get orderinfos")
	})

	return ginRouter
}

func GetServiceAddr(serviceName string)(address string){
	var retryCount int
	for{
		servers,err :=reg.GetService(serviceName)
		if err !=nil {
			fmt.Println(err.Error())
		}
		var services []*registry.Service
		//log.Println(servers)
		for _,value := range servers{
			fmt.Println(value.Name, ":", value.Version)
			services = append(services, value)
		}
		next := selector.RoundRobin(services)
		if node , err := next();err == nil{
			address = node.Address
		}
		if len(address) > 0{
			return
		}
		//重试次数++
		retryCount++
		time.Sleep(time.Second * 1)
		//重试5次为获取返回空
		if retryCount >= 5{
			return
		}
	}
}

```