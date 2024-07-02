<template>
    <ul class="todo-list">
        <CaseItem 
            v-for="todo in todos" 
            :key="todo.id" 
            :t="todo" 
        />
    </ul>
</template>

<script>
    import CaseItem from './CaseItem.vue'

    export default {
        name:'CaseList',
        components:{CaseItem},
        props:['todos']
    }
</script>

<style scoped>
    .todo-list {
        margin-left: 0;
        padding: 0;
        border: 1px solid #ddd;
        border-radius: 2px;
    }
</style>