const My = r => require.ensure([], () => r(require('./My.vue')), 'My');
import myRouter from "../test/router.js";
import demoRouter from "../demo/router.js";

//Router 构造配置
let routes = [{
        path: '/my', //配置了路由的路径
        name: '',
        component: My, //配置了映射的组件
    },
    // 重定向
    { path: '/', redirect: '/my' }
];
export default [...routes,...myRouter,...demoRouter] //需要注意的是，export default routers必须写在文件底部，而且后面还需要接一空行，否则无法通过 ESlint 语法验证