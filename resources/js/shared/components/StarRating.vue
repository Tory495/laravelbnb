<template>
  <div class="d-flex">
    <i class="fas fa-star" v-for="star in fullStars" :key="`fullStar${star}`"></i>
    <i class="fas fa-star-half-alt" v-if="halfStar"></i>
    <i class="far fa-star" v-for="star in emptyStars" :key="`emptyStar${star}`"></i>
  </div>
</template>

<script>
export default {
  props: { rating: Number },
  computed: {
    fullStars() {
      return 3;
    },
    halfStar() {
      return true;
    },
    emptyStars() {
      return 1;
    },
  },
};
</script>

<style>
</style>