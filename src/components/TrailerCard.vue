<template>
    <div class="trailer-card flex flex-wrap">
        <div
            class="trailer-image w-full h-full relative"
            v-bind:style="{ backgroundImage: 'url(' + bg + ')' }"
        >
            <div class="play absolute">
                <img src="../assets/play.svg" alt="" />
            </div>
        </div>
        <div class="trailer-content text-white text-center">
            <h2 v-text="title"></h2>
            <h3 v-text="desc"></h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrailerCard',
    props: {
        bg: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.trailer-card {
    min-width: 300px;
    width: 300px;
    height: calc(300px / 1.78);
    margin-left: 20px;
    &:first-child {
        margin-left: 40px;
    }
    &:hover .trailer-image {
        transform: scale(1.1);
    }
    &:hover .trailer-image .play {
        width: 4em;
        height: 4em;
    }
}

.trailer-image {
    background-position: center;
    background-size: cover;
    transition: all 0.2s ease-in-out;
    transform: scale(1);
    overflow: hidden;
    border-radius: 8px;

    .play {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3em;
        height: 3em;
        transition: all 0.2s ease-in-out;
        filter: invert(1);
        cursor: pointer;
    }
}

.trailer-content {
    margin-top: 15px;
    h2 {
        font-size: 1.2em;
    }
    h3 {
        font-size: 1em;
        font-weight: 400;
    }
}
</style>