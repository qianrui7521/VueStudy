vue-resource 是一个发送Ajax请求的库

发送Ajax请求方式：
    1.xhr
    2.jQuery
    3.axios
    4.fetch
    5.vue-resource

vue-resource 在vue1.0的时候使用最多
是vue中的插件库，是对xhr封装。
使用：
    1.安装：
        npm i vue-resource
    2.在main.js中
        引入vue-resourse插件:
            import vueResource from 'vue-resource' (vue-resource是默认暴露)
        使用插件:
            Vue.use(vueResource)
        一旦使用上了这个插件，vm 和 vc 身上都会增加一个 $http
    3.$http 使用
        与axios使用一样:
        this.$http.get(`https://api.github.com/search/users?q=${this.msg}`).then(
            Response => { 
                
            },
            Error => {
               
            }
        )
