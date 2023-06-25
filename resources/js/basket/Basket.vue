<template>
  <div class="row">
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-6 form-group mb-3">
          <label for="first_name" class="form-label">First name</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            class="form-control"
            v-model="customer.first_name"
          />
        </div>
        <div class="col-md-6 form-group mb-3">
          <label for="last_name" class="form-label">Last name</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            class="form-control"
            v-model="customer.last_name"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 form-group mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            class="form-control"
            v-model="customer.email"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 form-group mb-3">
          <label for="street" class="form-label">Street</label>
          <input
            id="street"
            class="form-control"
            name="street"
            type="text"
            v-model="customer.street"
          />
        </div>
        <div class="col-md-6 form-group mb-3">
          <label for="city" class="form-label">City</label>
          <input
            id="city"
            class="form-control"
            name="city"
            type="text"
            v-model="customer.city"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 form-group mb-3">
          <label for="country" class="form-label">Country</label>
          <input
            id="country"
            class="form-control"
            name="country"
            type="text"
            v-model="customer.country"
          />
        </div>
        <div class="col-md-4 form-group mb-3">
          <label for="state" class="form-label">State</label>
          <input
            id="state"
            class="form-control"
            name="state"
            type="text"
            v-model="customer.state"
          />
        </div>
        <div class="col-md-2 form-group mb-3">
          <label for="zip" class="form-label">Zip</label>
          <input
            id="zip"
            class="form-control"
            name="zip"
            type="text"
            v-model="customer.zip"
          />
        </div>
      </div>
      <hr />
      <div
        class="btn btn-primary btn-lg w-100"
        type="submit"
        @click.prevent="book"
      >
        Book now!
      </div>
    </div>
    <div class="col-md-4">
      <div class="d-flex justify-content-between">
        <h6 class="text-uppercase text-secondary font-weight-bolder">
          Your cart
        </h6>
        <h6 class="basket-badge">
          <span v-if="itemsInBasket">Items {{ itemsInBasket }}</span>
          <span v-else>Empty</span>
        </h6>
      </div>
      <transition-group name="fade" tag="div">
        <div v-for="item in basket" :key="item.bookable.id">
          <div class="border-top pt-2 pb-2 d-flex justify-content-between">
            <router-link
              :to="{ name: 'bookable', params: { id: item.bookable.id } }"
            >
              {{ item.bookable.title }}
            </router-link>
            <span class="font-weight-bold">${{ item.price.total }}</span>
          </div>
          <div class="pb-2 pb-2 d-flex justify-content-between">
            <span> From {{ item.dates.from }} </span>
            <span> To {{ item.dates.to }} </span>
          </div>
          <div class="pt-2 pb-2 d-flex justify-content-end">
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="$store.dispatch('removeFromBasket', item.bookable.id)"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";
import validationErrors from "../shared/mixins/validationErrors";

export default {
  mixins: [validationErrors],
  data() {
    return {
      customer: {
        first_name: null,
        last_name: null,
        email: null,
        street: null,
        city: null,
        country: null,
        state: null,
        zip: null,
      },
      loading: false,
    };
  },
  computed: {
    ...mapState({ basket: (state) => state.basket.items }),
    ...mapGetters(["itemsInBasket"]),
  },
  methods: {
    async book() {
      this.loading = true;
      try {
        await axios.post(`api/checkout`, {
          customer: this.customer,
          bookings: this.basket.map((basketItem) => ({
            bookable_id: basketItem.bookable.id,
            from: basketItem.dates.from,
            to: basketItem.dates.to,
          })),
        });
      } catch (error) {}
      this.loading = false;
    },
  },
};
</script>

<style scoped>
a {
  color: #000000;
}
</style>