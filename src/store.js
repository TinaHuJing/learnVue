//用于储存的模块，将内容存储到localhost中
const STORAGE_KEY = 'todos-vue.js'
export default { //导出以下feth和save两个方法
    feth() {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
}