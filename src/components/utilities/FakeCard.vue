<template>
    <div class="fake-card">
        <div class="fake-card__image"></div>
        <div class="fake-card__content">
            <h2></h2>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FakeCard',
}
</script>

<style lang="scss" scoped>
.fake-card {
    margin: 10px;
    width: 150px;
    min-width: 150px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

    .fake-card__content {
        padding: 20px 30px;
    }

    .fake-card__image,
    h2,
    p {
        background: #eee;
        background: linear-gradient(
            110deg,
            #ececec 8%,
            #f5f5f5 18%,
            #ececec 33%
        );
        border-radius: 5px;
        background-size: 200% 100%;
        animation: 1.5s shine linear infinite;
    }

    .fake-card__image {
        width: 100%;
        min-height: calc(150px * 1.5);
        height: calc(150px * 1.5);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    h2 {
        height: 20px;
        margin-bottom: 10px;
    }

    p {
        height: 20px;
    }
}

@keyframes shine {
    to {
        background-position-x: -200%;
    }
}
</style>