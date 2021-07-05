<template>
    <div class="slotDemo">
        <ol>
            <li>单个slot解释
                <!-- 父组件 -->
               <!--  <div class="parent">
                    <h1>我是父组件的标题</h1>
                    <children>
                        <p>这是一些父组件初始内容</p>
                        <p>这是父组件更多的内容</p>
                    </children>
                </div> -->
            </li>
            <li>具名slot
                <div class="parent">
                    <children>
                        <h1 slot="header">这里可能是一个页面的标题</h1>
                        <p>主要内容的一个段落</p>
                        <p>另一个段落</p>
                        <p slot="footer">这里有一些联系信息</p>
                    </children>
                </div>
            </li>
        </ol>
    
    </div>
</template>
<script>
import children from './children.vue'
export default {
    name: 'soltDemo',
    components: {
        children
    }
}
</script>
