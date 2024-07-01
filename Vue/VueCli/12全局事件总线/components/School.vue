<template>
    <div class="school">
        <h3>学校名称：{{name}}</h3>
        <h3>学校地址：{{address}}</h3>
        <button @click="sendSchoolName">把学校名称给student组件</button>
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
        methods: {
            sendSchoolName(){
                // 触发$bus事件
                this.$bus.$emit('demo', this.name)
            }
        },
        mounted() {
            // console.log('school组件的X', this.x)
        },
    }
</script>

<style scoped>
    .school {
        background-color: orange;
        padding: 5px;
    }
</style>