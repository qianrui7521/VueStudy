<template>
    <div class="school">
        <h3>学校信息</h3>
        <h3>学校姓名：{{name}}</h3>
        <h3>学校地址：{{address}}</h3>
    </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'北大',
            address:'北京'
        }
    },
}
</script>

<style>
    .school {
        background-color: bisque;
    }
</style>