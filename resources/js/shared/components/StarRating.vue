<template>
  <div class="d-flex">
    <i
      class="fas fa-star"
      v-for="star in fullStars"
      :key="`fullStar${star}`"
    ></i>
    <i class="fas fa-star-half-alt" v-if="halfStar"></i>
    <i
      class="far fa-star"
      v-for="star in emptyStars"
      :key="`emptyStar${star}`"
    ></i>
  </div>
</template>

<script>
export default {
  props: { rating: Number },
  computed: {
    fullStars() {
      return Math.round(this.rating);
    },
    halfStar() {
      const fraction = Math.round((this.rating - Math.floor(this.rating)) * 10);
      return fraction > 0 && fraction < 5;
    },
    emptyStars() {
      return 5 - Math.ceil(this.rating);
    },
  },
};
</script>

<style>
</style>