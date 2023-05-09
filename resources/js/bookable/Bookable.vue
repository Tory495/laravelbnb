<template>
    <div v-if="bookable">
        {{ bookable.title }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            bookable: null
        }
    },
    
    created() {
        axios.get(`/api/bookables/${this.$route.params.id}`).then(response => this.bookable = response.data);
    }
}
</script>

<style>

</style>