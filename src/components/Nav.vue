<template>
    <div class="navbar w-full flex justify-between text-white">
        <div class="nav-item nav-mainlinks">
            <router-link :to="{ name: 'home' }">
                <img class="logo mr-4" src="../assets/logo.svg" alt="" />
            </router-link>
            <ul class="nav-list flex list-none list-inside">
                <li class="nav-list-link">Film</li>
                <li class="nav-list-link">Serie TV</li>
                <li class="nav-list-link">Persone</li>
                <li class="nav-list-link">More</li>
            </ul>
        </div>
        <div class="nav-item nav-utils">
            <ul class="nav-list flex list-none list-inside">
                <li class="nav-list-link">
                    <PlusIcon />
                </li>
                <li class="nav-list-link">
                    <span class="translate-box">it</span>
                </li>
                <li class="nav-list-link">Accedi</li>
                <li class="nav-list-link">Registrati a TMDb</li>
                <li class="nav-list-link">
                    <SearchIcon />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import PlusIcon from './utilities/PlusIcon.vue'
import SearchIcon from './utilities/SearchIcon.vue'
export default {
    name: 'Nav',
    components: { PlusIcon, SearchIcon },
}
</script>

<style>
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
</style>
