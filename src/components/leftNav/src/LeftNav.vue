<template>
    <div id="left-nav">
      <!--  使用elementUI中的导航实现   -->
           <el-menu mode="vertical" router :unique-opened="true" :default-active="defaultActive">
            <div class="sy-nav-hover" v-for="item in navList" :key="item.index">
                <el-submenu v-if="item.isGroup" :index="item.index">
                   <!--  //注释： <el-submenu v-if="item.isGroup" :index="item.index+''"> item.index+''将数字类型为index值转为字符串，如果config.js页面定义时为数字类型的话，如：index:1,则需要使用item.index+''将数字1转化为字符'1'  -->
                    <template slot="title">
                        <i :class="item.iconClass"></i>
                        {{item.name}}
                    </template>
                    <el-menu-item v-for="child in item.children" :key="child.index" :index="child.index">
                        <i :class="child.iconClass"></i>{{child.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-if="!item.isGroup" :index="item.index">
                    <i :class="item.iconClass"></i>
                    {{item.name}}
                </el-menu-item>
            </div>
        </el-menu> 
        <!-- 自定义导航 -->
        
    </div>
</template>
<script>
export default {
    name: 'leftNav',
    props: {
        defaultActive: {
            type: String,
            default: '/test/resource'
        },
        navList: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>
<style scoped>
ul {
    padding: 0;
}

.left-nav {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}

.el-menu-vertical-demo {
    height: 100%;
}

.sy-nav-hover {
    position: relative;
}

.sy-nav-hover:hover ul.sy-nav-hover-target {
    display: block;
}

.sy-nav-hover-target {
    position: absolute;
    left: 100%;
    top: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    display: none;
}
</style>

