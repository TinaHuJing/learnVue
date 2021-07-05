<template>
  <div id="Test">
    <span class="rf">
      <el-button type="success" @click="back">返回</el-button>
    </span>
    <h1>从我开始的地方以下就是test页面的内容了。。。。。。。。。。。。</h1>
    <ol>
      <li>使用router-link来实现路由调转，最简单的路由实现
        <br/>
        <router-link to="/test/home">去test里面的home页面</router-link>
        <br/>
        <router-link to="/test/about">去test里面的about页面</router-link>
      </li>
      <li>
        <left-nav class="my-nav" :navList="navlist"></left-nav>
      </li>
    </ol>
    <router-view></router-view>
  </div>
</template>
<<script>
import config from './config.js'
export default {
  name:'test',
  data(){
    return{
      navlist:config.navlist
    }
  },
  methods:{
    back(){
      window.history.go(-1)
    }
  }
}
</script>

