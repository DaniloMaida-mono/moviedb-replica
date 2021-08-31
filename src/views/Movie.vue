<template>
    <Header />
    <main>
        <div class="movie-container w-full h-full">
            <Presentation :item="item" />
            <div class="w-full flex justify-center">
                <div class="content-wrapper flex">
                    <div class="main-column flex flex-wrap">
                        <CastReel />
                        <MediaReel />
                    </div>
                    <div class="side-column flex flex-wrap"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Header from '../components/Header.vue'
import Presentation from '../components/Movie/Presentation.vue'
import CastReel from '../components/Movie/CastReel.vue'
import MediaReel from '../components/Movie/MediaReel.vue'
import { axiosGet } from '../../axiosGet'
export default {
    name: 'Movie',
    components: { Header, Presentation, CastReel, MediaReel },
    data() {
        return {
            item: {},
            path: `/movie/${this.$route.params.id}`,
        }
    },

    mounted() {
        axiosGet(import.meta.env.VITE_API_URL + this.path, {
            api_key: import.meta.env.VITE_API_KEY,
            language: 'it-IT',
        }).then((data) => {
            if (data) {
                this.item = data
            }
        })
    },
}
</script>

<style lang="scss">
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
    &:first-of-type {
        border-top: none;
    }
}
</style>


