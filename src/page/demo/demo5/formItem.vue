<template>
	<!-- 动态表单 -->
	<el-form>
		<el-form-item v-for="item in configItems" :key="item.key" :label="item.label" v-if="item._ifShow">
			<components
				:is="item.tag"
				v-model="formModel[item.key]"
				v-bind="item.props"
				:clearable="item.props.clearable"
			>
				<el-option
					v-for="item in item.props.options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				></el-option>
			</components>
		</el-form-item>
	</el-form>
</template>
<script>
export default {
	props: {
		formItems: {
			type: Array,
			default: []
		}
	},
	computed: {
		configItems() {
			return this.formItems.map(item => {
				return this.formatItem(item, this.formModel);
			});

			// 简写隐式返回值 return this.formItems.map(item => this.formatItem(item, this.formModel))
			// console.log(a)
			// return a
		}
	},
	data() {
		return {
			tagMap: {
				input: {
					tag: "el-input",
					props: {
						clearable: false,
                        options:[]
					}
				},
				select: {
					tag: "el-select",
					props: {
						clearable: true,
                        options:[]
					}
				}
			},
			formModel: {}, //表单中的值
			options: [
				{
					value: "选项1",
					label: "黄金糕"
				},
				{
					value: "选项2",
					label: "双皮奶"
				},
				{
					value: "选项3",
					label: "蚵仔煎"
				},
				{
					value: "选项4",
					label: "龙须面"
				},
				{
					value: "选项5",
					label: "北京烤鸭"
				}
			]
		};
	},
	created() {
		this.getFormModel();
	},
	mounted() {},
	methods: {
		getFormModel() {
			this.formItems.forEach(f => {
				this.$set(this.formModel, f.key, "");
			});
		},
		isFunction(fn) {
			// console.log(fn)
			return typeof fn === "function";
		},
		formatItem(config, form) {
			let item = { ...config };
			let type = item.type || "input";
			let comp = this.tagMap[type];
            //    item.tag = comp.tag
            let props = item.props ? this.isFunction(item.props) ? item.props(form) : item.props :{}
            // console.log(props,form)
			item.props = { ...comp.props, ...props };
			item = { ...comp, ...item };
			console.log(item)
            // 如果表单中的任意项中有一个判断这个字段是否展示的方法，那么调用这个方法，看是否展示该项，如果没有此方法，则默认展示的
			item._ifShow = this.isFunction(item.ifShow) ? item.ifShow(form) : true;
			return item;
		}
	}
};
</script>
<style>
</style>


