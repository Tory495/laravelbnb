<template>
  <div class="w-50 m-auto">
    <div class="card card-body">
      <form>
        <div class="form-group mb-3">
          <label for="email">E-mail</label>
          <input
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
          <label for="email">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            class="form-control"
            v-model="password"
            :class="[{ 'is-invalid': errorFor('password') }]"
          />
          <v-errors :errors="errorFor('password')"></v-errors>
        </div>

        <button type="submit" class="btn btn-primary btn-lg btn-block">
          Login
        </button>

        <hr />

        <div>
          Register
          <router-link :to="{ name: 'home' }" class="font-weight-bold"
            >Register</router-link
          >
        </div>

        <div>
          Forgotten password?
          <router-link :to="{ name: 'home' }" class="font-weight-bold"
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
    };
  },
};
</script>