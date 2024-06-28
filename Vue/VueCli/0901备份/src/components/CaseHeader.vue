<template>
    <div class="header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add">
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'

    export default {
        name:'CaseHeader',
        props:['addTodo'],
        data() {
            return {
                title:''
            }
        },
        methods: {
            add(){
                // 校验数据
                if(!this.title.trim()) return alert('值不为空')
                const todoObj = {id:nanoid(), name:this.title, done:false}
                // 通知App组件添加一个todo对象
                this.addTodo(todoObj)
                // 清空输入
                this.title = ''
            }
        }
    }
</script>

<style scoped>
    .header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        padding: 4px 7px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>