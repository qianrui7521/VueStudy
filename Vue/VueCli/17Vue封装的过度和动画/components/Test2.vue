<template>
    <div>
        <button @click="isShow = !isShow">显示隐藏</button>
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
        background-color: skyblue;
        /* transition: 0.5s linear; */
    }

    /* 
        用vue实现过渡效果：
            需要六个类名：
                hello-enter  ello-enter-active   hello-enter-to  进入的起点 进入的过程中 进入的终点
                hello-leave  hello-leave-active  hello-leave-to  离开的起点 离开的过程中 离开的终点

        hello-enter hello-leave 进入的起点 离开的起点 非常快
    */
    /* 进入的起点  离开的终点 */
    .hello-enter, .hello-leave-to {
        transform: translateX(-100%);
    }
    .hello-enter-active, .hello-leave-active {
        transition: 0.5s linear;
    }
    /* 进入的终点 离开的起点 */
    .hello-enter-to, .hello-leave {
        transform: translateX(0);
    }
</style>