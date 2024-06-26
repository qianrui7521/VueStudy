组件之间的样式可能重名，会导致重名的样式无法渲染出正常的样式，
为此，可以通过 scoped 属性 只在局部生效，来防止冲突。

以本例为例，当school组件和student组件中的样式名重名时，会根据在App组件中注册的顺序来渲染，
后面的覆盖前面的。

使用：
    <style scoped>
    .test {
        background-color: skyblue;
    }
    </style>

scoped
作用：让样式在局部生效，防止冲突。
工作原理：
    实质上是在其最外层的div身上及内部元素身上，加了一个特殊的标签属性 data-v-xxxxxxxx，
    xxxxxxxx 是随机自动生成的，再配合样式的类名来完成控制指定的div。
    但APP组件上，如果没有加scoped属性，App中的子组件都会应用其style中的样式；
        如果有scoped属性，则style中的样式只有App组件中生效。

可以指定style的编写方式:
    通过lang属性
    style中有一个属性 lang 是language的简称，默认是 css
    css 除了纯正的css的写法，还有less(css预编译语言)...
        当直接在脚手架中使用 less 语言的时候，虽然能设置，脚手架处理不了less，会报错：
            Failed to resolve loader: less-loader
            You may need to install it.
        需要安装 less-loader
        安装less-loader注意事项：
            1.输入命令：npm i less-loader
                假如webpack版本和less-loader版本不匹配，则会报error，
                    比如4版本的webpack不能安装8和9的less-loader,
                解决方法：安装低版本的less-loader
                    命令：npm i less-loader@7
                查看webpack和less-loader版本：
                    npm view webpack version
                    npm view less-loader version
            2.安装完less-loader之后，重新执行 npm run serve

