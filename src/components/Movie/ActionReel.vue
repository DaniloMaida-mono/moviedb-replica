<template>
    <ul class="flex items-center w-full">
        <li class="chart flex items-center">
            <div class="score"><ScoreChart :size="60" :vote="vote" /></div>
            <div class="text ml-2 font-bold">
                User <br />
                Score
            </div>
        </li>
        <li class="tooltip">
            <a href="#" @click.prevent class="flex justify-center items-center">
                <img src="/src/assets/list-icon.svg" alt="" />
            </a>
        </li>
        <li class="tooltip">
            <a href="#" @click.prevent class="flex justify-center items-center">
                <img src="/src/assets/heart-icon.svg" alt="" />
            </a>
        </li>
        <li class="tooltip">
            <a href="#" @click.prevent class="flex justify-center items-center">
                <img src="/src/assets/bookmark-icon.svg" alt="" />
            </a>
        </li>
        <li class="tooltip">
            <a href="#" @click.prevent class="flex justify-center items-center">
                <img src="/src/assets/list-icon.svg" alt="" />
            </a>
        </li>
        <li class="video">
            <a href="#" @click.prevent class="font-semibold flex items-center">
                <img src="/src/assets/play-icon.svg" alt="" />
                Play Trailer
            </a>
        </li>
    </ul>
</template>

<script>
import ScoreChart from '../utilities/ScoreChart.vue'
export default {
    name: 'ActionReel',
    components: { ScoreChart },
    props: {
        vote: {
            type: Number,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
ul {
    height: 68px;

    li {
        margin-right: 20px;
    }

    li.tooltip {
        padding: 3px 0;

        a {
            background-color: $blue;
            border-radius: 50%;
            width: 46px;
            height: 46px;

            img {
                width: 1em;
                height: 1em;
            }
        }
    }

    li.video {
        img {
            margin-right: 5px;
            width: 1.4em;
            height: 1.4em;
            filter: invert(1);
        }
    }
}
</style>