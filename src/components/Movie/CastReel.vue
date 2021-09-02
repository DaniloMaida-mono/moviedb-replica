<template>
    <section class="panel cast-reel pb-8 max-w-full">
        <div class="title mb-5">
            <h3>Top Billed Cast</h3>
        </div>
        <div class="cast-content should-fade relative">
            <div
                class="overflow-y-hidden overflow-x-scroll flex"
                v-if="isLoading"
            >
                <FakeCard v-for="(n, index) in 7" :key="index" />
            </div>
            <ul
                v-else-if="cast && !isLoading"
                class="overflow-y-hidden overflow-x-scroll flex"
            >
                <CastCard
                    v-for="item in cast.slice(0, 9)"
                    :key="item?.id"
                    :item="item"
                />
                <li
                    class="cast-card view-more flex items-center justify-center"
                >
                    <a href="#" @click.prevent class="flex font-bold">
                        <p>View More</p>
                        <img src="/src/assets/arrow-icon.svg" alt="view more" />
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { axiosGet } from '/axiosGet'
import FakeCard from '../utilities/FakeCard.vue'
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    name: 'CastReel',
    components: {
        CastCard: defineAsyncComponent(() => import('./CastCard.vue')),
        FakeCard,
    },
    data() {
        return {
            path: `/movie/${this.$route.params.id}/credits`,
            cast: null,
            isLoading: true,
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
                if (data && data.cast) {
                    this.cast = data.cast
                    setTimeout(() => {
                        this.isLoading = false
                        clearInterval()
                    }, 700)
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.cast-content {
    ul {
        padding-bottom: 10px;
    }

    li.view-more {
        margin: 0;
        margin-left: 10px;
        font-size: 1em;
        border: none;
        box-shadow: none;
        img {
            margin-left: 4px;
            width: 1.1em;
        }
    }
}
</style>