<template>
    <div
        class="anchor"
        :data-group="group"
        :class="[selected ? 'selected' : '', contrast ? 'contrast' : '']"
        v-on:click="$emit('filterResults', $event, index)"
    >
        <h3 class="">
            <a href="#" v-text="label"></a>
        </h3>
    </div>
</template>

<script>
export default {
    name: 'ReelAnchor',
    props: {
        label: {
            type: String,
            required: true,
        },
        group: {
            type: String,
            required: true,
        },
        selected: {
            type: Boolean,
        },
        index: {
            type: Number,
            required: true,
        },
        contrast: {
            type: Boolean,
        },
    },
}
</script>

<style lang="scss" scoped>
.anchor {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;

    h3 {
        font-size: 1em;
        padding: 4px 20px;
        margin-bottom: 0;
        white-space: nowrap;
        color: $blue;
    }
}

.anchor.selected {
    background-color: $blue;
    border-radius: 30px;

    a {
        background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

.anchor.contrast {
    h3 {
        color: #fff;
    }
}
.anchor.contrast.selected {
    background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
    border-radius: 30px;

    a {
        background: rgba($blue, 1);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
</style>