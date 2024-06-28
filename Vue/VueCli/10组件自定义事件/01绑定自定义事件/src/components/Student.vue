<template>
    <div class="student">
        <h3>学生姓名：{{name}}</h3>
        <h3>学生年龄：{{age}}</h3>
        <button @click="getStudentName">点我把学生姓名给App</button>
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
        methods: {
            getStudentName(){
                // 触发student组件实例身上的xuesheng事件
                // this.$emit('xuesheng', this.name)

                // 触发时如果需要传递多个参数
                this.$emit('xuesheng', this.name, 666, 777, 999)
                // 后面的参数可以包装成对象传递 或者 将...params 代替多个参数
            }
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