import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/page/my/router.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  history: true,
  hashbang: false, //将路径格式化为#!开头
  transitionOnLoad: true, //初次加载是否启用场景切换
  saveScrollPosition: false, //在启用html5 history模式的时候生效，用于后退操作的时候记住之前的滚动条位置
  routes
})
