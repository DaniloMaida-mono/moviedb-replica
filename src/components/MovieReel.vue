<template>
    <section
        class="
            movie-reel
            should-fade
            w-full
            flex flex-col
            pt-10
            md:pt-8
            relative
        "
        :class="isTrending && 'trending'"
    >
        <div
            class="
                movie-reel__header
                relative
                flex
                justify-start
                items-center
                px-10
            "
        >
            <h2 class="mr-5" v-text="label"></h2>
            <div v-if="!isMobile" class="selector flex content-center">
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
            <div v-else class="anchor-sm-wrapper relative">
                <div class="selector content-center">
                    <ReelAnchor
                        :isMobile="isMobile"
                        :isMenuExpanded="isMenuExpanded"
                        v-for="(anchor, index) in anchors"
                        :index="index"
                        v-on:filterResults="handleAnchorClick"
                        v-on:expandMenu="handleExpandMenu"
                        :key="index"
                        v-bind:label="anchor.label"
                        v-bind:group="anchor.group"
                        v-bind:selected="activeIndex === index ? true : false"
                    />
                </div>
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
import ExpandIcon from './icons/ExpandIcon.vue'

import { axiosGet } from '../../axiosGet'
export default {
    name: 'MovieReel',
    components: {
        ReelAnchor,
        ReelCard: defineAsyncComponent({
            loader: () => import('./ReelCard.vue'),
        }),
        FakeCard,
        ExpandIcon,
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
            isMenuExpanded: false,
        }
    },
    methods: {
        handleAnchorClick: function (e, index) {
            e.preventDefault()
            this.isLoading = true
            this.isMenuExpanded = false
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
        handleExpandMenu(e) {
            this.isMenuExpanded = !this.isMenuExpanded
        },
    },
    created() {
        this.fetchData()
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile
        },
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
    .anchor-sm-wrapper {
        height: 30px;
        display: block;
        position: relative;
        z-index: 5;
    }

    .menu-hidden {
        background: $greenGradient;
    }
    .selector {
        border-radius: 15px;
        background: $greenGradient;
    }
}
</style>