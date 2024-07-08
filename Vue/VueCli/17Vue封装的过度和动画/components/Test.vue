<template>
    <div>
        <button @click="isShow = !isShow">显示隐藏</button>
        <!-- 
            用vue实现动画效果：
                谁发生动画效果，谁就由 transition 包裹起来，vue会在合适的时候加上特定的动画；
                vue 设计的特定的动画名称：
                    来的时候：v-enter-active
                    离开的时候：v-leave-active
                vue实现动画效果的三个准备工作：
                    ①设置动画 @keyframes；
                    ②设置特定的动画： v-enter-active  v-leave-active；
                    ③将需要发生动画的用 transition 标签包裹起来；
                    准备完成之后就可以直接交给vue来完成即可。
            
            注意：
                1.每一个过度(transition)可以起一个名字
                    当给每个过度命名之后，特定动画的名字就要改变
                    比如命名为name="hello"，那么特定动画就要命名为：hello-enter-active  hello-leave-active
                    起名字的目的是：区分多个元素有动画的效果的情况；
                2.如果需求页面刷新完就能有开始的动画，
                    可以给 transition 添加 appear 属性
                3.transition 最终并没有形成一个真正的元素，
                    在vue解析的时候，会把transition脱掉
                4.vue跟样式的类名(hello-enter-active  hello-leave-active)对话，
                    跟动画不进行对话
        -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name:'Test',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
    h1 {
        background-color: orange;
    }
    .hello-enter-active {
        animation: donghua 1s linear;
    }
    .hello-leave-active {
        animation: donghua 1s linear reverse;
    }
    @keyframes donghua {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
</style>