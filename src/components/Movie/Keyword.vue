<template>
    <li class="keyword">
        <a href="#" @click.prevent v-text="label"> </a>
    </li>
</template>

<script>
export default {
    name: 'Keyword',
    props: {
        label: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
li.keyword {
    margin-right: 5px;
    margin-bottom: 10px;
    line-height: 24px;
    font-size: 0.9em;
    box-sizing: border-box;
    white-space: nowrap;

    a {
        background-color: rgba(0, 0, 0, 0.1);
        border: 1px solid #d7d7d7;
        color: #000;
        padding: 4px 10px;
        border-radius: 4px;
    }
}
</style>