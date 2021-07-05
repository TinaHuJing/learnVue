

import Quill from 'quill';
let fonts = ['sans-serif', 'serif', "PingFangSC-Regular", 'Verdana', 'Microsoft-YaHei','SimSun', 'SimHei','KaiTi','Arial'];
let Font = Quill.import('formats/font');
Font.whitelist = fonts; //将字体加入到白名单
let fontSize = ['small', false, 'large', 'huge', '12px','14px','16px','18px','20px','22px','24px','26px','32px','48px'];
let FontSize = Quill.import('formats/size');
console.log(FontSize)
FontSize.whitelist = fontSize; //将字体加入到白名单
export default {
    theme: 'snow',
    boundary: document.body,
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': ['sans-serif', 'serif', 'Arial','Microsoft-YaHei','SimSun', 'SimHei','KaiTi'] }], 
            [{ 'size': ['12px','14px','16px','18px','20px','22px','24px','26px','32px','48px'] }],
            [{ 'align': [] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            // ['blockquote', 'code-block'],
            //   [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            //   [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            // ['clean'],
            ['link', 'image'] //'video'
        ]
    },
    placeholder: '',
    readOnly: false
}
