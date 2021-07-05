import leftNav from './src/LeftNav.vue';

leftNav.install = function(val) { //定义一个Vue插件使用.install方法
    Vue.component(leftNav.name, leftNav)
}
export default leftNav;