<template>
    <section
        class="movie-reel trailer-reel w-full flex flex-col relative"
        v-bind:style="{ backgroundImage: 'url(' + sectionBgUrl + ')' }"
    >
        <div class="wrapper blend pt-8">
            <div
                class="movie-reel__header flex justify-start items-center px-10"
            >
                <h2 class="mr-5 text-white" v-text="label"></h2>
                <div v-if="!isMobile" class="selector flex content-center">
                    <ReelAnchor
                        v-for="(anchor, index) in anchors"
                        :index="index"
                        v-on:filterResults="handleAnchorClick"
                        :key="index"
                        v-bind:label="anchor.label"
                        v-bind:group="anchor.group"
                        v-bind:selected="activeIndex === index ? true : false"
                        v-bind:contrast="true"
                    />
                </div>
                <div v-else class="anchor-sm-wrapper relative">
                    <div class="selector content-center">
                        <ReelAnchor
                            :isMobile="isMobile"
                            :isMenuExpanded="isMenuExpanded"
                            v-for="(anchor, index) in anchors"
                            :index="index"
                            v-on:expandMenu="handleExpandMenu"
                            v-on:filterResults="handleAnchorClick"
                            :key="index"
                            v-bind:label="anchor.label"
                            v-bind:group="anchor.group"
                            v-bind:selected="
                                activeIndex === index ? true : false
                            "
                            v-bind:contrast="true"
                        />
                    </div>
                </div>
            </div>
            <transition name="fade">
                <div
                    class="
                        trailer-reel__list
                        h-full
                        w-full
                        flex
                        overflow-x-scroll overflow-y-hidden
                        pt-5
                    "
                >
                    <TrailerCard
                        bg="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/na2xUduK8HviOFT97TiFG2MkJmY.jpg"
                        title="Raised by Wolves – Una nuova umanità"
                        desc="Raised by Wolves – Una nuova umanità | Nuova serie | Trailer"
                        overBg="/src/assets/raised-wolves.jpg"
                        v-on:overCard="handleOverCard"
                    />
                    >
                    <TrailerCard
                        bg="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg"
                        title="La casa di carta"
                        desc="La casa di carta - Terza parte | Trailer ufficiale | Netflix"
                        overBg="/src/assets/casa-papel.jpg"
                        v-on:overCard="handleOverCard"
                    />
                </div>
            </transition>
        </div>
    </section>
</template>

<script>
import ReelAnchor from './ReelAnchor.vue'
import TrailerCard from './TrailerCard.vue'
export default {
    name: 'TrailerReel',
    components: { ReelAnchor, TrailerCard },
    props: {
        label: String,
        anchors: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            activeIndex: 0,
            sectionBgUrl: '/src/assets/raised-wolves.jpg',
            isMenuExpanded: false,
        }
    },
    methods: {
        handleAnchorClick: function (e, index) {
            console.log(index)
            this.activeIndex = index
            this.isMenuExpanded = false
        },

        handleOverCard: function (e, bgUrl) {
            this.sectionBgUrl = bgUrl
        },
        handleExpandMenu(e) {
            this.isMenuExpanded = !this.isMenuExpanded
        },
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile
        },
    },
}
</script>
<style lang="scss">
.trailer-reel {
    transition: all 0.5s;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 400px;
    .selector {
        border: 1px solid rgba(30, 213, 169, 1);
    }
    &::after {
        content: none;
    }

    .wrapper {
        height: 100%;
    }
}
</style>