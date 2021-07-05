<template>
    <!-- 子组件模板 -->
    <div class="children">
           <h2>我是子组件的标题</h2>
        <ul class="fontRed">
            <li>除非子组件模板中包含至少一个 slot 插口，否则父组件中的内容将被丢弃。</li>
            <li>当子组件模板中只有一个没有属性的slot时，父组件的整个内容片段将插入到slot所在的DOM位置，并替换掉slot标签本身 </li>
            <li>只有当父组件中没有需要显示在slot中内容时，在子组件中的默认内容才会被显示出来 </li>
        </ul>
        <!--单个slot的子组件 -->
        <slot>
            只有在没分发的内容时才显示
        </slot>
        <!-- 具名slot的子组件 -->
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <header>
            <slot name="footer"></slot>
        </header>
    </div>

</template>