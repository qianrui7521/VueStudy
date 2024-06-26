import Vue from 'vue'
import App from './App.vue'

// 混入的全局引用
import { hunru, hunru2 } from './mixin'

Vue.config.productionTip = false

Vue.mixin(hunru)
Vue.mixin(hunru2)

new Vue({
    el:'#app',
    render: h=> h(App)
})