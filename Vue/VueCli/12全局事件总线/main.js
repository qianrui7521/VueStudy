import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// X的配置位置①
// window.x = {a:1, b:2}

// X的配置位置(推荐)
// Vue.prototype.x = {a:1, b:2}

// console.log(Vue.prototype)

// 让X可以调用$on $off $emit
// ①将X的定义成vc(比较麻烦)
// const demo = Vue.extend({})  // 返回VueComponent
// const d = new demo()  // new一个VueComponent, d就是VueComponent的实例对象
// Vue.prototype.x = d  // 将X的定义成vc

new Vue({
    el:'#app',
    render: h=> h(App),

    // 让X可以调用$on $off $emit
    // ②将X的定义成vm
    beforeCreate() {
        Vue.prototype.$bus = this  // this是new出来的vm
        // 标准写法 安装全局事件总线
    },
})