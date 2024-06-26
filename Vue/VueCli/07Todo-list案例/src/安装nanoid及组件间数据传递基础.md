安装nanoid
    命令：npm i nanoid

    使用：
        nanoid是分别暴露
        引入：import {nanoid} from 'nanoid'
        nanoid 是一个函数 直接调用即可 nanoid()

数据传递基础方法：
    将CaseHeader.vue中包装的新对象 数据传给 CaseList.vue(原本id name done的数据都是放在在CaseList.vue中)
    由于将数据放在CaseList.vue中，CaseHeader.vue与AppCaseList.vue 平级之间的数据传递 目前的知识无法实现。
    目前可以使用最基础的方法，将数据放在App中，让所有的组件作为子组件来传递。那么就可以将CaseHeader.vue中的新数据
        传递给其父组件，需要提前给父组件App配置一个方法()方法名不能与子组件中重名否则报错并设置一个参数，然
        后将该函数传递给子组件CaseHeader.vue，在子组件中调用该方法，将需要的数据传递回给父组件。

总结TodoList案例
    1.组件化编码流程：
        (1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
        ​(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
            ​①.一个组件在用：放在组件自身即可。
            ②. 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。
        ​(3).实现交互：从绑定事件开始。

    2.props适用于：
            ​(1).父组件 ==> 子组件 通信
                通信：传递数据
            ​(2).子组件 ==> 父组件 通信（要求父先给子一个函数）

    3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！

    4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。