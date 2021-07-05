<template>
  <!-- 动态表单 -->
  <form-item :formItems="formItems"></form-item>
</template>
<script>
import formItem from "./formItem.vue";
export default {
  components: { formItem },
  data() {
    return {
      formItems: [
        {
          label: "输入框",
          key: "item1",
          type: "input",
          ifShow(form) {
            return form.item2 !== "选项2";
          },
        },
        {
          label: "输入框1",
          key: "item3",
          type: "input",
        },
        {
          label: "下拉框",
          key: "item2",
          type: "select",
          props: {
            options: [
              { value: "选项1", label: "黄金糕" },
              { value: "选项2", label: "双皮奶" },
              { value: "选项3", label: "蚵仔煎" },
              { value: "选项4", label: "龙须面" },
              { value: "选项5", label: "北京烤鸭" },
            ],
          },
        },
        {
          label: "下拉框22222222222",
          key: "item4",
          type: "select",
          props(form) {
            let options = [];
            if (form.item2 == "选项2") {
              options = [
                { value: 1, label: "select1" },
                { value: 2, label: "select2" },
              ];
            } else {
              options = [
                { value: 3, label: "select3" },
                { value: 4, label: "select4" },
              ];
            }
            return { options };
          },
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style>
</style>


