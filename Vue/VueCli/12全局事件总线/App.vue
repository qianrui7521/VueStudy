<template>
    <div class="app">
        <h2>{{msg}}</h2>
        <School/>
        <Student/>
        <Dog/>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    import Dog from './components/Dog.vue'

    export default {
        name:'App',
        data() {
            return {
                msg:'你好啊'
            }
        },
        components:{
            School,
            Student,
            Dog
        }
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 10px;
    }
</style>