<template>
<!-- 进入其他学习层面的导航 -->
  <div class="my-vue-learing">
    <h1>学习Vue的路程......</h1>
    <el-button  @click="$router.push('/test')">小练习</el-button>
    <el-button  @click="$router.push('/demo')">demo</el-button>
    <a href="#">这是为了查看scss混合器的使用效果</a>
  </div>
</template>
<script>
export default {
  name: 'my',
}
</script>
<style lang="scss" scoped>
  $color: pink;
  @mixin link-color($n,$h,$v){
    color: $n;
    &:hover{color: $h};
    &:visited{color: $v}
  }
  @import "../../css/var.scss";
  h1 {
    color:red;
    body &{
      color:green;
      }
  }
  .my-vue-learing{
    color: $color;
  }
  a{
    @include link-color(block,yellow ,red )
  }
</style>
