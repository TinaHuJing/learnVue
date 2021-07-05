const navlist = [{
    index: '1' /* 字符串 */ ,
    isGroup: true,
    name: '小练习',
    iconClass: 'el-icon-document',
    children: [{
            index: '/my/1',
            iconClass: 'el-icon-document',
            name: '实时记录用户输入input框的内容',
        },
        {
            index: '/my/2',
            iconClass: 'el-icon-document',
            name: '最简单的路由配置',
        }, {
            index: '/test',
            iconClass: 'el-icon-document',
            name: 'test主页面',
        }, {
            index: '/test/slot',
            iconClass: 'el-icon-document',
            name: 'slot的学习',
        }
    ]
}]
export default {
    navlist
}