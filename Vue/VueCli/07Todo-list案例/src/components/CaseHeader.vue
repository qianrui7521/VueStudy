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
                // console.log(this.title)

                // 校验数据
                // trim() 去掉前后空格
                // if(!e.target.value) return alert('输入不为空')
                if(!this.title.trim()) return alert('值不为空')

                // console.log(e.target.value)

                // const todoObj = {id:nanoid(), name:e.target.value, done:false}
                const todoObj = {id:nanoid(), name:this.title, done:false}

                // 通知App组件添加一个todo对象
                // console.log(todoObj)
                this.addTodo(todoObj)

                // 清空输入
                // e.target.value = ''
                this.title = ''
            }
        },


        /*
            需求按下回车键添加一个 todo
                1.首先设置 键盘事件 keyup  按下回车修饰符 .enter
                2.获取用户输入
                    方法一：
                        获取事件对象 event
                        event.target.value
                    方法二：
                        双向数据绑定 v-model="title"
                        配置data: title=""
                        使用 this.title
                3.将用户的输入包装成一个对象
                    const一个对象 包括 id name done
                    id：
                        如果匹配了服务器，那么只需要将 name 和 done 交给服务器，服务器将数据写入数据库，由数据库生成id；
                        如果没有服务器，单机版，那么需要自行设置id，比如使用Math.random函数,使用当前的时间戳，但是推荐使用uuid标准，
                            uuid制定了一个规则专门用于生成全球唯一的字符串编码。————缺点是uuid的库太大
                            uuid 变种 nanoid，nanoid把uuid进行了精简。
                                nanoid安装步骤；
                                    npm i nanoid
                                    引入：import {nanoid} from 'nanoid'  (nanoid是分别暴露)
                                    使用：nanoid 是一个函数 直接调用即可 nanoid()
                4.将CaseHeader.vue中包装的新对象 数据传给 CaseList.vue(原本id name done的数据都是放在在CaseList.vue中)
                    由于将数据放在CaseList.vue中，CaseHeader.vue与AppCaseList.vue 平级之间的数据传递 目前的知识无法实现。
                    目前可以使用最基础的方法，将数据放在App中，让所有的组件作为子组件来传递。那么就可以将CaseHeader.vue中的新数据
                        传递给其父组件，需要提前给父组件App配置一个方法()方法名不能与子组件中重名否则报错并设置一个参数，然
                        后将该函数传递给子组件CaseHeader.vue，在子组件中调用该方法，将需要的数据传递回给父组件。
        */
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