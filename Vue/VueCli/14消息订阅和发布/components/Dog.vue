<template>
    <div class="dog">
        <h3>狗狗昵称：{{name}}</h3>
        <h3>狗狗性别：{{gender}}</h3>
    </div>
</template>

<script>
    export default {
        name:'Dog',
        data() {
            return {
                name:'花花',
                gender:'公'
            }
        }
    }
</script>

<style>
    .dog {
        background-color: pink;
        padding: 5px;
    }
</style>