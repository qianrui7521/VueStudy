<template>
    <li>
        <label>
            <!-- :checked="t.done" 是初始化显示 -->
            <!-- @click="changecheck(t.id)" 或者 @change="changecheck(t.id)" 后续交互 -->
            <!--  
                注意：
                    :checked="t.done" @change="changecheck(t.id)" 两实现的功能可以合成一个，通过v-model
                    (场景：如果input框是 checkbox类型，并且v-model绑定的是一个布尔值，那么这个布尔值就能决定checkbox勾还是不勾)
                    使用v-model也能实现功能，但是不建议使用，
                    因为违反了原则，违反了props数据只读不能改的原则，只不过vue没有监测到。。
                    t是通过props外部传进来的，而props是只读，不能修改。但是在使用v-model时，能修改而且没有报错，是因为：
                        vue在监测props的修改是浅层次的监视，并没有监视里面的东西的修改，比如AB两个组件，在A中定义了x 和 y,
                        其中x是一个对象{a=1;} y是一个布尔值，然后将x 和 y 通过props传递给B，那么在B中，如果修改了a的值，
                        是可以修改也不报错，因为vue只监测x有没有修改，而不是对象中的属性值的修改，如果修改了y的值，那么就会报错。
            -->
            <input type="checkbox" :checked="t.done" @change="changecheck(t.id)">
            <span>{{t.name}}</span>
        </label>
        <button class="btn" @click="deliteT(t.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name:'CaseItem',
        props:['t', 'checkOrUncheck', 'deleteTodo'],
        // mounted() {
        //     console.log(this.t.done)
        // },
        methods: {
            // 勾选或不勾选
            changecheck(id){
                // console.log(id)

                //通知App组件将对应的t对象的done值取反
                this.checkOrUncheck(id)
            },
            // 删除todo
            deliteT(id){
                if(confirm("确认要删除这条todo吗?")){
                    // console.log(id)
                    this.deleteTodo(id)
                }
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
</style>