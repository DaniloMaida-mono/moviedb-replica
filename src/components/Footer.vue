<template>
    <footer>
        <div class="footer-content h-full flex justify-center items-center">
            <img src="/src/assets/logo.svg" alt="" />
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss">
footer {
    height: 300px;
    background-image: radial-gradient(
        at 30% top,
        #031d33 0%,
        rgba($blue, 1) 70%
    );

    img {
        max-width: 400px;
    }
}

@media screen and (max-width: 768px) {
    footer {
        height: 150px;
        img {
            max-width: 150px;
        }
    }
}
</style>