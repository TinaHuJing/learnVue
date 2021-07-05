// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'/*引入App这个组件*/
import router from './router/index'/*引入路由配置*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import selfComponents from  '@/components/index.js';
import axios from "axios";
import VueAxios from 'vue-axios'
Vue.use(ElementUI)
Vue.use(selfComponents)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',/*最后效果将会替换页面中id为app的div元素*/
  router,/*使用路由*/
  components: { App },/*告知当前页面想使用App这个组件*/
  template: '<App/>'/*告知页面这个组件用这样的标签来包裹着,并且使用它*/
})
