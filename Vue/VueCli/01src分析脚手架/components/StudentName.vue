<template>
    <div>
        <h2>学生信息</h2>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name:'StudentName',
        data(){
            return {
                name:'小明',
                age:18
            }
        }
    }
</script>