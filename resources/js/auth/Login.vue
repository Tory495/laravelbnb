<template>
  <div class="w-50 m-auto">
    <div class="card card-body">
      <form>
        <div class="form-group mb-3">
          <label for="email">E-mail</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your e-mail"
            class="form-control"
            v-model="email"
            :class="[{ 'is-invalid': errorFor('email') }]"
          />
          <v-errors :errors="errorFor('email')"></v-errors>
        </div>

        <div class="form-group mb-3">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            class="form-control"
            v-model="password"
            :class="[{ 'is-invalid': errorFor('password') }]"
          />
          <v-errors :errors="errorFor('password')"></v-errors>
        </div>

        <button
          type="submit"
          class="btn btn-primary btn-lg btn-block"
          :disabled="loading"
          @click.prevent="login"
        >
          Login
        </button>

        <hr />

        <div>
          Register
          <router-link :to="{  }" class="font-weight-bold"
            >Register</router-link
          >
        </div>

        <div>
          Forgotten password?
          <router-link :to="{  }" class="font-weight-bold"
            >Reset password</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
import validationErrors from "../shared/mixins/validationErrors";

export default {
  mixins: [validationErrors],
  data() {
    return {
      email: null,
      password: null,
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.errors = null;
      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/api/auth/login", {
          email: this.email,
          password: this.password,
        });
        await axios.get("/user");
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }
      this.loading = false;
    },
  },
};
</script>