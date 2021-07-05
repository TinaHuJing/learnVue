<template>
	<div id="demo">
		<el-row>
			<el-col :span="4">
				<el-menu v-if="navList.length>0" :default-active="currentMenu" :router="true">
					<div v-for="item in navList" :key="item.index">
						<el-submenu v-if="item.children&&item.children.length>0" :index="item.index">
							<template slot="title">
								<i :class="item.icon"></i>
								<span>{{item.name}}</span>
							</template>
							<el-menu-item-group v-for="i in item.children" :key="i.index">
								<el-menu-item :index="i.index">{{i.name}}</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-menu-item v-else :index="item.index">
							<i :class="item.icon"></i>
							<span>{{item.name}}</span>
						</el-menu-item>
					</div>
				</el-menu>
			</el-col>
			<el-col :span="20">
				<transition name="slide-fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import config from "./config.js";
export default {
	data() {
		return {
			navList: config.navList,
			currentMenu: "/demo/demo1"
		};
	},
	created() {
		this.currentMenu = this.$route.path;
	}
};
</script>
<style scoped>
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
	opacity: 0;
}
</style>

