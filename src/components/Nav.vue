<template>
    <div class="navbar w-full flex justify-between text-white">
        <div v-if="isMobile">
            <button class="burger-menu h-full" @click="toggleMenu">
                <BurgerIcon />
            </button>
            <div
                class="menu-sm-wrapper absolute"
                :class="isMenuHidden ? '' : 'active'"
            >
                <ul class="nav-list flex flex-col list-none list-inside">
                    <li class="nav-list-link">Film</li>
                    <li class="nav-list-link">Serie TV</li>
                    <li class="nav-list-link">Persone</li>
                    <li class="nav-list-link">More</li>
                </ul>
            </div>
        </div>
        <div class="nav-item nav-mainlinks">
            <router-link :to="{ name: 'home' }">
                <img class="logo md:mr-4" src="../assets/logo.svg" alt="" />
            </router-link>
            <ul v-if="!isMobile" class="nav-list flex list-none list-inside">
                <li class="nav-list-link">Film</li>
                <li class="nav-list-link">Serie TV</li>
                <li class="nav-list-link">Persone</li>
                <li class="nav-list-link">More</li>
            </ul>
        </div>
        <div class="nav-item nav-utils">
            <ul class="nav-list flex list-none list-inside">
                <li v-if="!isMobile" class="nav-list-link">
                    <PlusIcon />
                </li>
                <li v-if="!isMobile" class="nav-list-link">
                    <span class="translate-box">it</span>
                </li>
                <li v-if="!isMobile" class="nav-list-link">Accedi</li>
                <li v-if="!isMobile" class="nav-list-link">
                    Registrati a TMDb
                </li>
                <li class="nav-list-link">
                    <SearchIcon />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import PlusIcon from './icons/PlusIcon.vue'
import SearchIcon from './icons/SearchIcon.vue'
import BurgerIcon from './icons/BurgerIcon.vue'
export default {
    name: 'Nav',
    components: { PlusIcon, SearchIcon, BurgerIcon },
    data() {
        return {
            isMenuHidden: true,
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile
        },
    },
    methods: {
        toggleMenu: function () {
            this.isMenuHidden = !this.isMenuHidden
        },
    },
}
</script>

<style lang="scss">
img.logo {
    width: 154px;
    height: 20px;
}
.nav-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.nav-list-link {
    padding: 0.5rem 0.5rem;
    outline: 0;
    white-space: nowrap;
    cursor: pointer;
    font-weight: 600;
    margin-right: 14px;
}

.translate-box {
    width: 28px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: 1px solid #fff;
    border-radius: 3px;
    padding: 3px 5px;
    transition: linear 0.1s;
    font-weight: 600;
    font-size: 0.9em;
    text-transform: uppercase;
}

@media screen and (max-width: 768px) {
    .menu-sm-wrapper {
        top: 64px;
        width: 90%;
        left: -90%;
        height: 100vh;
        background: rgba($blue, 0.9);
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        z-index: 9999;
        transition: ease 0.3s;
        padding: 20px;
    }

    .menu-sm-wrapper.active {
        left: 0;
    }
}
</style>
