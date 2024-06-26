<template>
    <div class="test">
        <h3 class="demo">学生姓名：{{name}}</h3>
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
        }
}
</script>

<style scoped>
    .test {
        background-color: skyblue;
    }
</style>