<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
        <button @click="getCars">获取汽车信息</button>
    </div>
</template>

<script>
    // 引入axios
    import axios from 'axios'

    export default {
        name:'App',
        methods: {
            getStudents(){
                // 与代理服务器间建立连接：该路径要写代理服务器的，并且要带上需要的数据
                axios.get('http://localhost:8081/haha/students').then(
                    Response => {  // response 是响应对象
                        console.log('请求成功了', Response.data)
                    },
                    Error => {
                        console.log('请求失败了', Error.message)
                    }
                )
            },
            getCars(){
                axios.get('http://localhost:8081/hehe/cars').then(
                    Response => {
                        console.log('请求成功了', Response.data)
                    },
                    Error => {
                        console.log('请求失败了', Error.message)
                    }
                )
            }
        },
    }
    /*
        如果执行后报如下错误：
            'Access to XMLHttpRequest at 'http://localhost:5000/students' 
            from origin 'http://localhost:8081' has been blocked by CORS policy: 
            No 'Access-Control-Allow-Origin' header is present on the requested resource.'
            请求失败了 Network Error
        说明跨域了。

        跨域 即违背了同源策略。
        同源策略规定了 协议名 主机名 端口好一致。
            我的：协议名是http 主机名是localhost 端口号是8081
            想要给 协议名为http 主机名为localhost 端口号为5000 的服务器发送请求，
            由于端口不同，违背了同源策略，因此跨域了。
            整个ajax请求过程是：
                从浏览器通过http://localhost:8081 发送了请求给 http://localhost:5000/students服务器，
                5000这个服务器收到了本次请求，并且将数据响应给了8081这个服务器，但是8081浏览器并没有将数据进一步反应给浏览器，
                因为8081这个服务器发现跨域了，于是将数据留了下来。
                
    */
</script>