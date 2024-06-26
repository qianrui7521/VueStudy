<template>
    <div>
        <h3>{{msg}}</h3>
        <h3>学生信息</h3>
        <h3>学生姓名：{{name}}</h3>
        <h3>学生性别：{{sex}}</h3>
        <h3>学生年龄：{{changeAge+1}}</h3>
        <button @click="updateAge">点我修改接收到的age</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        // console.log(this)
        return {
            msg:'欢迎新生',
            changeAge:this.age
            // props 中的数据是优先被接收的，
            // data 中的数据 和 props 中的数据相同时，以props中的为主
        }
    },
    methods: {
        updateAge(){
            // this.age = 10  // 不能直接修改
            this.changeAge++
        }
    },
    // 方式一：简单声明接收
    // 不进行严格的校验
    // props:["name", "sex", "age"]  // 由 vc 接收
    
    // 避坑
    // 属性中传递的 age 实际上是一个字符串 并不是数字 
    // 可以通过 v-bind 数据绑定 绑定后的age 中的值 就是一个表达式执行的结果  :age="18"

    // 方式二：接收的同时对数据进行类型限制
    // 当传递的数据类型不对时，会报错：Expected Number with value 18, got String with value "18".
    // 解决：在错误类型前加v-bind 比如：:age="18"
    // props:{
    //     name:String,
    //     sex:String,
    //     age:Number
    // }

    // 方式三：接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    // 有三个配置：1.type 用于配置类型 2.required 用于配置属性是否是必须的 3.default 如果不传数据会给一个默认值
    // required 和 default 不会一起用，因为没有意义
    // 如果带有 required 的配置 没有传递数据，会报错：Missing required prop: "name"
    // prop 属性 props 多个属性
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:0
        },
        sex:{
            type:String,
            required:true
        }
    }

    // 注意事项：
    // 1.props 声明中不要瞎声明
    // 比如声明了phone 但实际数据中没有传递，那么phone的值就是 undefined
    // 2.接收到的 props 是不允许改的，
    // 虽然能改，但是会报错:Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
    // 并且可能会导致vue产生一些奇怪的问题
    // 如果需求要修改，可以在data中定义一个不同名字的键来接收，通过修改data中的值实现修改
    // 3.并不是所有的数据都能传递，比如key, ref ....
}
</script>