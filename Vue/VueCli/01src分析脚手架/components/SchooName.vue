<template>
    <div class="demo">
        <h2>学校信息</h2>
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我提示学校名称</button>
    </div>
</template>

<script>
    export default {
        name:'SchoolName',
        data(){
            return {
                name:'北大',
                address:'北京'
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    }
</script>

<style>
    .demo {
        background-color: orange;
    }
</style>