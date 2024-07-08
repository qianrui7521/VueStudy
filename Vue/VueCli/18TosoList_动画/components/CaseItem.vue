<template>
    <li>
        <label>
            <input type="checkbox" :checked="t.done" @change="changecheck(t.id)">
            <span v-show="!t.isEdit">{{t.name}}</span>
            <input type="text" :value="t.name" v-show="t.isEdit" @blur="blurT(t, $event)" ref="inputName">
        </label>
        <button class="btn" @click="deliteT(t.id)">删除</button>
        <button class="btn btnEdit" @click="editT(t)" v-show="!t.isEdit">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
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
                    // this.deleteTodo(id)   //  中的 deleteTodo(函数名) 是父组件传递过来的函数，由我们亲自调用
                    // this.$bus.$emit('deleteTodo', id)  // 中的 deleteTodo(事件名) 借助全局事件总线
                    pubsub.publish('deleteTodo', id)  // 中的 deleteTodo(消息名) 借助消息订阅和发布
                }
            },
            // 编辑todo
            editT(t){
                // t.isEdit = true // 虽然isEdit添加进todo中，但它并不是响应式的，它的添加和修改都不会影响vue重新解析模板
                // this.$set(t, 'isEdit', true)   // 使用API $set添加的数据是响应式的
                // 往todo中添加isEdit属性的更简洁的方式，避免每次update都要配置isEdit
                // if(t.isEdit)   // t.isEdit判断的是todo身上的isEdit属性值的真假，
                if(t.hasOwnProperty('isEdit')){  // hasOwnProperty 判断todo身上有没有 isEdit 属性
                    t.isEdit = true
                }else{
                    console.log(t)
                    this.$set(t, 'isEdit', true)
                }

                // 需求在点击编辑的同时让input框获取焦点
                // this.$refs.inputName.focus()   // 实际并没有达到效果，是因为执行顺序
                /*
                    editT 编辑的执行流程：
                        首先执行if语句，在执行到 t.isEdit = true 时并不会去解析模板，而是继续往下执行，
                        然后会执行 this.$refs.inputName.focus() 
                        随后才会解析模板
                        那么这时 t.isEdit值还是false，还没有变为true，从而input框还没有出现在页面上，
                            在input框处于dispaly:none的情况下再获取焦点，是获取不到的。
                    因此vue是会将editT中的代码全都执行完之后，再去重新解析模板，避免遇到修改就重新解析模板影响效率。

                    解决方法：
                        1.使用定时器，在要延迟执行的代码外层包裹一个定时器
                        2.使用API $nextTick (官方方法)
                            $nextTick 可以指定一个回调，
                            $nextTick所指定的回调会在DOM结点更新完毕之后再执行
                */
                this.$nextTick(()=>{
                    this.$refs.inputName.focus()
                })
            },
            // 给input框绑定失去焦点事件，目的是结束输入框输入便会正常文本
            // 并且当输入框失去焦点后，才真正执行修改逻辑
            blurT(t, e){
                t.isEdit = false
                // console.log(t.id, e.target.value)
                if(!e.target.value) return alert('不能为空！')
                this.$bus.$emit('updateTodo', t.id, e.target.value)
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
    .btnEdit {
        background-color: skyblue;
        border: 1px solid rgb(35, 174, 229);
        margin-right: 5px;
    }
    .btnEdit:hover {
        background-color: rgb(15, 151, 205);
    }
</style>