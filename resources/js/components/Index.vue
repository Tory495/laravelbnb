<template>
  <div>
    <nav class="navbar bg-white border-bottom navbar-light">
      <router-link class="navbar-brand mr-auto" :to="{ name: 'bookables' }"
        >Bookables</router-link
      >
      <router-link class="btn nav-button" :to="{ name: 'basket' }">
        Basket
        <span class="basket-badge" v-if="itemsInBasket">{{ itemsInBasket }}</span>
        <span v-else>empty</span>
      </router-link>
    </nav>
    <div class="container-md mt-5 mb-5 pr-5 pl-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["itemsInBasket"]),
};
</script>