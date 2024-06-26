<template>
    <div>
        <Student name="小明" sex="男" :age="18"/>
        <Student name="小红" sex="女"/>
    </div>
</template>

<script>
    import Student from './components/Student.vue'

    export default {
        name:'App',
        components:{
            Student
        },
    }
</script>