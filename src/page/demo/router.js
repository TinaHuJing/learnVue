const Demo = r => require.ensure([], () => r(require('./index.vue')), 'Demo');
const Demo1 = r => require.ensure([], () => r(require('./demo1/index.vue')), 'Demo1');
const Demo2 = r => require.ensure([], () => r(require('./demo2/index.vue')), 'Demo2');
const Demo3 = r => require.ensure([], () => r(require('./demo3/index.vue')), 'Demo3');
const Demo4 = r => require.ensure([], () => r(require('./demo4.vue')));
const Demo5 = r => require.ensure([], () => r(require('./demo5/index.vue')));
const Demo6 = r => require.ensure([], () => r(require('./demo6/index.vue')));
const Demo7 = r => require.ensure([], () => r(require('./demo7/index.vue')));

let routes = [
    {
        path: '/demo',
        name: '',
        component: Demo,
        children: [
            {
                path: 'demo1',
                name: 'demo1',
                component: Demo1,
            }, {
                path: 'demo2',
                name: 'demo2',
                component: Demo2,
            }, {
                path: 'demo3',
                name: 'demo3',
                component: Demo3,
            }, {
                path: 'demo4',
                name: 'demo4',
                component: Demo4,
            } ,{
                path: 'demo5',
                name: 'demo5',
                component: Demo5,
            }, {
                path: 'demo6',
                name: 'demo6',
                component: Demo6,
            }, {
                path: 'demo7',
                name: 'demo7',
                component: Demo7,
            }
        ]
    }
]

export default routes