<template>
    <div
        v-if="item && Object.keys(item).length !== 0"
        class="movie-details w-full text-white"
        v-bind:style="{ backgroundImage: 'url(' + posterBg + ')' }"
    >
        <div class="blend h-full w-full flex justify-center">
            <div class="content-wrapper h-full w-full flex items-center">
                <div class="movie-poster">
                    <div class="movie-image w-full">
                        <img :src="movieImage" alt="" />
                    </div>
                    <div class="movie-streaming flex justify-center py-4">
                        <div
                            class="
                                provider
                                flex
                                items-center
                                justify-center
                                pr-2
                            "
                        >
                            <img
                                class="rounded"
                                :src="providerLogo"
                                :alt="item?.title"
                            />
                        </div>
                        <div class="text flex flex-wrap items-center">
                            <span>
                                <h4>Now Streaming</h4>
                                <h3>Watch Now</h3>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="movie-content">
                    <div class="flex flex-wrap content-center">
                        <div class="title flex flex-wrap mb-6">
                            <h2 class="w-full">
                                {{ item?.title }}
                                <span class="opacity-80"
                                    >({{
                                        item?.release_date.split('-')[0]
                                    }})</span
                                >
                            </h2>
                            <div class="facts flex">
                                <span
                                    class="release"
                                    v-text="
                                        item?.release_date.replace(/-/g, '/') +
                                        ' (' +
                                        item.production_countries[0][
                                            'iso_3166_1'
                                        ] +
                                        ')'
                                    "
                                ></span>
                                <span class="genres">
                                    <a
                                        href="#"
                                        v-for="genre in item.genres"
                                        :key="genre.id"
                                        v-text="genre.name + ','"
                                    ></a>
                                </span>
                                <span
                                    class="runtime"
                                    v-text="parseRunTime"
                                ></span>
                            </div>
                        </div>
                        <div class="reel mb-5 w-full">
                            <ActionReel :vote="item?.vote_average" />
                        </div>
                        <h3
                            v-if="item.tagline"
                            v-text="item.tagline"
                            class="tagline opacity-70 font-normal w-full"
                        ></h3>
                        <h3 class="overview-title my-3 w-full">Overview</h3>
                        <div class="overview-content">
                            <p v-text="item?.overview"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { axiosGet } from '/axiosGet'
import ActionReel from './ActionReel.vue'
export default {
    name: 'Presentation',
    components: { ActionReel },
    data() {
        return {
            providerPath: `/movie/${this.$route.params.id}/watch/providers`,
            providerItem: null,
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    computed: {
        posterBg: function () {
            return (
                'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/' +
                this.item?.backdrop_path
            )
        },
        movieImage: function () {
            return (
                'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' +
                this.item?.poster_path
            )
        },
        providerLogo: function () {
            return (
                'https://www.themoviedb.org/t/p/original/' +
                this.providerItem?.logo_path
            )
        },
        parseRunTime: function () {
            const total = this.item?.runtime
            const hours = total / 60
            const rhours = Math.floor(hours)
            const minutes = (hours - rhours) * 60
            const rminutes = Math.round(minutes)
            return rhours + 'h ' + rminutes + 'm'
        },
    },
    mounted() {
        axiosGet(import.meta.env.VITE_API_URL + this.providerPath, {
            api_key: import.meta.env.VITE_API_KEY,
            language: 'it-IT',
        }).then((data) => {
            if (data.results) {
                const result = data.results[Object.keys(data.results)[0]]
                this.providerItem = result['flatrate']
                    ? result['flatrate'][0]
                    : result['flatrate_and_buy'][0]
            }
        })
    },
}
</script>

<style lang="scss" scoped>
.blend {
    background-image: linear-gradient(
        to right,
        rgba(9.8%, 11.76%, 12.55%, 1) 150px,
        rgba(9.8%, 11.76%, 12.55%, 0.84) 100%
    );
}
.content-wrapper {
    padding: 30px 40px;
    max-width: 1400px;
}

.movie-poster {
    border-width: 0px;
    min-width: 300px;
    width: 300px;
    overflow: hidden;
    border-radius: 8px;

    .movie-image {
        height: 450px;
    }
}
.movie-streaming {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: $blue;

    .provider {
        max-width: 45px;
    }

    .text {
        h4 {
            line-height: 1em;
            opacity: 0.8;
            font-weight: 400;
        }

        h3 {
            font-size: 1em;
            line-height: 1em;
            font-weight: 700;
            cursor: pointer;
        }
    }
}

.movie-content {
    padding-left: 40px;
    .title {
        h2 {
            font-size: 2.2rem;
        }

        .facts {
            span {
                padding-left: 20px;
                position: relative;
                top: 0;
                left: 0;
                &::before {
                    font-size: 1.1em;
                    line-height: 1;
                    content: '\2022';
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 7px;
                    display: inline-flex;
                    align-content: center;
                    align-items: center;
                }
            }
        }
    }

    h3.tagline {
        font-style: italic;
        font-size: 1.1em;
    }
    h3.overview-title {
        font-weight: 600;
        font-size: 1.3em;
    }

    .overview-content {
        p {
            line-height: 1.4em;
        }
    }
}
</style>