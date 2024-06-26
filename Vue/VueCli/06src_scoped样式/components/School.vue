<template>
    <div class="test">
        <h3 class="demo">学校名称：{{name}}</h3>
        <h3 class=mm>学校地址：{{address}}</h3>
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
        }
    }
</script>

<style lang="less" scoped>
    .test {
        background-color: orange;
        .mm {
            font-size: 30px;
        }
    }
</style>