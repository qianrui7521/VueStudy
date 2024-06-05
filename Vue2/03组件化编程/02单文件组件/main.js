import app from './app'

new Vue({
    el:'#root',
    template:`
        <div>
            <app></app>
        </div>
    `,
    data:{
        msg:'你好啊'
    },
    component:{
        app
    }
})