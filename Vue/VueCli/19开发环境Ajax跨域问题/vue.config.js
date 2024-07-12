const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pages: {
    index: {
      // 入口
      entry: 'src/main.js',
    },
  },
  // 关闭语法检查
  lintOnSave:false,

  // 开启代理服务器(方式一)
  /*
    devServer: {
      proxy: 'http://localhost:5000'  //路径写道端口号即可，端口号写的是代理服务器要转发请求的那台服务器的端口号
    }，
  */

  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      /*
      '/api': {       //  '/xxx' 是请求前缀，作用是灵活控制走不走代理，有请求前缀走代理，没有就不走代理
        target: '<url>',
        ws: true,     // ws 用于支持websocket   默认是true
        changeOrigin: true    // 用于控制请求头中的host值，默认是true
        // 当changeOrigin 的值为true时，代理服务器向5000服务器转发请求的时候会谎称自己的请求来自于localhost:5000
        // 当changeOrigin 的值为false时, 代理服务器会如实报出自己是一台代理服务器，请求来自于localhost:8081.
      },
      '/foo': {
        target: '<other_url>'
      }
      */
      '/haha': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/haha':''}, // 避免将'/api'带给服务器，导致执行404,找不到5000服务器中路径为/haha/students的数据
        ws: true,
        changeOrigin: true
      },
      // 配置多个代理
      '/hehe': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/hehe':''}
      }
    }
  }
})
