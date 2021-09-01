<template>
    <section class="panel max-w-fulls">
        <div
            class="
                collection-container
                flex flex-wrap
                items-center
                content-center
                w-full
                text-white
            "
            v-bind:style="{
                backgroundImage: `linear-gradient(to right, rgba(3,37,65,1) 0%, rgba(3,37,65,0.6) 100%), url(${bg})`,
            }"
        >
            <div class="collection-content w-full">
                <h2>Part of the {{ item?.name }}</h2>
            </div>
            <div class="collection-cta mt-5">
                <p>
                    <a href="#" class="uppercase font-semibold"
                        >View the Collection</a
                    >
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CollectionSection',
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    computed: {
        bg: function () {
            return (
                'https://www.themoviedb.org/t/p/w1440_and_h320_multi_faces/' +
                this.item?.backdrop_path
            )
        },
    },
}
</script>

<style lang="scss">
.collection-container {
    border-radius: 8px;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    padding: 0 20px;
    height: 258px;

    .collection-content {
        h2 {
            font-size: 1.9em;
            font-weight: 600;
        }
    }

    .collection-cta {
        p {
            border-color: #191e20;
            background-color: #191e20;
            border-radius: 20px;
            display: inline-flex;
            align-items: center;
            align-content: center;
            padding: 6px 20px;

            &:hover {
                background-color: #000;
            }
        }
    }
}
</style>