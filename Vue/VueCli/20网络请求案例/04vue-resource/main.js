import Vue from 'vue'
import App from './App.vue'

// 引入vue-resource插件
import VueResource from 'vue-resource'

Vue.config.productionTip = false

// 使用vue-resource插件
Vue.use(VueResource)

new Vue({
    el:'#app',
    render: h=> h(App),
    beforeCreate() {
        Vue.prototype.$bus = this  // 安装全局事件总线
    },
})