<template>
    <div id="toolbar" slot="toolbar">
        <button class="ql-bold" title="加粗">Bold</button>
        <select class="ql-header" title="段落格式">
            <option selected>正文</option>
            <option value="2">标题1</option>
            <option value="3">标题2</option>
            <option value="4">标题3</option>
        </select>
        <button class="ql-list" value="ordered" title="有序列表"></button>
        <button class="ql-list" value="bullet" title="无序列表"></button>
        <select class="ql-color" value="color" title="字体颜色"></select>
        <span class="icon-pic custom-icon" title="图片" @click="insertImgClick($event)"></span>  <!-- 插入图片 -->
        <span class="icon-video custom-icon" title="视频" @click="insertImgClick($event)"></span>  <!-- 插入视频 -->
        <input style="display: none;" type="file" id="insert_image" @change="fileInsert($event)">  <!-- 选择图片input -->
        <input style="display: none;" type="file" id="insert_video" @change="fileInsert($event)">  <!-- 选择视频input -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    created(){

    },
    methods: {
       // 富文本编辑器 点击插入图片或者视频
        insertImgClick (e) {
            if (e.target.className.indexOf('icon-pic') != -1) {
                document.getElementById('insert_image').click();
            } else if (e.target.className.indexOf('icon-video') != -1) {
                document.getElementById('insert_video').click();
            }
        },
        // 富文本编辑器 点击插入图片或者视频上传并预览
        fileInsert (e) {
            var oFile = e.target.files[0];
            if (typeof (oFile) === 'undefined') {
                return;
            }
            let sExtensionName = oFile.name.substring(oFile.name.lastIndexOf('.') + 1).toLowerCase();   // 文件扩展名
            let sfileType = ''; // 上传文件类型
            if (e.target.id == 'insert_image') {
                sfileType = 'image'
                if (sExtensionName !== 'png' && sExtensionName !== 'jpg' && sExtensionName !== 'jpeg') {
                    alert('不支持该类型图片');
                    return;
                }
            }
            if (e.target.id == 'insert_video') {
                sfileType = 'video';
                if (sExtensionName !== 'mp4' && sExtensionName !== 'avi' && sExtensionName !== 'mov') {
                    alert('不支持该类型视频');
                    return;
                }
                let maxSize = 100*1024*1024;    // 100MB
                if (oFile.size > maxSize) {
                    alert('上传视频大小不能超过100MB');
                    return;
                }
            }
            var reader = new FileReader();
            reader.readAsDataURL(oFile);
            reader.onloadend = () => {
                let formData = new FormData(); // 通过formdata上传
                formData.append('file', oFile);
                let sUrl = '';
                if (sfileType == 'image') {
                    sUrl = 'Pic';
                }
                if (sfileType == 'video') {
                    sUrl = 'Vie';
                }
                var url = this.api_config + '/dealerIndex/upload' + sUrl + '.htm';
                this.axios.post(url, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then((res) => {
                    this.editor.insertEmbed(this.editor.selection.savedRange.index, sfileType, res.data.data);  // 这个方法用来手动插入dom到编辑器里
                    let isAndroid = this.$is_android(); // 判断是ios还是android
                    if (isAndroid) {
                        $('video').removeAttr('controls');
                        $('video').attr('x5-video-player-type', 'h5');
                    }
                    this.editor.setSelection(this.editor.selection.savedRange.index + 1);  // 这个方法可以获取光标位置
                }).catch((response) => {
                    console.log('失败', response);
                })
            }
        },
    }
}
</script>
<style>
ol {
    line-height: 24px
}

p {
    padding: 0;
    margin: 0;
}
.drag-demo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.drag {
    position: absolute;
}

.drag2 {
    top: 0;
    right: 0;
    border-radius: 90px;
    height: 100px;
    width: 100px;
    text-align: center;
    line-height: 100px;
    background: red;
    color: #fff;
    cursor: pointer
}
.drag3{
    border: 1px solid #ccc;
    height: 200px;
    width: 300px;
    margin: 30px auto
}
</style>


