<template>
  <div>
    <div v-if="loading">data is loading...</div>
    <div v-else class="row">
      <div class="col-md-8 pb-4">
        <div class="card">
          <div class="card-body">
            <h5>{{ bookable.title }}</h5>
            <hr />
            <article>{{ bookable.description }}</article>
          </div>
        </div>
        <review-list :bookable-id="bookable.id"></review-list>
      </div>
      <div class="col-md-4 pb-4">
        <availability
          :bookable-id="bookable.id"
          @availability="checkPrice($event)"
        ></availability>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Availability from "./Availability";
import ReviewList from "./ReviewList";
import { mapState } from "vuex";
export default {
  components: {
    Availability,
    ReviewList,
  },

  data() {
    return {
      bookable: null,
      loading: true,
      price: null,
    };
  },

  created() {
    axios
      .get(`/api/bookables/${this.$route.params.id}`)
      .then((response) => (this.bookable = response.data.data))
      .then(() => (this.loading = false));
  },

  computed: mapState({
    lastSearch: "lastSearch",
  }),

  methods: {
    async checkPrice(hasAvailability) {
      if (!hasAvailability) {
        this.price = null;
        return;
      }

      try {
        this.price = (
          await axios.get(
            `/api/bookable/${this.bookable.id}/price?from=${this.lastSearch.from}&to=${this.lastSearch.to}`
          )
        ).data.data;
        console.log(this.price);
      } catch (error) {
        this.price = null;
      }
    },
  },
};
</script>

<style>
</style>