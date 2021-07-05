<template>
    <div class="drag-demo">
        <h3>
            draggable属性
        </h3>
        <p>1、规定元素可以拖动(和直接在页面选中元素的然后拖动的效果类似)</p>
        <p>2、Internet Explorer 9+, Firefox, Opera, Chrome, and Safari 支持 draggable 属性。</p>
        <ol>
            <li>
                拖动事件
                <ul>
                    <li>drag：在按住鼠标拖动的过程中触发（持续性触发）</li>
                    <li>dragstart：在按住鼠标开始拖动时触发（一次）</li>
                    <li>dragend：在释放鼠标后触发（一次）</li>
                </ul>
            </li>
            <li>
                放置事件
                <ul>
                    <li>dragenter：只要有元素被拖动到放置元素上，就是触发</li>
                    <li>dragover：紧跟dragenter事件，在被拖动的元素还在放置目标的范围内移动时，就会连续触发</li>
                    <li>dragleave：元素被拖出放置元素</li>
                    <li>drop：被拖动元素放置到目标元素上的时候 </li>
                </ul>
            </li>
            <li>
                完整事件流
                <br/> dragstart->drag->dragenter->dragover->dragleave->drop->dragend
            </li>
            <li>
                <p style="color:red;">
                    如果我们直接给一个元素添加draggable属性，在chrome，opera中是可以直接进行拖拽（没有可以释放的操作（比如箭头变+号）），但是在firefox却没有反应</p>
                <br/> 要解决这个问题必须为拖拽元素绑定dragstart事件处理函数，并且在该函数中调用event.dataTransfer.setData函数
                <pre>
                <code>
                    $('.canDrog > li').bind('dragstart',function(event){
                        //firefox 必须访问用于拖拽通信的dataTransfer对象
                        event.dataTransfer.setData("Text",'1');
                    });
                </code>
                </pre>
            </li>
        </ol>
        <!---->
        <p draggable="true" @dragstart="dragStart($event)" @dragend="dragEnd($event)" class="drag drag1">这是一个可拖动的段落</p>
        <p class="drag drag2">连续拖动的球</p>
        <p class="drag3" @drop="drop($event)" @dragover="allDrop($event)" @dragleave="dragleave($event)">
          撒的发生是
          <span style="float:right;">sfdasfdasfdasfd</span>
        </p>
        <p  class="drag4"draggable="true" @dragstart="dragstart1($event)">这是一段可移动的段落。请把该段落拖入矩形里。</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mX: undefined,
            mY: undefined,
            a:9
        }
    },
    created(){
        if(this.a==true&&this.a>10){
            console.log('a')
        }else{
            console.log('d')
        }
    },
    methods: {
        // 获得拖动轨迹
        drag(event) {
            //调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）
            event.preventDefault();
            // event.currentTarget.style.top = event.offsetY - event.target.offsetHeight/ 2 -2+ 'px'
            // event.currentTarget.style.left = event.clientX - event.target.offsetWidth / 2-9 + 'px'
        },
        // 开始拖拽
        dragStart(event) {
            // event.target.offsetLeft 表示如果是定位元素，则是距离父元素左边的距离，如果不是定位元素，则是距离body的左边的距离
            // event.clientX 表示鼠标距离浏览器可视区域的左上角0,0坐标的位置
            // 获得鼠标在元素上的位置
            this.mX = event.clientX - event.target.offsetLeft
            this.mY = event.clientY - event.target.offsetTop

        },
        // 拖拽结束
        dragEnd(event) {
            event.currentTarget.style.left = event.clientX - this.mX + 'px'; //得到距离左边距离                    　　
            event.currentTarget.style.top = event.clientY - this.mY + 'px'; //得到距离上边距离
        },
        allDrop(e){
            e.preventDefault();
        },
        dragstart1(e){
            e.dataTransfer.setData('Text',e.target.className)
        },
        drop(e){
            var data=e.dataTransfer.getData('Text')
            e.target.appendChild(document.getElementsByClassName(data)[0])
        },
        dragleave(e){
            e.target.after(e.target)
        }
    },
    mounted() {
        // 连续拖动的球
        let box = document.getElementsByClassName('drag2')[0]
        let x, y //鼠标在元素上的位置
        let isDrop = false
        box.onmousedown = function(e) {
            var e = e || window.event;
            isDrop = true
            x = e.clientX - box.offsetLeft
            y = e.clientY - box.offsetTop
        }
        document.onmousemove = function(e) {
            var e = e || window.event;
            if (isDrop == true) {
                let moveY = e.clientY - y
                let moveX = e.clientX - x
                var maxX = document.documentElement.clientWidth - box.offsetWidth;
                var maxY = document.documentElement.clientHeight - box.offsetHeight;
                moveX = Math.min(maxX, Math.max(0, moveX));
                moveY = Math.min(maxY, Math.max(0, moveY));
                box.style.top = moveY + 'px'
                box.style.left = moveX + 'px'
            } else {
                return
            }
        }
        document.onmouseup = function() {
            isDrop = false; //设置为false不可移动
        }
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


