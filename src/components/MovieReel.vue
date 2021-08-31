<template>
    <section
        class="movie-reel w-full flex flex-col pt-8 relative"
        :class="isTrending && 'trending'"
    >
        <div class="movie-reel__header flex justify-start items-center px-10">
            <h2 class="mr-5" v-text="label"></h2>
            <div class="selector flex content-center">
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
        <transition name="fade">
            <div
                class="
                    movie-reel__list
                    w-full
                    flex
                    overflow-x-scroll overflow-y-hidden
                    py-5
                "
                v-if="results && showReel"
            >
                <ReelCard
                    v-for="result in results"
                    :key="result?.id"
                    :item="result"
                />
            </div>
        </transition>
    </section>
</template>

<script>
import ReelAnchor from './ReelAnchor.vue'
import ReelCard from './ReelCard.vue'

import { axiosGet } from '../../axiosGet'
export default {
    name: 'MovieReel',
    components: { ReelAnchor, ReelCard },
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
            showReel: true,
        }
    },
    methods: {
        handleAnchorClick: function (e, index) {
            e.preventDefault()
            this.activeIndex = index
            this.showReel = false
            const path = e.currentTarget.dataset.group
            axiosGet(import.meta.env.VITE_API_URL + path, {
                api_key: import.meta.env.VITE_API_KEY,
                language: 'it-IT',
            }).then((data) => {
                if (data.results) {
                    this.showReel = true
                    this.results = data.results
                    return
                }
                this.results = [data]
            })
        },
    },

    mounted() {
        axiosGet(import.meta.env.VITE_API_URL + this.path, {
            api_key: import.meta.env.VITE_API_KEY,
            language: 'it-IT',
        }).then((data) => {
            if (data.results) {
                this.results = data.results
                return
            }
            this.results = [data]
        })
    },
}
</script>

<style lang="scss">
.selector {
    border: 1px solid rgba(3, 37, 65, 1);
    border-radius: 30px;
}

.movie-reel {
    &:after {
        content: '';
        width: 60px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            #fff 100%
        );
        will-change: opacity;
        pointer-events: none;
    }
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
</style>