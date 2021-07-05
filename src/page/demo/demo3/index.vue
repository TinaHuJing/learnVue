<template>
    <div>
        <sc-tree-table :tableTitle="tableTitle" :tableData="tableData" isFirstCol="1"></sc-tree-table>
    </div>
</template>
<script>
export default {
  name: "demo3",
  data() {
    return {
      tableTitle: [
        {
          key: "1",
          text: "序号"
        },
        {
          key: "2",
          text: "名称"
        },
        {
          key: "3",
          text: "时间"
        },
        {
          key: "4",
          text: "操作"
        }
      ],
    //   tableData: [
    //     {
    //       id: "1",
    //       parentId: "root",
    //       "1": "1",
    //       "2": "我是一级课程1",
    //       "3": "2017-2018",
    //       children: [
    //         {
    //           id: "1-1",
    //           parentId: "1",
    //           "1": "1-1",
    //           "2": "我是一级课程1-1",
    //           "3": "2017-2018"
    //         },
    //         {
    //           id: "1-2",
    //           parentId: "1",
    //           "1": "1-2",
    //           "2": "我是一级课程1-2",
    //           "3": "2017-2018"
    //         },
    //         {
    //           id: "1-3",
    //           parentId: "1",
    //           "1": "1-3",
    //           "2": "我是一级课程1-3",
    //           "3": "2017-2018"
    //         }
    //       ]
    //     },
    //     {
    //       id: "2",
    //       parentId: "root",
    //       "1": "2",
    //       "2": "我是一级课程2",
    //       "3": "2017-2018",
    //       children: [
    //         {
    //           id: "2-1",
    //           parentId: "2",
    //           "1": "2-1",
    //           "2": "我是一级课程2-1",
    //           "3": "2017-2018"
    //         },
    //         {
    //           id: "2-1",
    //           parentId: "2",
    //           "1": "2-1",
    //           "2": "我是一级课程2-1",
    //           "3": "2017-2018",
    //           children: [
    //                 {
    //                 id: "2-1-1",
    //                 parentId: "2-1",
    //                 "1": "2-1-1",
    //                 "2": "我是一级课程2-1-1",
    //                 "3": "2017-2018"
    //                 },
    //                 {
    //                 id: "2-1-2",
    //                 parentId: "2-1",
    //                 "1": "2-1-2",
    //                 "2": "我是一级课程2-1-2",
    //                 "3": "2017-2018"
    //                 }
    //             ]
    //         },
    //         {
    //           id: "2-3",
    //           parentId: "1",
    //           "1": "2-3",
    //           "2": "我是一级课程2-3",
    //           "3": "2017-2018"
    //         }
    //       ]
    //     },
    //     {
    //       id: "3",
    //       parentId: "root",
    //       "1": "3",
    //       "2": "我是一级课程3",
    //       "3": "2017-2018"
    //     }
    //   ] 
      //   tableData:[
      //       {"questionId":"190efbc4-015b-4aba-9937-0b7791c57822",
      //       "bbe38889-8310-46f0-9d38-d7df45f7dc86":"1.20",
      //       "children":[
      //           {"questionId":"1a45891c-ab41-4e23-92b8-5ffd3df79620",
      //           "bbe38889-8310-46f0-9d38-d7df45f7dc86":"1.20",
      //           "gAverage":"1.20",
      //           "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //           "questionName":"1"}, {"questionId":"1a45891c-ab41-4e23-92b8-5ffd3df79620",
      //           "bbe38889-8310-46f0-9d38-d7df45f7dc86":"1.20",
      //           "gAverage":"1.20",
      //           "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //           "questionName":"11"}, {"questionId":"1a45891c-ab41-4e23-92b8-5ffd3df79620",
      //           "bbe38889-8310-46f0-9d38-d7df45f7dc86":"1.20",
      //           "gAverage":"1.20",
      //           "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //           "questionName":"1"}
      //         ],
      //         "gAverage":"1.20",
      //         "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //         "questionName":"一"
      //     },
      //     {"questionId":"ac9eb5fc-9d50-4708-bb5a-88ec4cfe93dc",
      //     "bbe38889-8310-46f0-9d38-d7df45f7dc86":"",
      //     "children":[
      //         {"questionId":"af817ad8-4963-4ae5-9cc2-c693c8487bf9",
      //         "bbe38889-8310-46f0-9d38-d7df45f7dc86":"",
      //         "gAverage":"",
      //         "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //         "questionName":"2"}, {"questionId":"af817ad8-4963-4ae5-9cc2-c693c8487bf9",
      //         "bbe38889-8310-46f0-9d38-d7df45f7dc86":"",
      //         "gAverage":"",
      //         "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //         "questionName":"22"},{"questionId":"af817ad8-4963-4ae5-9cc2-c693c8487bf9",
      //         "bbe38889-8310-46f0-9d38-d7df45f7dc86":"",
      //         "gAverage":"",
      //         "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //         "questionName":"333"}
      //         ],
      //     "gAverage":"",
      //     "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //     "questionName":"二"
      //     },
      //     {"questionId":"8810adcf-0c47-4b4f-9092-c3c980a7c9a4",
      //     "bbe38889-8310-46f0-9d38-d7df45f7dc86":"",
      //     "children":[
      //         {"questionId":"de7fd092-b92e-4337-a201-78fe37e461f5",
      //         "bbe38889-8310-46f0-9d38-d7df45f7dc86":"",
      //         "gAverage":"",
      //         "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //         "questionName":"3"}
      //     ],
      //       "gAverage":"",
      //       "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //       "questionName":"三"
      //     },
      //     {"questionId":"sum",
      //     "bbe38889-8310-46f0-9d38-d7df45f7dc86":"1.20",
      //     "gAverage":"1.20",
      //     "d1bb0cf9-3e89-4d5b-8f28-4609efd03909":"",
      //     "questionName":"全卷"}
      //   ],
        tableData: [
          {
            id: "1",
            parentId: "root",
            "1": "1",
            "2": "我是一级课程1",
            "3": "2017-2018",
            children: []
          },
          {
            id: "1-1",
            parentId: "1",
            "1": "1-1",
            "2": "我是一级课程1-1",
            "3": "2017-2018"
          },

          {
            id: "1-3",
            parentId: "1",
            "1": "1-3",
            "2": "我是一级课程1-3",
            "3": "2017-2018"
          },
          {
            id: "2",
            parentId: "root",
            "1": "2",
            "2": "我是一级课程2",
            "3": "2017-2018"
          },
          {
            id: "1-2-1",
            parentId: "1-2",
            "1": "1-2-1",
            "2": "我是一级课程1-2-1",
            "3": "2017-2018"
          },
          {
            id: "3",
            parentId: "root",
            "1": "3",
            "2": "我是一级课程3",
            "3": "2017-2018"
          },
          {
            id: "2-2",
            parentId: "2",
            "1": "2-2",
            "2": "我是一级课程2-2",
            "3": "2017-2018"
          },
          {
            id: "1-2",
            parentId: "1",
            "1": "1-2",
            "2": "我是一级课程1-2",
            "3": "2017-2018",
            children: []
          },
          {
            id: "2-1",
            parentId: "2",
            "1": "2-1",
            "2": "我是一级课程2-1",
            "3": "2017-2018"
          },
          {
            id: "2-3",
            parentId: "2",
            "1": "2-3",
            "2": "我是一级课程2-3",
            "3": "2017-2018"
          },
          {
            id: "3-1",
            parentId: "3",
            "1": "3-1",
            "2": "我是一级课程3-1",
            "3": "2017-2018"
          }
        ]
    };
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
</style>


