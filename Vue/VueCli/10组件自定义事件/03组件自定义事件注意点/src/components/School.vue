<template>
    <div class="school">
        <h3>学校名称：{{name}}</h3>
        <h3>学校地址：{{address}}</h3>
        <button @click="getSchoolName">点我把学校名称给App</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'北大',
                address:'北京'
            }
        },
        props:['schoolName'],
        methods: {
            getSchoolName(){
                this.schoolName(this.name)
            }
        },
    }
</script>

<style scoped>
    .school {
        background-color: orange;
        padding: 5px;
    }
</style>