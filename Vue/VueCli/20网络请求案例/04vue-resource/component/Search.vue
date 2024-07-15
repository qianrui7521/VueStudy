<template>
    <div class="jumbotron">
        <h3>Search Github Users</h3>
        <input type="text" placeholder="enter the name you search" v-model="msg">&nbsp;<button @click="searchInfo">Search</button>
    </div>
</template>

<script>
    // import axios from 'axios'

    export default {
        name:'Search',
        data() {
            return {
                msg:''
            }
        },
        methods: {
            searchInfo(){
                console.log(this)
                // 请求更新前更新list的数据
                this.$bus.$emit('updateData', {isFirst:false, isLoading:true, errMsg:'', users:[]})
                this.$http.get(`https://api.github.com/search/users?q=${this.msg}`).then(
                    Response => {  // response 是响应对象
                        // console.log('请求成功了', Response.data.items)
                        // 请求成功后更新list的数据
                        this.$bus.$emit('updateData', {isLoading:false, errMsg:'', users:Response.data.items})
                    },
                    Error => {
                        // console.log('请求失败了', Error.message)
                        // 请求失败后更新list的数据
                        this.$bus.$emit('updateData', {isLoading:false, errMsg:Error.message, users:[]})
                    }
                )
            }
        },
    }
</script>

<style>

</style>