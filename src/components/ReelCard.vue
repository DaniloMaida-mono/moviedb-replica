<template>
    <div class="card flex flex-wrap">
        <div class="card-image relative">
            <router-link :to="{ name: 'Home' }">
                <img :src="imageUrl" />
            </router-link>
        </div>
        <div class="card-content flex flex-wrap w-full relative">
            <!-- <div class="rating text-white">
            </div> -->
            <h2 class="w-full">
                <router-link
                    :to="{ name: 'Home' }"
                    v-text="item?.title || item?.original_name"
                >
                </router-link>
            </h2>
            <p v-text="item.release_date || item?.first_air_date"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReelCard',
    props: {
        item: {
            type: Object,
        },
    },
    computed: {
        imageUrl: function () {
            return (
                'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                this.item.poster_path
            )
        },
        rating: function () {
            return this.item.vote_average * 10
        },
    },
}
</script>

<style lang="scss">
.card {
    width: 150px;
    min-width: 150px;
    background: transparent;
    border: none;
    box-shadow: none;
    margin-top: 0;
    overflow: visible;
    margin-left: 20px;
    &:first-child {
        margin-left: 40px;
    }
}

.card-image {
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border-radius: 8px;
    width: 100%;
    min-height: calc(150px * 1.5);
    height: calc(150px * 1.5);
    background: #dbdbdb;
    overflow: hidden;
}
.card-content {
    padding: 26px 10px 12px 10px;

    h2 {
        font-size: 1em;
        font-weight: 700;
        color: #000;
        &:hover {
            color: rgb(1, 180, 228);
        }
    }
    p {
        font-size: 1em;
        color: rgba(0, 0, 0, 0.6);
    }
}

.rating {
    position: absolute;
    bottom: 90px;
    left: 10px;
    width: 38px;
    height: 38px;
    display: inline-block;
    transition: transform 0.2s;
    transform: scale(1);
    background-color: #081c22;
    border-radius: 50%;
}
</style>