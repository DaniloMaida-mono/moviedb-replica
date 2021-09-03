<template>
    <div
        class="anchor relative block"
        :data-group="group"
        :class="[
            selected ? 'selected' : '',
            contrast ? 'contrast' : '',
            isMobile ? 'small' : 'large',
        ]"
        v-bind:style="{ display: isMobile && isMenuExpanded ? 'block' : '' }"
    >
        <h3 class="flex items-center justify-between">
            <a
                href="#"
                v-on:click.prevent="$emit('filterResults', $event, index)"
                v-text="label"
            ></a>
            <ExpandIcon
                v-if="isMobile && !isMenuExpanded"
                v-on:click="$emit('expandMenu', $event)"
            />
        </h3>
    </div>
</template>

<script>
import ExpandIcon from './icons/ExpandIcon.vue'
export default {
    name: 'ReelAnchor',
    components: { ExpandIcon },
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
        isMobile: Boolean,
        isMenuExpanded: Boolean,
    },
}
</script>

<style lang="scss">
$greenGradient: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
.anchor.large {
    display: block;
}
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
        background: $greenGradient;
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
    background: $greenGradient;
    border-radius: 30px;

    a {
        background: rgba($blue, 1);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

.expand {
    display: none;
}

@media screen and (max-width: 768px) {
    .anchor {
        .expand-icon {
            // display: none;
        }
    }
    .anchor.small {
        display: none;
    }
    .anchor.small.selected,
    .anchor.expanded {
        display: block;
    }
}

.anchor.contrast {
    h3 {
        color: $blue;

        .expand-icon {
            filter: invert(9%) sepia(53%) saturate(1778%) hue-rotate(188deg)
                brightness(99%) contrast(94%);
        }
    }
}
.anchor.contrast.selected {
    background: $greenGradient;
}
</style>