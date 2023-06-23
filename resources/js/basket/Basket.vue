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