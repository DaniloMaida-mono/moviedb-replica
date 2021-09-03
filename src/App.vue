<template>
    <div class="page-wrap">
        <router-view />
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit('checkMobile')
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.$store.commit('checkMobile')
        })
    },
}
</script>
<style lang="scss">
.page-wrap {
    min-height: 100%;
    height: auto;
    position: relative;
    top: 0;
    left: 0;
}
</style>
