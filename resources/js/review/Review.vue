<template>
  <div>
    <fatal-error v-if="error"></fatal-error>
    <div class="row" v-else>
      <div :class="[{ 'col-md-4': twoColumns }, { 'd-none': oneColumn }]">
        <div class="card">
          <div class="card-body">
            <div v-if="loading">Loading...</div>
            <div v-if="hasBooking">
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
      <div :class="[{ 'col-md-8': twoColumns }, { 'col-md-12': oneColumn }]">
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
                :class="[{ 'is-invalid': errorFor('content') }]"
              ></textarea>
              <v-errors :errors="errorFor('content')"></v-errors>
            </div>
            <button
              type="submit"
              class="btn btn-lg btn-primary w-100"
              @click.prevent="submit"
              :disabled="sending"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { is404, is422 } from "./../shared/utils/response";
import validationErrors from "../shared/mixins/validationErrors";

export default {
  mixins: [validationErrors],
  data() {
    return {
      review: {
        id: null,
        rating: 5,
        content: null,
      },
      existingReview: null,
      loading: null,
      booking: null,
      error: false,
      sending: null,
    };
  },
  async created() {
    this.review.id = this.$route.params.id;
    this.loading = true;
    try {
      this.existingReview = (
        await axios.get(`/api/reviews/${this.review.id}`)
      ).data.data;
    } catch (error) {
      if (is404(error)) {
        try {
          this.booking = (
            await axios.get(`/api/booking-by-review/${this.review.id}`)
          ).data.data;
        } catch (error) {
          this.error = !is404(error);
        }
      } else {
        this.error = true;
      }
    }
    this.loading = false;
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
    oneColumn() {
      return !this.loading && this.alreadyReviewed;
    },
    twoColumns() {
      return this.loading || !this.alreadyReviewed;
    },
  },
  methods: {
    submit() {
      this.errors = null;
      this.sending = true;
      axios
        .post(`/api/reviews`, this.review)
        .then((response) => console.log(response))
        .catch((err) => {
          if (is422(err)) {
            const errors = err.response.data.errors;
            if (errors["content"] && _.size(errors) === 1) {
              this.errors = errors;
              return;
            }
          }
          this.error = true;
        })
        .then(() => (this.sending = false));
    },
  },
};
</script>

<style>
</style>