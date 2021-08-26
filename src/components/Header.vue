<template>
    <header>
        <Nav />
    </header>
</template>

<script>
import Nav from './Nav.vue'
export default {
    name: 'Header',
    components: { Nav },
}
</script>

<style lang="scss" scoped>
header {
    background-color: $blue;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 64px;
    width: 100%;
    z-index: 10;
    transition: top 0.2s linear;
    padding: 0 10%;
}
</style>