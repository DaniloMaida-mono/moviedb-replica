<template>
    <div class="keywords w-full">
        <h4>Keywords</h4>
        <ul class="keywords__list w-full flex flex-wrap pb-7" v-if="items">
            <Keyword v-for="item in items" :label="item.name" :key="item.id" />
        </ul>
    </div>
</template>

<script>
import Keyword from './Keyword.vue'
import { axiosGet } from '/axiosGet'
export default {
    name: 'KeywordsList',
    components: { Keyword },
    data() {
        return {
            path: `/movie/${this.$route.params.id}/keywords`,
            items: null,
        }
    },
    created() {
        this.fetchData(this.query)
    },
    methods: {
        fetchData() {
            axiosGet(import.meta.env.VITE_API_URL + this.path, {
                api_key: import.meta.env.VITE_API_KEY,
                language: 'it-IT',
            }).then((data) => {
                if (data && data.keywords) {
                    this.items = data.keywords
                }
            })
        },
    },
}
</script>

<style lang="scss">
.keywords {
    border-bottom: 1px solid #d7d7d7;
    margin-bottom: 30px;

    h4 {
        font-size: 1.1em;
        font-weight: 600;
        margin-bottom: 10px;
    }
}
</style>