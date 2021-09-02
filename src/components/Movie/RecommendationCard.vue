<template>
    <div class="recommendation-card">
        <div class="image">
            <router-link :to="{ name: 'movie', params: { id: item.id } }">
                <img :src="imgSrc" :alt="item.title" />
            </router-link>
        </div>
        <div class="detail flex justify-between items-center">
            <p v-text="item.title"></p>
            <span v-text="rating + '%'"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendationCard',
    props: {
        item: {
            type: Object,
            required: true,
        },
    },

    computed: {
        rating: function () {
            return Math.round(this.item.vote_average * 10)
        },

        imgSrc: function () {
            return (
                'https://www.themoviedb.org/t/p/w250_and_h141_face/' +
                this.item.poster_path
            )
        },
    },
}
</script>

<style lang="scss">
.recommendation-card {
    width: 250px;
    margin: 0 15px 0 0;

    .image {
        width: 250px;
        height: 141px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }
    }

    .detail {
        margin-top: 4px;
        font-size: 1em;

        p {
            padding-right: 20px;
        }
    }
}
</style>