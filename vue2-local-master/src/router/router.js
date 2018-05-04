import App from '../App'


const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
    //本地测试
const localTest = r => require.ensure([], () => r(require('../page/localTest/localTest')), 'localTest');




export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/localTest'
        },
        //登录注册页
        {
            path: '/login',
            component: login
        },
        //本地测试页面
        {
            path: '/localTest',
            component: localTest
        }
    ]
}]