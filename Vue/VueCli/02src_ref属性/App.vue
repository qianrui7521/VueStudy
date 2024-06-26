<template>
    <div>
        <!-- id 可以给元素打标识 -->
        <!-- <h2 v-text="msg" id="title"></h2> -->
        <h2 v-text="msg" ref="title"></h2>
        <button ref="btn" @click="showDom">点我输出上方的DOM元素</button>
        <School ref="sch"/>
        <School id="ool"/>
    </div>
</template>

<script>
    import School from './components/School.vue'

    export default {
        name:'App',
        data() {
            return {
                msg:'好好学习！'
            }
        },
        components:{
            School
        },
        methods: {
            showDom(){
                // console.log(document.getElementById('title'))
                // 在vue中使用原生的Dom操作不合适，使用 ref

                console.log(this)

                // 给html标签元素设置 ref 属性，得到的是真实Dom元素
                console.log(this.$refs.title)
                console.log(this.$refs.btn)

                // 给组件标签设置 ref 属性，得到的是该组件的vc
                console.log(this.$refs.sch)  // 得到的是 School 组件的实例对象

                console.log(this.$refs)

                // ref 与 id 的区别
                // 正常标签元素上 ref 和 id 没有什么区别
                // 当用在组件标签上后 就有区别
                    // 组件标签上的ref属性 得到的是该组件的实例对象vc
                    // 组件标签上的id属性 得到的是该组件对应的完整的Dom结构
                console.log(document.getElementById('ool'))
            }
        },
    }
</script>