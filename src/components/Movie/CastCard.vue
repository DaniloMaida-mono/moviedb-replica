<template>
    <li class="cast-card">
        <a href="#" class="profile-pic block">
            <img :src="profilePic" :alt="item?.name" class="w-full h-full" />
        </a>
        <p class="person">
            <a href="#" v-text="item?.name" class="font-bold"></a>
        </p>
        <p class="character" v-text="item?.character"></p>
    </li>
</template>

<script>
export default {
    name: 'CastCard',
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    computed: {
        profilePic: function () {
            if (this.item?.profile_path) {
                return (
                    'https://www.themoviedb.org/t/p/w138_and_h175_face/' +
                    this.item?.profile_path
                )
            }
        },
    },
}
</script>

<style lang="scss">
.cast-card {
    min-width: 140px;
    width: 140px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 4px;
    border: 1px solid rgba(227, 227, 227, 1);
    padding-bottom: 10px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

    .profile-pic {
        width: 138px;
        height: 175px;
    }

    p.person {
        padding: 10px 10px 0 10px;
        font-size: 1em;

        a:hover {
            color: rgba(0, 0, 0, 0.5);
        }
    }
    p.character {
        font-size: 0.9em;
        padding: 0 10px;
    }
}
</style>