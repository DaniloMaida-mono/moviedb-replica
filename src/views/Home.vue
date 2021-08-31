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
            path="/tv/on_the_air"
        />
        <TrailerReel label="Ultimi Trailers" v-bind:anchors="reels.trailers" />
        <MovieReel
            label="In Tendenza"
            v-bind:anchors="reels.trending"
            path="/trending/all/day"
            :isTrending="true"
        />
        <RegisterSection />
    </main>
</template>

<script>
import Header from '../components/Header.vue'
import SearchBox from '../components/SearchBox.vue'
import MovieReel from '../components/MovieReel.vue'
import TrailerReel from '../components/TrailerReel.vue'
import RegisterSection from '../components/RegisterSection.vue'
export default {
    name: 'Home',
    components: { Header, SearchBox, MovieReel, TrailerReel, RegisterSection },
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
                        group: '/tv/on_the_air',
                    },
                    {
                        label: 'Serie TV',
                        group: '/tv/popular',
                    },
                ],
                trailers: [
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
                trending: [
                    {
                        label: 'Oggi',
                        group: '/trending/all/day',
                    },
                    {
                        label: 'Questa Settimana',
                        group: '/trending/all/week',
                    },
                ],
            },
        }
    },
}
</script>

<style>
.content-wrapper {
    padding: 30px 40px;
    max-width: 1400px;
    width: 100%;
}
</style>
