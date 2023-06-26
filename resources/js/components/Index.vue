<template>
  <div>
    <nav class="navbar-expand-lg navbar bg-white border-bottom navbar-light d-flex justify-content-between">
      <router-link class="btn nav-button" :to="{ name: 'bookables' }">LaravelBnb
      </router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="btn nav-button" :to="{ name: 'basket' }">
            Basket
            <span class="basket-badge" v-if="itemsInBasket">{{
              itemsInBasket
            }}</span>
            <span v-else>empty</span>
          </router-link>
        </li>

        <li class="nav-item" v-if="!isLoggedIn">
          <router-link :to="{ name: 'register' }" class="nav-link"
            >Register</router-link
          >
        </li>

        <li class="nav-item" v-if="!isLoggedIn">
          <router-link :to="{ name: 'login' }" class="nav-link"
            >Sign-in</router-link
          >
        </li>

        <li class="nav-item" v-if="isLoggedIn">
          <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </nav>
    <div class="container-md mt-5 mb-5 pr-5 pl-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["itemsInBasket"]),
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    async logout() {
      try {
        axios.post("/api/auth/logout");
        this.$store.dispatch("logout");
      } catch (error) {
        this.$store.dispatch("logout");
      }
    },
  },
};
</script>