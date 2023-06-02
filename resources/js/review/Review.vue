<template>
  <div class="row">
    <div
      :class="[
        { 'col-md-4': loading || !alreadyReviewed },
        { 'd-none': !loading && alreadyReviewed },
      ]"
    >
      <div class="card">
        <div class="card-body">
          <div v-if="loading">Loading...</div>
          <div v-else-if="hasBooking">
            <p>
              Stayed at
              <router-link
                :to="{
                  name: 'bookable',
                  params: { id: booking.bookable.bookable_id },
                }"
                >{{ booking.bookable.title }}</router-link
              >
            </p>
            <p>From {{ booking.from }} to {{ booking.to }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="[
        { 'col-md-8': loading || !alreadyReviewed },
        { 'col-md-12': !loading && alreadyReviewed },
      ]"
    >
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
      booking: null,
    };
  },
  created() {
    this.loading = true;

    axios // 1. If review already exists (in reviews table by id)
      .get(`/api/reviews/${this.$route.params.id}`)
      .then((response) => {
        this.existingReview = response.data.data;
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.status &&
          err.response.status === 404
        ) {
          return axios // 2. Fetch a booking by a review key
            .get(`/api/booking-by-review/${this.$route.params.id}`)
            .then((response) => (this.booking = response.data.data));
        }
      })
      .then(() => (this.loading = false));
    // 3. Store the review
  },
  computed: {
    alreadyReviewed() {
      return this.hasReview || !this.hasBooking;
    },
    hasReview() {
      return this.existingReview !== null;
    },
    hasBooking() {
      return this.booking !== null;
    },
  },
};
</script>

<style>
</style>