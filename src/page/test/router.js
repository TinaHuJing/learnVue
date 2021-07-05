const Test = r => require.ensure([], () => r(require('./test.vue')), 'Test');
const Home = r => require.ensure([], () => r(require('./simpleRouter/Home.vue')), 'Test');
const About = r => require.ensure([], () => r(require('./simpleRouter/About.vue')), 'Test');
const Slot = r => require.ensure([], () => r(require('./slot/Slot.vue')), 'Test');
const Jsx = r => require.ensure([], () => r(require('./jsx/index.vue')), 'Test');
let routes = [{
    path: '/test',
    name: '',
    component: Test,
    children: [
        { path: 'home', name: 'home', component: Home },
        { path: 'about', name: 'about', component: About },
        { path: 'slot', name: 'Slot', component: Slot },
        { path: 'jsx', name: 'Jsx', component: Jsx },
    ]
}]
export default routes