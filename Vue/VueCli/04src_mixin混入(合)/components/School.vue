<template>
    <div>
        <h3 @click="showName">学校名称：{{name}}</h3>
        <!-- <h3>学校名称：{{name}}</h3> -->
        <h3>学校地址：{{address}}</h3>
    </div>
</template>

<script>
    // 引入一个混合(局部混合)
    // import {hunru, hunru2} from '.././mixin'
    export default {
        name:'School',
        data() {
            return {
                name:'北大',
                address:'北京',
                x:666
            }
        },
        // mixins:[hunru, hunru2],
        mounted() {
            // console.log('挂载辽哇哇哇哇哇哇哇哇哇哇哇')
        },
    }

    // 混入：多个组件共享一个相同的配置，即复用配置
    // 当混合和data中有相同的，以data中的为主，但生命周期钩子除外，生命周期钩子不以任何为主，都会执行
    // 但是会发现混合的钩子靠前，组件中的钩子会靠后
</script>