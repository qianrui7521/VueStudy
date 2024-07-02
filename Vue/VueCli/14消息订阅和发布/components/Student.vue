<template>
    <div class="student">
        <h3>学生姓名：{{name}}</h3>
        <h3>学生年龄：{{age}}</h3>
    </div>
</template>

<script>
    // 引入pubsub
    import pubsub from 'pubsub-js'  // pubsub 是一个对象

    export default {
        name:'Student',
        data() {
            return {
                name:'小明',
                age:20
            }
        },
        mounted() {
            // console.log('student组件的X', this.x)
            // 绑定$bus事件
            // this.$bus.$on('demo', (name)=>{
            //     console.log('接收到了School组件中的学校名称', name)
            // })

            // 订阅消息
            // pubsub.subscribe('demo', function (a, b){  // 发布消息的数据在订阅消息的回调中以形参的形式接收
            //     console.log('student组件完成了消息订阅！', a, b)  // a 是消息名 b 是数据
            //     console.log(this)   // pubsub 配合 vue 使用，这里的this 是undefined
            // })
            // 每次订阅的消息都能收到一个Id，每次Id都是不同的值
            this.pubId = pubsub.subscribe('demo', (msgName, data)=>{  // a 和 b 的官方名 msgName, data
                console.log('student组件完成了消息订阅！', msgName, data) 
                console.log(this)  // 使用箭头函数，this 就指组件实例对象
                // 或者先将回调写在methods中，再在订阅里写 this.回调名
            })
        },
        beforeDestroy() {
            // this.$bus.$off('demo')
            // 取消消息订阅， 需要通过消息订阅的id来取消
            pubsub.unsubscribe(this.pubId) 
        },
}
</script>

<style scoped>
    .student {
        background-color: skyblue;
        padding: 5px;
        margin: 20px 0;
    }
</style>