<template>
    <section class="searchbox w-full">
        <div class="content-wrapper w-full flex flex-col">
            <div class="title">
                <h1>Benvenuto.</h1>
                <h2>
                    Milioni di film, serie TV e persone da scoprire. Esplora
                    ora.
                </h2>
            </div>
            <div class="search w-full">
                <form action="" class="relative">
                    <label>
                        <input
                            type="text"
                            name=""
                            id=""
                            :placeholder="
                                isMobile
                                    ? 'Cerca...'
                                    : 'Cerca un film, serie tv, personaggio......'
                            "
                        />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SearchBox',
    computed: {
        isMobile() {
            return this.$store.state.isMobile
        },
    },
}
</script>

<style lang="scss" scoped>
.searchbox {
    background-image: linear-gradient(
            to right,
            rgba($blue, 0.8) 0%,
            rgba($blue, 0) 100%
        ),
        url('../assets/rickmorty-bg.jpg');
    min-height: 300px;
    height: calc(100vh / 2.5);
    max-height: 360px;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.title {
    margin-bottom: 20px;
    h1 {
        font-size: 3em;
        font-weight: 700;
        line-height: 1;
    }
    h2 {
        font-size: 2em;
        font-weight: 600;
        margin: 0;
    }
}

.search {
    input[type='text'] {
        width: 100%;
        height: 46px;
        line-height: 46px;
        font-size: 1.1em;
        color: rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 30px;
        padding: 10px 20px;
        outline: none;
    }

    input[type='submit'] {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: 46px;
        padding: 10px 26px;
        border: none;
        background: linear-gradient(
            to right,
            rgba(30, 213, 169, 1) 0%,
            rgba(1, 180, 228, 1) 100%
        );
        border-radius: 30px;
        position: absolute;
        top: 0;
        right: -1px;
        color: #fff;
        font-weight: 700;
        &:hover {
            color: $blue;
        }
    }
}

@media screen and (max-width: 768px) {
    .title {
        h1 {
            font-size: 2.5em;
        }
        h2 {
            font-size: 1.4em;
        }
    }
}
</style>