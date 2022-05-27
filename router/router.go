package router

import (
	mm "movie/manager"
	"movie/proxy"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

/*

这里是一段屎一样的代码，后面需要重写这里的路由逻辑

*/

func Router(r *gin.Engine, manager *mm.Manager) {
	// 图片代理
	r.GET("/img/proxy", proxy.Proxy)
	// 关闭全局采集
	r.GET("/user/stop", func(_ *gin.Context) {
		manager.GetStop()
	})
	// 开启全局采集
	r.GET("/user/start", func(_ *gin.Context) {
		manager.GetStart()
	})

	// 关闭采集
	r.GET("/user/stop/:id", func(c *gin.Context) {
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		manager.GetStopById(uint(id))
		c.Status(http.StatusOK)
	})

	// 开启采集
	r.GET("/user/start/:id", func(c *gin.Context) {
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		manager.GetStartById(uint(id))
		c.Status(http.StatusOK)

	})
	// 搜索功能
	r.POST("/search", func(c *gin.Context) {
		keyword := c.PostForm("keyword")
		if keyword == "" {
			c.Status(http.StatusBadRequest)
			return
		}
		contents, err := manager.SearchContent(keyword)
		if err != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.JSON(http.StatusOK, contents)
	})

	// 获取影片信息
	r.GET("/play/:id", func(c *gin.Context) {
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		movie, err := manager.GetContent(uint(id))
		if err != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.JSON(http.StatusOK, movie)
	})

	// 获取某个分类下最新的影片
	r.POST("/category/:id", func(c *gin.Context) {
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		pgV := c.PostForm("pg")
		pg, err := strconv.Atoi(pgV)
		// pg--
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		numV := c.PostForm("num")
		num, err := strconv.Atoi(numV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		movies, pgCount, err := manager.BrowseContentByCategory(uint(id), num, pg)
		if err != nil {
			c.Status(http.StatusInternalServerError)
		}
		c.JSON(http.StatusOK, struct {
			Movies  []mm.Movie `json:"movies"`
			PgCount int        `json:"pgCount"`
		}{
			Movies:  movies,
			PgCount: pgCount,
		})
	})

}
