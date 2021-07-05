<template>
    <li class="el-menu-item" :style="paddingStyle" @click="handleClick" :class="{'is-active':active,'is=disabled':disabled}">
        <span v-if="$solts.subIcon" :style="{visibility:active?'visible':'hidden',paddingRight:'8px',fontSize:'14px'}">
            <solt name="subIcon"></solt>
        </span>
        <solt></solt>
        <span>{{title}}</span>
        <span v-if="$solts.icon" class="sy-submenu__icon-arrow">
            <solt name="icon"></solt>
        </span>
    </li>
</template>
<script>
import emitter from '../../../tools/mixins/emitter.js'//?混入
export default {
    name: 'Symenu',
    componentName: 'Symenu',
    mixins: [emitter],
    props: {
        mode: {
            type: String,
            default: 'vertical'
        },
        theme: {
            type: String,
            default: 'light'
        }
    }
}
</script>

