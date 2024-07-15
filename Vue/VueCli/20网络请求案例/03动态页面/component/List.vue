<template>
    <div class="list">
        <!-- 展示用户列表 -->
        <div class="item" v-for="user in states.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style="width: 100px;">
            </a>
            <p>{{user.login}}</p>
        </div>
        <!-- 展示欢迎信息 -->
        <h1 v-show="states.isFirst">欢迎使用！</h1>
        <!-- 展示加载中 -->
        <h1 v-show="states.isLoading">加载中......</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="states.errMsg">{{states.errMsg}}</h1>
    </div>
</template>

<script>
    export default {
        name:'List',
        data() {
            return {
                states:{
                    isFirst:true,
                    isLoading:false,
                    errMsg:'',
                    users:[]
                }
            }
        },
        mounted() {
            this.$bus.$on('updateData', (state) => {
                // console.log('我是List.vue，收到了数据', users)
                this.states = {...this.states, ...state}
                /*
                    在Search.vue中更新list的数据时，因为isFirst后边的值会一直时false，因此没有省掉了
                    但这会带来一个问题，在点击搜索后会导致vue中isFirst属性的丢失，
                    为避免，可以不省掉，或者采取ES6语法：{...this.states, ...state}
                    {...this.states, ...state} 通过字面量的形式合并对象，如果重名以后面的为主。
                    并且通过ES6语法的方式，后面的参数可以不按照顺序来编写。
                */
            })
        },
    }
</script>

<style scoped>
    .item {
        float: left;
        width: 25%;
        padding: .75rem;
        border: 1px solid #efefef;
        text-align: center;
        margin-bottom: 2rem;
    }
    .item > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }
    .item > p {
        font-size: 85%;
    }
</style>