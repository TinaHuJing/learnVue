<template>
    <div>
        <el-table border :data="tableData" style="">
            <el-table-column prop="1" label="1"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [],
        };
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.axios
                .get("http://1.shiyuesoft.com/api/dy/edu_activities", {
                    yearValue: "2020-2021",
                    termValue: "2",
                    activityType: 1,
                    start: 1,
                    size: 30,
                })
                .then(
                    (response) => {
                        console.log(response.data); //成功回调
                    },
                    (response) => {
                        //失败回调
                    }
                );
        },
    },
};
</script>
<style></style>
