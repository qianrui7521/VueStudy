<template>
    <li>
        <label>
            <input type="checkbox" :checked="t.done" @change="changecheck(t.id)">
            <span>{{t.name}}</span>
        </label>
        <button class="btn" @click="deliteT(t.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name:'CaseItem',
        props:['t'],
        methods: {
            // 勾选或不勾选
            changecheck(id){
                //通知App组件将对应的t对象的done值取反
                // this.checkOrUncheck(id)
                this.$bus.$emit('checkOrUncheck', id)
            },
            // 删除todo
            deliteT(id){
                if(confirm("确认要删除这条todo吗?")){
                    // this.deleteTodo(id)
                    this.$bus.$emit('deleteTodo', id)
                }
            }
        },
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
    li:hover {
        background-color: #ddd;
    }
    li:hover button {
        display: block;
    }
</style>