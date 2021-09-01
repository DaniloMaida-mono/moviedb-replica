<template>
    <div>
        <p class="mb-5">
            <strong class="block">Status</strong>
            {{ item.status }}
        </p>
        <p class="mb-5">
            <strong class="block">Original Language</strong>
            {{ item.original_language }}
        </p>
        <p class="mb-5">
            <strong class="block">Budget</strong>
            {{ budget }}
        </p>
        <p class="mb-5">
            <strong class="block">Revenue</strong>
            {{ revenue }}
        </p>
    </div>
</template>

<script>
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})
export default {
    name: 'MovieDetails',
    props: {
        item: Object,
    },
    computed: {
        budget: function () {
            return formatter.format(this.item.budget)
        },
        revenue: function () {
            return formatter.format(this.item.revenue)
        },
    },
}
</script>

<style>
</style>