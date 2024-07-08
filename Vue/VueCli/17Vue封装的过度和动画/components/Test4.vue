<template>
    <div>
        <button @click="isShow = !isShow">显示隐藏</button>
        <transition
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__rubberBand"
            leave-active-class="animate__bounceOutUp"
        >
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
        <!--  
            集成第三方动画：
                eg. Animation.css
                1.安装
                    控制台输入命令：npm install animate.css
                2.引用
                    import 'animate.css'
                3.使用
                    配置:复制第三方库的类名，放到 transiton 的 name 属性中；
                    指定动画：
                        进入的动画：enter-active-class  放到 transiton 中，值是库中的动画
                        离开的动画：leave-active-class  放到 transiton 中，值是库中的动画
                        enter-active-class 和 leave-active-class 是transition 两个新的配置项。

        -->
    </div>
</template>

<script>
    // 引用Animation第三方库   在node_moduls中
    import 'animate.css'

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
        background-color: deepskyblue;
    }
</style>