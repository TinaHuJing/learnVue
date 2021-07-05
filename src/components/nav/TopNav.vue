<template>
    <div class="top-nav">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect">
            <el-menu-item index="/login">欢迎</el-menu-item>
            <el-menu-item index="/hello" @click="logout">登出</el-menu-item>
            <el-menu-item index="/theme" @chick="showThemeDialog">设置主题</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import change from '../../tools/theme';
import config from '../../config';
export default {
    name: 'app',
    data() {
        return {
            activeIndex: '/login',
            colors: {
                primary: '#20a0ff'
            },
            themeDialogVisible: false,
        }
    },

    computed: {

    },

    watch: {

    },
    methods: {
        logout() {//退出
            window.location.href = 'http://10.0.0.18:9999/logout'
        },
        handleSelect() {

        },
        showThemeDialog() {//显示主题的选颜色
            this.themeDialogVisible = true;
        },

        submitForm() {//确认设置的主题颜色
            this.themeDialogVisible = false;
            change(this.colors.primary);
        },

        created() {

        },

        mounted() {

        }
    }
}
</script>
<style scoped>

</style>
