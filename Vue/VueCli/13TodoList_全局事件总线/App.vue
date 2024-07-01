<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <CaseHeader @add-todo="addTodo"/>
                <CaseList :todos="todos"/>
                <CaseFooter :todos="todos" @checked-todo="checkedAllTodo" @clear-done="clearAllDone"/>
            </div>
        </div>
    </div>
</template>

<script>
    import CaseHeader from './components/CaseHeader.vue'
    import CaseList from './components/CaseList.vue'
    import CaseFooter from './components/CaseFooter.vue'

    export default {
        name:'App',
        components:{CaseHeader, CaseList, CaseFooter},
        data() {
            return {
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods: {
            // 添加一个todo
            addTodo(todo){
                this.todos.unshift(todo)
            },
            // 勾或者不勾todo的动态交互
            checkOrUncheck(id){
                this.todos.forEach((t)=>{
                    if (t.id === id) t.done = !t.done
                })
            },
            deleteTodo(id){
                this.todos = this.todos.filter((t)=>{
                    return t.id !== id
                })
            },
            // 全选或者取消全不选
            checkedAllTodo(e){
                this.todos.forEach((t)=>{
                    t.done = e
                })
            },
            clearAllDone(){
                this.todos = this.todos.filter((t)=>{
                    return !t.done
                })
            }
        },
        watch:{
            // 深度监视
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem('todos', JSON.stringify(value))
                }
            }
        },
        mounted() {
            this.$bus.$on('checkOrUncheck', this.checkOrUncheck)
            this.$bus.$on('deleteTodo', this.deleteTodo)
        },
        beforeDestroy() {
            this.$bus.$off('checkOrUncheck')
            this.$bus.$off('deleteTodo')
        },
    }
</script>

<style>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-wrap {
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
    }

    .btn {
        /* display: inline-block; */
        padding: 4px 12px;
        font-size: 14px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid #bd362f;
        border-radius: 4px;
        background-color: #da4f49;
        color: #fff;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    }
    .btn:hover {
        background-color: #bd362f;
        color: #fff;
    }
    .btn:focus {
        outline: none;
    }
</style>