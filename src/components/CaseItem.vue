<template>
    <li>
        <label>
            <input type="checkbox" :checked="t.done">
            <span>{{t.name}}</span>
        </label>
        <button class="btn">删除</button>
    </li>
</template>

<script>
    export default {
        name:'CaseItem',
        props:['t'],
        // mounted() {
        //     console.log(this.t.done)
        // },
    }
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        border-bottom: 1px solid #ddd;
        padding: 0 5px;
    }
    li:last-child {
        border-bottom: 0;
    }
    li label {
        float: left;
        cursor: pointer;
    }
    li input {
        vertical-align: center;
    }
    li button {
        float: right;
        margin-top: 3px;
        display: none;
    }
</style>