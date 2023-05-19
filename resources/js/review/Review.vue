<template>
  <div>
    <div v-if="loading">Data is loading...</div>
    <div v-else>
      <div v-if="alreadyReviewed">You already reviewed this booking</div>
      <div v-else>
        <div class="form-group mb-4">
          <label class="text-muted"
            >Select rating (1 is worst | 5 is best)</label
          >
          <star-rating v-model="review.rating" class="fa-3x"></star-rating>
        </div>
        <div class="form-group mb-4">
          <label for="content" class="text-muted"
            >Write your experience with</label
          >
          <textarea
            v-model="review.content"
            name="content"
            cols="30"
            rows="10"
            class="form-control"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-lg btn-primary w-100">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      review: {
        rating: 5,
        content: null,
      },
      existingReview: null,
      loading: null,
    };
  },
  created() {
    this.loading = true;
    // 1. If review already exists (in reviews table by id)

    axios
      .get(`/api/reviews/${this.$route.params.id}`)
      .then((response) => {
        this.existingReview = response.data.data;
      })
      .catch((err) => {})
      .then(() => (this.loading = false));
    // 2. Fetch a booking by a review key
    // 3. Store the review
  },
  computed: {
    alreadyReviewed() {
      return this.existingReview !== null;
    },
  },
};
</script>

<style>
</style>