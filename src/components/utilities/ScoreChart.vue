<template>
    <div
        class="rating text-white"
        :class="{ absolute: isAbsolute }"
        v-bind:style="{ width: size + 'px', height: size + 'px' }"
    >
        <div class="outer-ring relative">
            <span
                class="
                    absolute
                    percentage-text
                    flex
                    justify-center
                    items-center
                    h-full
                    w-full
                "
            >
                {{ rating }}%
            </span>
            <svg :viewBox="`0 0 36 36`" v-if="vote">
                <path
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    :stroke="colorBar"
                    stroke-width="3"
                    :stroke-dasharray="rating + ', 100'"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScoreChart',
    props: {
        vote: {
            type: Number,
            required: true,
        },
        size: {
            default: 38,
            type: Number,
        },
        isAbsolute: {
            default: false,
            type: Boolean,
        },
    },
    computed: {
        rating: function () {
            return this.vote * 10
        },
        colorBar: function () {
            const rating = this.rating
            if (rating < 70 && rating > 40) {
                return '#d2d531'
            }
            if (rating < 40) {
                return '#db2360'
            }

            return '#21d07a'
        },
    },
}
</script>

<style lang="scss">
.rating {
    bottom: -18px;
    left: 10px;
    display: inline-block;
    transition: transform 0.2s;
    transform: scale(1);
    background-color: #081c22;
    border-radius: 50%;

    .percentage-text {
        font-size: 0.7em;
        font-family: 'Consensus' !important;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
    }
}
</style>