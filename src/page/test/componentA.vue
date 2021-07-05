<template>
	<div class="hello">
        <h1>{{msg}}</h1>
        <h1>{{msgformFarther}}</h1>
        <button v-on:click="onClikMe">open mouse!</button>
    </div>
</template>
<script type="text/javascript">
export default {
	data(){
        return {
            msg:'hello from component a !'
        }
    },
    props:['msgformFarther'],//表示子组件同意接受来自父组件的信息
    methods:{
        onClikMe(){
            this.$emit('children-tell-me-somthing',this.msg)
        }
    }
}
</script>