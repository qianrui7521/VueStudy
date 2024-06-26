在 main.js 中不使用render函数将 app 组件放入容器中，使用单文件组件中的方法:
// 使用单文件组件中的方法
    template:`<App><App>`,
    components:{App}

保存后 页面没有被渲染出来 并且控制台报错：
You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
意思是 正在使用运行时版本的vue，没有模板解析器  即引入的vue不全

后面写了解决办法：①将需要编译的模板交给render函数 ②引入带有模板解析器的vue即完整版的vue
①将需要编译的模板交给render函数
    不用引入完整版的vue，也不用注册组件使用组件 就使用render函数 就可以实现
    render 是一个函数，并且是由vue调用，且有返回值，如果不设置返回值，就会跳过不执行。
    render 可以接受参数 createElement，createElement是个函数，用来创建具体的元素，编写具体的内同，语法：createElement('标签名', '内容') 或者 createElement(App)
    使用场景：当引入的是残缺版的vue，并且有需求配置具体的内容，就需要用要render

②引入带有模板解析器的vue即完整版的vue
    首先是因为引入的 vue 并不是完整版的vue，只是引入到了node_modules/vue的文件夹，并没有指定文件夹中哪个具体的文件，而实际默认在node_modules/vue/pakage.jason中"module": "dist/vue.runtime.esm.js" 指定引入的是vue_test/node_modules/vue/dist/vue.runtime.esm.js，而此文件并不包含模板解析器，从而创建vue实例中template就没有办法解析，从而导致该报错。
    完整版的vue是 vue/dist/vue 

    在 node_modules/vue/dist下的所有vue文件，只有 vue.ja 是完整的，包含两个东西：vue核心 + 模板解析器，其他dist下的js文件都是vue.js的精简版，目的是在代码打包的时候空间小点，省点打包后的体积


vue库中dist中的文件 带有runtime 的都是精简版不包含模板解析器的vue，
vue.runtime.esm.js 中的 esm  es代表使用的ES6的模块化 m 即module 模块
    如果使用ES6的模块化引入的时候就是用 vue.runtime.esm.js 版本的vue

main.js 中的 template 需要引入完整版的vue 带有模板解析器才能编译


关于不同版本的Vue：
    1.vue.js与vue.runtime.xxx.js的区别：
        (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
        (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
        render函数接收到的createElement函数去指定具体内容。