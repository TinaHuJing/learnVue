<template>
	<div>
		<table v-for="i in data" :key="i.userName">
			<tr>
				<td>{{i.userName}}</td>
				<td v-for="w in week" :key="w.week">{{w.week}}</td>
			</tr>
			<tr v-for="c in i.course" :key="c.jie">
				<td>{{c.jie}}</td>
				<template v-if="c.sheet">
					<td v-for="(s,index) in c.sheet" :key="index">{{s.ke}}</td>
				</template>
			</tr>
		</table>
	</div>
</template>
<script>
import _ from "lodash";
export default {
	name: "demo",
	data() {
		return {
			data: [
				{
					userName: "张三",
					course: [
						{
							week: "周三",
							jie: "第1节",
							ke: "语文"
						},
						{
							week: "周一",
							jie: "第1节",
							ke: "数学"
						},
						{
							week: "周五",
							jie: "第4节",
							ke: "英语"
						}
					]
				},
				{
					userName: "里里",
					course: [
						{
							week: "周一",
							jie: "第5节",
							ke: "数学"
						},
						{
							week: "周五",
							jie: "第4节",
							ke: "英语"
						}
					]
				}
			],
			week: [
				{
					week: "周一"
				},
				{
					week: "周二"
				},
				{
					week: "周三"
				},
				{
					week: "周四"
				},
				{
					week: "周五"
				},
				{
					week: "周六"
				},
				{
					week: "周日"
				}
			],
			jie: [
				{
					jie: "第1节"
				},
				{
					jie: "第2节"
				},
				{
					jie: "第3节"
				},
				{
					jie: "第4节"
				},
				{
					jie: "第5节"
				}
			]
		};
	},
	created() {
		let arr = [];
		this.data.forEach(_d => {
			let course = [];
			this.jie.forEach(_j => {
				let sheet = [];
				this.week.forEach(_w => {
					let s = [];
					_d.course.forEach(_c => {
						_c.id = _c.jie + "_" + _c.week;
						s.push(_c);
					});
					if (s.length > 0) {
						let index = _.findIndex(s, function(chr) {
							return chr.id == _j.jie + "_" + _w.week;
						});
						if (index != -1) {
							sheet.push({
								ke: s[index].ke
							});
						} else {
							sheet.push({
								ke: ""
							});
						}
					}
				});
				course.push({
					jie: _j.jie,
					sheet: sheet
				});
			});
			arr.push({
				userName: _d.userName,
				course: course
			});
		});
		this.data = arr;
	}
};
</script>
<style>
table {
	border: 1px solid #ccc;
	border-collapse: collapse;
	margin: 10px;
}
table td {
	line-height: 30px;
	border: 1px solid #ccc;
	width: 80px;
	text-align: center;
}
</style>


