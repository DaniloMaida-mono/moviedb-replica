<template>
    <Header />
    <main>
        <div v-if="!hasError" class="movie-container w-full h-full">
            <div class="presentation-container w-full">
                <div
                    v-if="isLoading"
                    class="presentation-fallback h-full w-full relative"
                >
                    <Loader />
                </div>
                <Presentation :item="item" v-else />
            </div>

            <div class="w-full flex justify-center">
                <div class="content-wrapper flex">
                    <div class="main-column flex flex-wrap">
                        <CastReel />
                        <MediaReel />
                        <CollectionSection
                            v-if="item.belongs_to_collection"
                            :item="item.belongs_to_collection"
                        />
                        <RecommendationReel />
                    </div>
                    <div class="side-column md:flex flex-wrap hidden">
                        <div class="side-container w-full">
                            <SocialList />
                            <MovieDetails :item="item" />
                            <KeywordsList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="w-full">
            <Page404 />
        </div>
    </main>
    <Footer />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Loader from '../components/utilities/Loader.vue'
import CastReel from '../components/Movie/CastReel.vue'
import MediaReel from '../components/Movie/MediaReel.vue'
import CollectionSection from '../components/Movie/CollectionSection.vue'
import RecommendationReel from '../components/Movie/RecommendationReel.vue'
import SocialList from '../components/Movie/SocialList.vue'
import MovieDetails from '../components/Movie/MovieDetails.vue'
import KeywordsList from '../components/Movie/KeywordsList.vue'
import Page404 from '../components/errors/404.vue'
import { axiosGet } from '../../axiosGet'
export default {
    name: 'Movie',
    components: {
        Header,
        Presentation: defineAsyncComponent(() =>
            import('../components/Movie/Presentation.vue')
        ),
        Loader,
        CastReel,
        MediaReel,
        CollectionSection,
        RecommendationReel,
        SocialList,
        MovieDetails,
        Footer,
        KeywordsList,
        Page404,
    },
    data() {
        return {
            item: {},
            path: `/movie/${this.$route.params.id}`,
            isLoading: true,
            hasError: false,
        }
    },
    methods: {
        async fetchData() {
            try {
                console.log('REQUESTING', this.path)
                const result = await axiosGet(
                    import.meta.env.VITE_API_URL + this.path,
                    {
                        api_key: import.meta.env.VITE_API_KEY,
                        language: 'it-IT',
                    }
                )
                this.item = result
                setTimeout(() => {
                    this.isLoading = false
                }, 700)
            } catch (error) {
                this.hasError = true
                console.log(error)
            }
        },
    },
    created() {
        this.fetchData()
    },
    watch: {
        $route(to, from) {
            this.path = `/movie/${this.$route.params.id}`
            this.fetchData()
        },
    },
}
</script>

<style lang="scss">
$greenGradient: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
.presentation-container {
    min-height: 550px;
}
.main-column {
    width: calc(1400px - 80px - 268px);
    padding-right: 30px;
    flex: 0 1 auto;

    h3 {
        font-size: 1.4em;
    }
}

.side-column {
    min-width: 260px;
    width: 260px;
}

.panel {
    border-top: 1px solid #d7d7d7;
    padding: 30px 0;
    &:first-of-type {
        border-top: none;
    }
}

.presentation-fallback {
    min-height: 550px;
    background-image: linear-gradient(
        to right,
        #191e20 150px,
        rgba(25, 30, 32, 0.84) 100%
    );
}

.side-container {
    padding-top: 30px;
}
@media screen and (max-width: 768px) {
    .main-column {
        width: 100vw;
        padding: 0 20px;

        h3 {
            font-size: 1em;
        }
    }
}
</style>


