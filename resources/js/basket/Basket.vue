<template>
  <div class="row">
    <div class="col-md-8">Checkout form</div>
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
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({ basket: (state) => state.basket.items }),
    ...mapGetters(["itemsInBasket"]),
  },
};
</script>

<style scoped>
a {
  color: #000000;
}
</style>