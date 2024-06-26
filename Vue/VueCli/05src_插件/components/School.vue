<template>
    <div>
        <!-- 使用插件中定义的全局过滤器 -->
        <h3>学校名称：{{name | myFormat}}</h3>
        <!-- 使用插件中定义的全局指令 -->
        <input type="text" v-fbind-all="name">
        <!-- 
            使用插件中定义的全局混入 
            vm 和 vc 中都会应用
        -->
        <h3>学校地址：{{address}}</h3>
        <button @click="showAddress">点我提示学校地址</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'北大hahahha',
                address:'北京'
            }
        },
        methods: {
            showAddress(){
                this.hello()
            }
        },
    }
</script>