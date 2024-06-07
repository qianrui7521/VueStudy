Vue脚手架是Vue官方提供的标准化开发工具(开发平台)

程序员写.vue文件 要通过脚手架 浏览器才认识

脚手架 真正的名字 Vue CLI 
CLI: commend line interface 命令行接口工具


使用：
    1. 当第一次使用时 全局安装 @vue/cli 包
        (安装之后 系统中就有一个命令 vue 来创建脚手架)
        安装命令：npm install -g @vue/cli  （使用hpinc网络）
    2. 创建项目(脚手架+hello word小案例)
        在想要的路径中输入
        命令： vue create vue_test
        会让选择使用Vue的版本：①vue2 ②vue3 ③自定义
            bable  将ES6语法转为ES5语法
            eslint  语法检查(检查语法问题)
    3. 执行
        命令：
            cd 项目名称  (进入项目)
            npm run serve  (编译)
        完成后会提示：
            App running at:
            - Local:   http://localhost:8081/  (自己访问)
            - Network: unavailable  (给其他疼访问)