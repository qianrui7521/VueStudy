<template>
    <div>
        <h3 @click="showName">学生姓名：{{name}}</h3>
        <h3>学生年龄：{{age}}</h3>
    </div>
</template>

<script>
    // import {hunru} from '.././mixin'
    export default {
        name:'Student',
        data() {
            return {
                name:'小明',
                age:20
            }
        },
        // mixins:[hunru]
}
</script>