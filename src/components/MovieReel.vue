<template>
    <section
        class="movie-reel should-fade w-full flex flex-col pt-8 relative"
        :class="isTrending && 'trending'"
    >
        <div class="movie-reel__header flex justify-start items-center px-10">
            <h2 class="mr-5" v-text="label"></h2>
            <div class="selector md:flex content-center">
                <ReelAnchor
                    v-for="(anchor, index) in anchors"
                    :index="index"
                    v-on:filterResults="handleAnchorClick"
                    :key="index"
                    v-bind:label="anchor.label"
                    v-bind:group="anchor.group"
                    v-bind:selected="activeIndex === index ? true : false"
                />
            </div>
        </div>
        <div
            class="
                movie-reel__list
                w-full
                flex
                overflow-x-scroll overflow-y-hidden
                py-5
            "
        >
            <div v-if="isLoading" class="flex">
                <FakeCard v-for="(n, index) in 8" :key="index" />
            </div>
            <ReelCard
                v-else
                v-for="result in results"
                :key="result?.id"
                :item="result"
            />
        </div>
    </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import ReelAnchor from './ReelAnchor.vue'
import FakeCard from '../components/utilities/FakeCard.vue'

import { axiosGet } from '../../axiosGet'
export default {
    name: 'MovieReel',
    components: {
        ReelAnchor,
        ReelCard: defineAsyncComponent({
            loader: () => import('./ReelCard.vue'),
        }),
        FakeCard,
    },
    props: {
        label: String,
        anchors: {
            type: Array,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
        isTrending: Boolean,
    },
    data() {
        return {
            activeIndex: 0,
            results: null,
            isLoading: true,
        }
    },
    methods: {
        handleAnchorClick: function (e, index) {
            e.preventDefault()
            this.isLoading = true
            this.activeIndex = index
            const path = e.currentTarget.dataset.group
            this.fetchData(path)
        },
        fetchData(path = this.path) {
            axiosGet(import.meta.env.VITE_API_URL + path, {
                api_key: import.meta.env.VITE_API_KEY,
                language: 'it-IT',
            }).then((data) => {
                if (data.results) {
                    this.results = data.results
                    setTimeout(() => {
                        this.isLoading = false
                        clearInterval()
                    }, 800)
                }
            })
        },
    },
    created() {
        this.fetchData()
    },
}
</script>

<style lang="scss">
$greenGradient: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
.selector {
    border: 1px solid rgba(3, 37, 65, 1);
    border-radius: 30px;
}

.movie-reel__list {
    min-height: 400px;
}

.movie-reel.trending {
    background-image: url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg');
    background-position: 50% 200px;
    // background-size: var(--maxPrimaryPageWidth);
    background-repeat: no-repeat;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

@media screen and (max-width: 768px) {
    .selector {
        border-top: none;
        border-radius: 18px;
        background: $greenGradient;
    }
}
</style>