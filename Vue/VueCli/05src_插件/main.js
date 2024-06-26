import Vue from 'vue'
import App from './App.vue'

// 引入插件
import plugin from './plugin'

Vue.config.productionTip = false

// 应用(使用)插件
Vue.use(plugin, 1, 2, 3)

new Vue({
    el:'#app',
    render: h=> h(App)
})