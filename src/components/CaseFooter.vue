<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox">
        </label>
        <span>已完成0/全部2</span>
        <button class="btn">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'CaseFooter'
    }
</script>

<style scoped>
    .todo-footer {
        height: 40px;
        line-height: 40px;
    }
    .todo-footer label input {
        margin-right: 20px;
    }
    .todo-footer button {
        float: right;
        margin-top: 4px;
    }
</style>