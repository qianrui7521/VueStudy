<template>
    <div>
        <h2 class="demo">你好啊</h2>
        <Student/>
        <School/>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'

    export default {
        name:'App',
        components:{
            Student,
            School
        },
    }
</script>

<style scoped>
    .demo {
        color: red;
    }
</style>