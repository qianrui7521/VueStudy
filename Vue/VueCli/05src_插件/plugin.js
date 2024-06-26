export default {
    install(Vue, x, y, z){
        // console.log('install方法执行了')
        // console.log(a) // 参数a 是 vm 的缔造者 Vue，参数的正确声明叫 Vue
        // console.log(x, y, z) // 接收其他的参数

        // install方法中可以写以下内容
        // 全局过滤器
        // 定义全局指令
        // 定义全局混入
        // 给Vue原型上添加一个方法(vm和vc都能使用)

        // 全局过滤器
        Vue.filter('myFormat', function(value){
            return value.slice(0, 4)
        })
        // 定义全局指令
        Vue.directive('fbind-all', {
            bind(element, binding){
                element.value = binding.value
            },
            inserted(element, binding){
                element.focus()
            },
            update(element, binding){
                element.value = binding.value
            }
        })
        // 定义全局混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        })
        // 给Vue原型上添加一个方法(vm和vc都能使用)
        Vue.prototype.hello = ()=>{alert('我是hello方法')}
    }
}