<template>
    <div>
        <appHeader></appHeader>
        <router-view></router-view>    
    </div>
</template>

<script>
    import appHeader from '@/components/shop/subcom/Header.vue'
    export default {
        components: {
            appHeader
        }
    }
</script>

<style scoped lang="less">
</style>