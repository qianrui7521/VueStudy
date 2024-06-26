// 该文件时整个项目的入口文件

// 引入vue
// ①将需要编译的模板交给render函数
import Vue from 'vue'
// ②引入带有模板解析器的vue即完整版的vue
// import Vue from 'vue/dist/vue'

// 引入app组件 是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

let a

// 创建vue实例对象 ————vm
new Vue({
    el:'#app',
    // render使用
    // render(createElement){
    //     return createElement('h1', '你好啊')
    // }
    // render中没有使用 this, 可以简写成箭头函数
    // render: h=>h('h1', '你好啊')

    render: h => h(App),  // 作用：将app组件放入容器中

    // 使用单文件组件中的方法
    // template:`<App></App>`,
    // components:{App}
})// .$mount('#app')  // 是 el:'#app' 的另一种写法