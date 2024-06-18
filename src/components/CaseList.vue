<template>
    <ul class="todo-list">
        <CaseItem v-for="todo in todos" :key="todo.id" :t="todo"/>
    </ul>
</template>

<script>
    import CaseItem from './CaseItem.vue'

    export default {
        name:'CaseList',
        components:{CaseItem},
        data() {
            return {
                todos:[
                    {id:'001', name:'早读', done:'false'},
                    {id:'002', name:'跑步', done:'false'},
                    {id:'003', name:'看书', done:'true'},
                ]
            }
        },
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