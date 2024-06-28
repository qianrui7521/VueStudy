<template>
    <div class="app">
        <h2>{{msg}}</h2>
        <!-- 子组件给父组件传递数据方式一：通过父组件给子组件传递函数类型的props实现 -->
        <School :schoolName="schoolName"/>

        <!-- 子组件给父组件传递数据方式二：通过父组件给子组件绑定一个自定义事件实现(第一种写法，使用@或v-on) -->
        <!-- 
            v-on在谁身上，就是给它绑定事件
            由于v-on是在student的组件标签上，所以就是给student这个组件的实例对象vc身上绑定了一个事件
                事件名叫xuesheng，假如以后有人触发了xuesheng这个事件，studentName函数就会被调用。
                原则：给谁绑定的事件，就让谁触发该事件
            'v-on:'简介形式：@
        -->
        <!-- <Student v-on:xuesheng.once="studentName"/> -->
        <!-- 简写 -->
        <Student @xuesheng.once="studentName"/>

        <!-- 子组件给父组件传递数据方式二：通过父组件给子组件绑定一个自定义事件实现(第二种写法，使用ref) -->
        <!-- ref="gou" 再通过 this.$refs.gou 就能获取到Dog组件的实例对象 -->
        <Dog ref="gou"/>
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
        },
        methods: {
            schoolName(name){
                console.log('App收到了学校名称', name)
            },
            studentName(name, ...params){
                console.log('App收到了学生姓名', name, params)
            },
            dogName(name){
                console.log('App收到了狗狗昵称', name)
            }
        },
        mounted() {
            // $on 当xxx时候，比如当'gougou'被触发的时候执行后面的回调函数this.dogName
            this.$refs.gou.$on('gougou', this.dogName)  // 绑定自定义事件

            // 只触发一次
            // this.$refs.gou.$once('gougou', this.dogName)
        },
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 10px;
    }
</style>