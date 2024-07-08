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
    import pubsub from 'pubsub-js'
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
            updateTodo(id, name){
                this.todos.forEach((t)=>{
                    if (t.id === id) t.name = name
                })
            },
            deleteTodo(_, id){  // _ 用来占位
                // 消息订阅和发布的回调函数会接收到两个参数，如果不需要第一个参数，可用用’_‘下划线来占位，确保收到的正确的参数
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
            this.$bus.$on('updateTodo', this.updateTodo)
            // this.$bus.$on('deleteTodo', this.deleteTodo)
            this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
        },
        beforeDestroy() {
            this.$bus.$off('checkOrUncheck')
            this.$bus.$off('updateTodo')
            // this.$bus.$off('deleteTodo')
            pubsub.unsubscribe(this.pubId)
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