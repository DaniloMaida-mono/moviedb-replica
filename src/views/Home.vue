<template>
    <Header />
    <main>
        <SearchBox />
        <MovieReel
            label="Cosa è popolare"
            v-bind:anchors="reels.popular"
            path="/movie/popular"
        />
        <MovieReel
            label="Visione Gratuita"
            v-bind:anchors="reels.freeVision"
            path="/movie/popular"
        />
    </main>
</template>

<script>
import Header from '../components/Header.vue'
import SearchBox from '../components/SearchBox.vue'
import MovieReel from '../components/MovieReel.vue'
export default {
    name: 'Home',
    components: { Header, SearchBox, MovieReel },
    data() {
        return {
            reels: {
                popular: [
                    {
                        label: 'Streaming',
                        group: '/movie/popular',
                    },
                    {
                        label: 'In TV',
                        group: '/tv/popular',
                    },
                    {
                        label: 'A noleggio',
                        group: '/tv/on_the_air',
                    },
                    {
                        label: 'Al Cinema',
                        group: '/movie/now_playing',
                    },
                ],
                freeVision: [
                    {
                        label: 'Films',
                        group: '/movie/popular',
                    },
                    {
                        label: 'Serie TV',
                        group: '/tv/popular',
                    },
                ],
            },
        }
    },
}
</script>

<style>
main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    background-color: #fff;
    margin-top: 64px;
}
</style>
