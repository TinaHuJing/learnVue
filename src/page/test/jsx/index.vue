<template>
    <div>
        <item :id="id"></item>
    </div>
</template>
<script>
import item from "./item.vue"
export default {
    name: 'list',
    components: {
        item
    },
    data() {
        return {
            id: 1
        }
    },
    methods: {
        next() {
            ++this.id
        }
    }
}
</script>

