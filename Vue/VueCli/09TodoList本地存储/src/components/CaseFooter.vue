<template>
    <div class="todo-footer" v-show="doneTotal">
        <label>
            <!-- 
                :checked="isAll" 实现初始勾选的展示
                @click="checkAll" 实现后面的交互
                场景： 
                    输入类型的结点，输入的初始值要展示，并且以后有交互
                    就可以使用v-model
            -->
            <!-- A -->
            <!-- <input type="checkbox" :checked="isAll" @click="checkAll"> -->
            <!-- B -->
            <input type="checkbox" v-model="isAll">
            <!-- 
                此时如果直接使用只有getter的 isAll 计算属性会报错：
                Computed property "isAll" was assigned to but it has no setter.
                计算属性中只设置getter方法的前提是只被读取不被修改
                一旦使用了 v-model 双向数据绑定后，一旦交互就会引起数据的改变，
                    那么就与只有getter方法的计算属性有冲突，就会上面的error.
                    因此，使用v-model后，getter setter都需要配置。
            -->
        </label>
        <span>已完成{{doneAll}}/全部{{doneTotal}}</span>
        <button class="btn" @click="clearDone">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'CaseFooter',
        // 声明接收
        props:['todos', 'checkedAllTodo', 'clearAllDone'],
        computed:{
            doneAll(){
                // 方法一
                /*
                let i = 0
                this.todos.forEach((todo) => {
                    if(todo.done) i++
                });
                return i
                */
                
                // 方法二 使用reduce函数
                /*
                const x = this.todos.reduce((pre, todo)=>{
                    console.log('@@@', pre)
                    console.log('@@@', todo)
                    return pre + (todo.done?1:0)
                }, 0)
                return x
                */
                // 简写
                return this.todos.reduce((pre, todo)=> pre + (todo.done?1:0), 0)
            },
            /*
                reduce方法 专门用来做条件统计
                reduce能传两个参数
                    一个参数是一个函数
                        数组的长度是多少，该函数就调用多少次
                        这个函数能接收两个参数：
                            ①pre 是上一次的值
                            ②current 是当前的值 是每个todo项
                            规则：比如 reduce((pre, current)=>(), 0) 假如数组的长度是3
                                当reduce中第一个参数(函数)第一次调用的时候，pre = 初始值 0，
                                当第二次调用时，pre的值是第一次函数调用的返回值，
                                当第三次调用时，pre的值是上一次函数调用的返回值，（如果还要调用，以此类推）
                                最后一次调用函数的返回值就作为reduce方法的返回值。

                    第二个参数是要统计的初始值  
            */
            doneTotal(){
                return this.todos.length
            },
            // 一个计算属性可以通过另外两个或者多个计算属性再进行计算所得

            // A
            // isAll(){
            //     return this.doneAll === this.doneTotal && this.doneTotal > 0
            //     // this.doneTotal > 0 增加这个条件是因为 避免全选后删除每个item 还是勾选的状态
            // }

            // B 
            isAll:{
                get(){
                    return this.doneAll === this.doneTotal && this.doneTotal > 0
                },
                set(value){
                    // console.log('-----', value)
                    this.checkedAllTodo(value)
                }
            }
        },
        methods: {
            // checkAll(e){
            //     // checkbox拿的是checked 不是value
            //     // console.log('@@@', e.target.checked)
            //     this.checkedAllTodo(e.target.checked)
            // },
            clearDone(){
                this.clearAllDone()
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