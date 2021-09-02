<template>
    <div class="social w-full">
        <ul class="social__list flex" v-if="filteredData">
            <li v-for="(value, name, index) in filteredData" :key="index">
                <a :href="getHref(name, value)" target="__blank"
                    ><component v-bind:is="getIcon(name)"></component
                ></a>
            </li>
        </ul>
    </div>
</template>

<script>
import { axiosGet } from '/axiosGet'
import FacebookIcon from '../icons/FacebookIcon.vue'
import InstagramIcon from '../icons/InstagramIcon.vue'
import TwitterIcon from '../icons/TwitterIcon.vue'

export default {
    name: 'SocialList',
    components: { FacebookIcon, InstagramIcon, TwitterIcon },
    data() {
        return {
            path: `/movie/${this.$route.params.id}/external_ids`,
            item: null,
        }
    },
    created() {
        this.fetchData(this.query)
    },
    methods: {
        fetchData() {
            axiosGet(import.meta.env.VITE_API_URL + this.path, {
                api_key: import.meta.env.VITE_API_KEY,
                language: 'it-IT',
            }).then((data) => {
                if (data) {
                    this.item = data
                }
            })
        },
        getHref: function (name, value) {
            switch (name) {
                case 'facebook_id':
                    return `https://www.facebook.com/${value}`
                case 'instagram_id':
                    return `https://www.instagram.com/${value}`
                case 'twitter_id':
                    return `https://www.twitter.com/${value}`
                default:
                    break
            }
        },

        getIcon: function (name) {
            switch (name) {
                case 'facebook_id':
                    return FacebookIcon
                case 'instagram_id':
                    return InstagramIcon
                case 'twitter_id':
                    return TwitterIcon
                default:
                    break
            }
        },
    },
    computed: {
        filteredData: function () {
            const cData = this.item
            delete cData?.id
            delete cData?.imdb_id
            return cData
        },
    },
}
</script>

<style lang="scss">
.social {
    margin-bottom: 30px;
    .social__list {
        li {
            height: 30px;
            margin-left: 10px;
            &:first-child {
                margin-left: 0;
            }

            svg {
                width: 30px;
                height: 30px;
            }
        }
    }
}
</style>