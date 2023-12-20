---
sidebar_position: 2
label: 'Gin'
id: doc-golang-gin
title: gin
tags:
  - doc
  - gin
---

## gin介绍

点我进入 [github官网](https://github.com/gin-gonic/gin)

## demo
demo
```golang
package main

import (
	"github.com/gin-gonic/gin"
	"log"
)

func main()  {
	r := gin.Default()

	r.GET("/demo", getting)

	r.POST("/demo", posting)


	r.PUT("/somePut", putting)
	r.DELETE("/someDelete", deleting)
	r.PATCH("/somePatch", patching)
	r.HEAD("/someHead", head)
	r.OPTIONS("/someOptions", options)

	err := r.Run(":8000")
	if err !=nil{
		log.Println(err)
	}
}

func getting(c *gin.Context) {
	log.Println(c.Query("a"))
	c.JSON(0,gin.H{
		"message":"success",
	})
}

func posting(c *gin.Context) {
		log.Println(c.PostForm("a"))
		c.JSON(0,gin.H{
			"message":"success",
		})
}

func options(context *gin.Context) {

}

func head(context *gin.Context) {

}

func patching(context *gin.Context) {

}

func deleting(context *gin.Context) {

}

func putting(context *gin.Context) {

}

```