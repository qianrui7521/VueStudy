<template>
    <div class="todo-footer" v-show="doneTotal">
        <label>
            <input type="checkbox" v-model="isAll">
        </label>
        <span>已完成{{doneAll}}/全部{{doneTotal}}</span>
        <button class="btn" @click="clearDone">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'CaseFooter',
        // 声明接收
        props:['todos'],
        computed:{
            doneAll(){
                return this.todos.reduce((pre, todo)=> pre + (todo.done?1:0), 0)
            },
            doneTotal(){
                return this.todos.length
            },
            isAll:{
                get(){
                    return this.doneAll === this.doneTotal && this.doneTotal > 0
                },
                set(value){
                    // this.checkedAllTodo(value)
                    this.$emit('checked-todo', value)
                }
            }
        },
        methods: {
            clearDone(){
                // this.clearAllDone()
                this.$emit('clear-done')
            }
        },
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