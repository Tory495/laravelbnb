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
          class="mb-4"
        ></availability>
        <transition name="fade">
          <div v-if="price">
            <price-breakdown :price="price"></price-breakdown>
            <button class="mt-2 btn btn-outline-secondary w-100" @click="addToBasket">Book</button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Availability from "./Availability";
import ReviewList from "./ReviewList";
import PriceBreakdown from "./PriceBreakdown";
import { mapState } from "vuex";
export default {
  components: {
    Availability,
    ReviewList,
    PriceBreakdown,
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
      } catch (error) {
        this.price = null;
      }
    },
    addToBasket() {
      this.$store.commit("addToBasket", {
        bookable: this.bookable,
        dates: this.lastSearch,
        price: this.price,
      });
    },
  },
};
</script>

<style scoped>
.btn {
  transition: all 0.5s;
}
</style>