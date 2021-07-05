<template>
<div class="ql-editor">
    <div ref="editor"></div>
    <input type="file" ref="input" :name="name" @change="handleChange" :multiple="multiple" :accept="accept" style="display:none;"/>
</div>
</template>
<script>
// require sources
import Quill from 'quill';
import './vue-quill-editor/css/quill.snow.scss';
import './vue-quill-editor/css/quill.core.scss';
import './vue-quill-editor/css/quill.bubble.scss';
import ajax from './vue-quill-editor/js/ajax';
import defaultOptions from './vue-quill-editor/js/options';
const titleConfig = {
  'ql-bold':'加粗',
  'ql-color':'文字颜色',
  'ql-font':'字体',
  'ql-code':'插入代码',
  'ql-italic':'斜体',
  'ql-link':'添加链接',
  'ql-background':'背景颜色',
  'ql-size':'字体大小',
  'ql-strike':'删除线',
  'ql-script':'上标/下标',
  'ql-underline':'下划线',
  'ql-blockquote':'引用',
  'ql-header':'标题',
  'ql-indent':'缩进',
  'ql-list':'列表',
  'ql-align':'文本对齐',
  'ql-direction':'文本方向',
  'ql-code-block':'代码块',
  'ql-formula':'公式',
  'ql-image':'图片',
  'ql-video':'视频',
  'ql-clean':'清除字体样式'
};
export default {
    name: 'ElQuillEditor',

    props: {
        placeholder: String,
        content: String,
        value: String,
        height: String,
        disabled: {
            type: Boolean,
            default: false
        },
        httpRequest: {
            type: Function,
            default: ajax
        },
        disabled: {
            type: Boolean,
            default: false
        },
        options: {
            type: Object,
            default: ()=>{
                return {}
            }
        },
        limit: Number, // 同时上传文件数量限制
        multiple: { // 是否支持多选文件
            type: Boolean,
            default: false
        }, 
        accept: { //接受上传的文件类型（thumbnail-mode 模式下此参数无效）  image/gif, image/jpeg
            type: String,
            default: 'image/gif,image/jpeg,image/png,image/jpg'
        }, 
        name: { // 上传的文件字段名 fileUpload
            type: String,
            default: 'fileUpload'
        },  
        data: Object, //上传时附带的额外参数
        headers: Object, // 设置上传的请求头部
        withCredentials: { // 支持发送 cookie 凭证信息
            type: Boolean,
            default: true
        }, 
        beforeUpload: Function, // 上传之前的回调
        action: { // 上传地址
            type: String,
            default: '/zuul/api/storage/upload'
        },
        onExceed: Function // 文件超出个数限制时的钩子
    },

    data(){
        return {
            _options: {},
            _content: '',
            defaultOptions,
            quill: null,
            addRange: null,
            reqs: {},
        }
    },

    mounted(){
        this.initialize();
    },

    watch: {
        // Watch content change
        content(newVal, oldVal) {
            if (this.quill) {
                if (newVal && newVal !== this._content) {
                    this._content = newVal
                    this.quill.pasteHTML(newVal)
                } else if(!newVal) {
                    this.quill.setText('')
                }
            }
        },
        // Watch content change
        value(newVal, oldVal) {
            if (this.quill) {
                if (newVal && newVal !== this._content) {
                    this._content = newVal
                    this.quill.pasteHTML(newVal)
                } else if(!newVal) {
                    this.quill.setText('')
                }
            }
        },
        // Watch disabled change
        disabled(newVal, oldVal) {
            if (this.quill) {
                this.quill.enable(!newVal)
            }
        }
    },

    beforeDestroy() {
      this.quill = null
      delete this.quill
    },

    methods: {
        // Init Quill instance
        initialize(){
            if (this.$el) {
                // if(this.placeholder){
                //     this._options.placeholder = this.placeholder;
                // }
                // Options
                this._options = Object.assign({}, this.defaultOptions, this.options);
                
                // Instance
                this.quill = new Quill(this.$refs.editor, this._options);
                this.quill.enable(false);
                // Set editor content
                if (this.value || this.content) {
                    this.quill.pasteHTML(this.value || this.content)
                }
                // Disabled editor
                if (!this.disabled) {
                    this.quill.enable(true)
                }

                // Mark model as touched if editor lost focus
                this.quill.on('selection-change', range => {
                    if (!range) {
                        this.$emit('blur', this.quill)
                    } else {
                        this.$emit('focus', this.quill)
                    }
                })
                // Update model if text changes
                this.quill.on('text-change', (delta, oldDelta, source) => {
                    let html = this.$refs.editor.children[0].innerHTML
                    const quill = this.quill
                    const text = this.quill.getText()
                    if (html === '<p><br></p>') {html = ''}
                    this._content = html
                    this.$emit('input', this._content)
                    this.$emit('change', { html, text, quill })
                })
                //自定义图片事件
                this.quill.getModule('toolbar').addHandler('image', this.imgHandler)
                // Emit ready event
                this.$emit('ready', this.quill)
                this.addQuillTitle();
            }
        },
        // 自定义图片尺寸修改
        
        // 添加title
        addQuillTitle(){
            const oToolBar = document.querySelector('.ql-toolbar'),
                    aButton = oToolBar.querySelectorAll('button'),
                    aSelect =  oToolBar.querySelectorAll('select');
            aButton.forEach(function(item){
                if(item.className === 'ql-script'){
                    item.value === 'sub' ? item.title = '下标': item.title = '上标';
                }else if(item.className === 'ql-indent'){
                    item.value === '+1' ? item.title ='向右缩进': item.title ='向左缩进';
                }else{
                    item.title = titleConfig[item.classList[0]];
                }
            });
            aSelect.forEach(function(item){
                if(item.classList[0] == 'ql-color' || item.classList[0] == 'ql-background'){
                console.log(item)
                    oToolBar.querySelectorAll('.'+item.classList[0])[0].title = titleConfig[item.classList[0]];
                } else {
                    item.parentNode.title = titleConfig[item.classList[0]];
                }
            });
        },
        // 自定义图片上传
        imgHandler(state){
            this.addRange = this.quill.getSelection();
            // 获取元素 选择文件
            if(this.$refs.input){
                this.$refs.input.click()
            }
        },
        isImage(str) {
            return str.indexOf('image') !== -1;
        },
        handleChange(ev){
            const files = ev.target.files;
            if (!files) return;
            this.uploadFiles(files);
        },
        uploadFiles(files) {
            if (this.limit && files.length > this.limit) {
                this.onExceed && this.onExceed(files, this.fileList);
                return;
            }

            let postFiles = Array.prototype.slice.call(files);
            if (!this.multiple) { postFiles = postFiles.slice(0, 1); }

            if (postFiles.length === 0) { return; }

            postFiles.forEach(rawFile => {
                this.upload(rawFile)
            });
        },
        upload(rawFile) {
            this.$refs.input.value = null;

            if (!this.beforeUpload) {
                return this.post(rawFile);
            }

            const before = this.beforeUpload(rawFile);
            if (before !== false) {
                this.post(rawFile);
            }
        },
        post(rawFile) {
            const { uid } = rawFile;
            const options = {
                headers: this.headers,
                withCredentials: this.withCredentials,
                file: rawFile,
                data: this.data,
                filename: this.name,
                action: this.action,
                onProgress: e => {
                    // this.onProgress(e, rawFile);
                },
                onSuccess: res => {
                    this.onSuccess(res, rawFile);
                    delete this.reqs[uid];
                },
                onError: err => {
                    // this.onError(err, rawFile);
                    delete this.reqs[uid];
                }
            };
            const req = this.httpRequest(options);
            this.reqs[uid] = req;
            if (req && req.then) {
                req.then(options.onSuccess, options.onError);
            }
        },
        onSuccess(res, rawFile){
            if(res.status == 200 && res.data){
                // 设置表格中的图片
                this.quill.insertEmbed(this.addRange !== null ? this.addRange.index : 0, 'image', res.data.path, Quill.sources.USER) 
            }
        }
    }
};
</script>