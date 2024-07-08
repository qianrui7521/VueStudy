<template>
    <div>
        <button @click="isShow = !isShow">显示隐藏</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">我好啊！</h1>
        </transition-group>
        <!--  
            多个元素过度：
                多个元素用同样的过渡效果
                多个元素使用同个过渡效果，需要使用 transition-group，并且要给每个元素配置一个key值。
                transition 适用一个元素的动画与过度。
                虽然可以使用transition 里面加一个div将多个元素包裹在这个div中，使用同样的过渡效果，但仅限元素之间不排斥的情况；
                    如果元素间排斥(比如展示和不展示)，就需要使用transiiton-grop
        -->
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
        background-color: pink;
    }
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