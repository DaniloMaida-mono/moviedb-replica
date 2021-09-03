<template>
    <section class="panel recommendation max-w-full relative" v-if="items">
        <div class="title mb-5">
            <h3>Recommendations</h3>
        </div>
        <div
            class="
                recommendation-reel
                should-fade
                overflow-x-scroll overflow-y-hidden
            "
        >
            <div
                class="reel-content px-4 md:px-0 flex"
                v-if="items && items.length"
            >
                <RecommendationCard
                    v-for="item in items"
                    :key="item.id"
                    :item="item"
                />
            </div>
        </div>
    </section>
</template>

<script>
import { axiosGet } from '/axiosGet'
import RecommendationCard from './RecommendationCard.vue'
export default {
    name: 'RecommendationReel',
    components: { RecommendationCard },
    data() {
        return {
            path: `/movie/${this.$route.params.id}/recommendations`,
            items: null,
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            axiosGet(import.meta.env.VITE_API_URL + this.path, {
                api_key: import.meta.env.VITE_API_KEY,
                language: 'it-IT',
            }).then((data) => {
                if (data && data.results) {
                    this.items = data.results
                }
            })
        },
    },
}
</script>

<style>
.recommendation-reel {
    padding-bottom: 10px;
}
</style>