<template>
    <ul class="el-menu" :class="{
            'el-menu--horizontal':mode==='horizeontal',
            'el-menu--dark':theme==='dark'
          }">
        <slot></slot>
    </ul>
</template>
<script>
import emitter from '../../../tools/mixins/emitter.js'//?混入
export default {
    name:'Symenu',
    componentName:'Symenu',
    mixins:[emitter],
    props:{
        mode:{
            type:String,
            default:'vertical'
        },
        theme:{
            type:String,
            default:'light'
        }
    }
}
</script>

