<template>
    <div class="student">
        <h3>学生姓名：{{name}}</h3>
        <h3>学生年龄：{{age}}</h3>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'小明',
                age:20
            }
        },
        mounted() {
            // console.log('student组件的X', this.x)
            // 绑定$bus事件
            this.$bus.$on('demo', (name)=>{
                console.log('接收到了School组件中的学校名称', name)
            })
        },
        beforeDestroy() {
            this.$bus.$off('demo')
        },
}
</script>

<style scoped>
    .student {
        background-color: skyblue;
        padding: 5px;
        margin: 20px 0;
    }
</style>