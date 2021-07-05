<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view> <!-- 在页面中放入一个路由视图容器 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-col-20{
    position: relative;
    text-align: left;
    &>div{
      padding-left: 10px;
    }
}
</style>
