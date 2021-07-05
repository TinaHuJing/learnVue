<template>
	<div>
		<table cellpadding="0" cellspacing="0" style="width:100%;">
			<thead>
				<th v-for="item in tableTitle" :key="item.key">{{item.text}}</th>
			</thead>
			<tbody>
				<tr v-for="t in dataSource" :key="t.key">
					<td 
						v-for="(item,i) in tableTitle" 
						:key="item.key"
						:style="{'padding-left':isFirstCol==i?t.pl*30+'px':'','display':t.dis}"
                         @click="clickOpenContract(t)">
						 <span v-if='isFirstCol==i'>
							<span v-if="t.children && t.children.length>0&&!t.open" class="fa fa-caret-right cp" title="点击展开"></span>
							<span v-if="t.children && t.children.length>0&&t.open" class="fa fa-caret-down cp" title="点击收缩"></span>
							<span v-if="t.children && t.children.length==0" class="fa fa-file-o"></span>
							<span v-else-if="t.open" class="fa fa-folder-open-o"></span>
							<span v-else class="fa fa-folder-o"></span>
						</span>
						{{t[item.key]}}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
  name: "ScTreeTable",
  props: {
    // 表头
    tableTitle: {
      type: Array,
      default: []
    },
    // 表内容
    tableData: {
      type: Array,
      default: []
    },
    // 表的数据是否是树形结构，默认是平级数据
    isTreeData: {
      type: Boolean,
      default: false
    },
    // 第几列有缩进显示
    isFirstCol: {
      type: String,
      default: "0"
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      arr: []
    };
  },
  created() {
    if (this.isTreeData) {
      // 树形数据
      this.transTreeData(this.tableData, 0);
    } else {
      // 平级数据
      let arr = this.transDataToTree(this.tableData, "root");
      this.transTreeData(arr, 0);
    }
  },
  methods: {
    //  树形数据转为需要的数据
    transTreeData(data, n) {
      // 参数的意义data=>需要处理的数据
      // n总共有几层子
      for (let i = 0; i < data.length; i++) {
        data[i].pl = n;
        data[i].open = true;
        this.arr.push(data[i]);
        if (data[i].children && data[i].children.length > 0) {
          this.transTreeData(data[i].children, n + 1);
        } else {
          data[i].children = [];
        }
      }
      this.dataSource = this.arr;
    },
    // 平级数据转化为需要的数据
    transDataToTree(data, parentId) {
      // 参数的意义data=>需要处理的数据
      // parentId=>父ID
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].parentId == parentId) {
          data[i].children = this.transDataToTree(data, data[i].id);
          arr.push(data[i]);
        }
      }
      return arr;
    },
    // 展开收缩事件
    clickOpenContract(row) {
      this.dataSource.forEach(t => {
        if (row.id == t.id) {
          t.open = !t.open;
          t.children.forEach(tt => {
            if (tt.dis == "none") {
              this.$set(tt, "dis", "");
            } else {
              this.$set(tt, "dis", "none");
            }
          });
        }
      });
    }
  }
};
</script>
<style scoped>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
table td,
th {
  border: 1px solid #ccc;
  line-height: 30px;
  padding: 0 5px;
}
.fa-caret-right,
.fa-caret-down {
  padding: 5px 0 5px 5px;
}
</style>


