<template>
    <section class="panel media-reel py-8 max-w-full">
        <div class="menu flex items-center mb-3">
            <h3 class="mr-12">Media</h3>
            <ul class="flex items-center w-full">
                <li
                    v-for="(anchor, index) in anchors"
                    :key="index"
                    :class="{ active: activeIndex === index }"
                >
                    <a
                        href="#"
                        @click="handleMenuClick($event, index, anchor.tag)"
                        v-text="anchor.label"
                        class="font-semibold"
                    ></a>
                </li>
            </ul>
        </div>
        <div class="media-content__container">
            <div
                class="
                    media-content
                    w-full
                    flex
                    overflow-y-hidden overflow-x-scroll
                    should-fade
                    relative
                "
                v-html="items"
            ></div>
        </div>
    </section>
</template>

<script>
import { axiosGet } from '/axiosGet'
export default {
    name: 'MediaReel',
    data() {
        return {
            query: 'videos',
            activeIndex: 0,
            items: '',
            anchors: [
                {
                    label: 'Most Popular',
                    tag: 'videos',
                },
                {
                    label: 'Videos',
                    tag: 'videos',
                },
                {
                    label: 'Backdrops',
                    tag: 'backdrops',
                },
                {
                    label: 'Posters',
                    tag: 'posters',
                },
            ],
        }
    },
    created() {
        this.fetchData(this.query)
    },
    watch: {
        $route(to, from) {
            this.fetchData(this.query)
        },
    },
    methods: {
        fetchData(query) {
            axiosGet(
                'https://www.themoviedb.org' +
                    `/movie/${this.$route.params.id}/remote/media_panel/${query}?translate=false`,
                {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: 'it-IT',
                }
            )
                .then((data) => {
                    if (data) {
                        this.items = data
                    }
                })
                .finally(() => {
                    if (
                        this.query === 'posters' ||
                        this.query === 'backdrops'
                    ) {
                        this.convertImagesSrc(this.query)
                    }
                })
        },
        handleMenuClick: function (e, index, tag) {
            e.preventDefault()
            this.activeIndex = index
            this.query = tag
            this.fetchData(tag)
        },
        convertImagesSrc: function (tag) {
            const collection = document.querySelectorAll(
                `div.${tag.slice(0, -1)}`
            )

            for (const [index, div] of collection.entries()) {
                if (index === collection.length - 1) {
                    break
                }
                const img = div.querySelector('img')
                div.innerHTML = ''
                const currentSrc = img.src
                const newImg = new Image()
                newImg.onload = () => {
                    div.appendChild(newImg)
                }
                newImg.src = currentSrc.replace(
                    window.location.host,
                    'www.themoviedb.org'
                )
            }
        },
    },
}
</script>

<style lang="scss">
.menu {
    ul {
        li {
            display: inline-block;
            margin-right: 24px;
            font-size: 1.1em;
            padding-bottom: 5px;
        }
        li.active {
            border-bottom: 4px solid black;
        }
    }
}

.media-content {
    height: 300px;
    border-radius: 8px;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 10px;
}

.video.card,
.backdrop,
.view_more {
    min-width: 533px;
    height: 300px;
    margin: 0;

    .wrapper {
        width: 533px;
        height: 300px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.play_background {
        width: 67px;
        height: 67px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.7);
        span {
            filter: invert(1);
            width: 50%;
            height: 50%;
            left: 1px;
            transition: opacity 200ms linear;
            background-image: url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg');
            &:hover {
                opacity: 0.8;
            }
        }
    }
}

.backdrop img {
    min-width: 533px;
    height: 300px;
}
.poster,
.poster.view_more {
    min-width: 200px;
    height: 300px;
}

.view_more {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
}
</style>