<template>
    <Header />
    <main>
        <div class="movie-container w-full h-full">
            <Presentation :item="item" />
        </div>
    </main>
</template>

<script>
import Header from '../components/Header.vue'
import Presentation from '../components/Movie/Presentation.vue'
import { axiosGet } from '../../axiosGet'
export default {
    name: 'Movie',
    components: { Header, Presentation },
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


