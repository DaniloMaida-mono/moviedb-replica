<template>
    <div class="card flex flex-wrap">
        <div class="card-image relative">
            <ScoreChart :vote="item.vote_average" :isAbsolute="true" />

            <router-link :to="{ name: 'movie', params: { id: item.id } }">
                <img :src="imageUrl" />
            </router-link>
        </div>
        <div class="card-content flex flex-wrap w-full relative">
            <h2 class="w-full">
                <router-link
                    :to="{ name: 'movie', params: { id: item.id } }"
                    v-text="item?.title || item?.original_name"
                >
                </router-link>
            </h2>
            <p v-text="item.release_date || item?.first_air_date"></p>
        </div>
    </div>
</template>

<script>
import ScoreChart from './utilities/ScoreChart.vue'
export default {
    name: 'ReelCard',
    components: { ScoreChart },
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

@media screen and (max-width: 768px) {
    .card {
        &:first-child {
            margin-left: 20px;
        }
    }
}
</style>