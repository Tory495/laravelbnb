<template>
  <div>
    <h6 class="text-uppercase text-secondary text-weight-bolder">
      check availability
      <span v-if="hasAvailability" class="text-uppercase text-success"
        >(available)</span
      >
      <span v-if="noAvailability" class="text-uppercase text-danger"
        >(not available)</span
      >
    </h6>
    <div class="row mb-2">
      <div class="form-group col-md-6">
        <label for="from">From</label>
        <input
          type="text"
          name="for"
          class="form-control form-control-sm"
          placeholder="Start date"
          v-model="from"
          @keyup.enter="check()"
          :class="{ 'is-invalid': errorFor('from') }"
        />
        <v-errors :errors="errorFor('from')"></v-errors>
      </div>
      <div class="form-group col-md-6">
        <label for="to">To</label>
        <input
          type="text"
          name="to"
          class="form-control form-control-sm"
          placeholder="End date"
          v-model="to"
          @keyup.enter="check()"
          :class="{ 'is-invalid': errorFor('to') }"
        />
        <v-errors :errors="errorFor('to')"></v-errors>
      </div>
    </div>
    <div class="d-grid gap">
      <button
        class="btn btn-secondary btn-block"
        @click="check()"
        :disabled="loading"
      >
        Check!
      </button>
    </div>
  </div>
</template>

<script>
import { is422 } from "./../shared/utils/response";
import validationErrors from "../shared/mixins/validationErrors";

export default {
  mixins: [validationErrors],
  props: { bookableId: [Number, String] },
  data() {
    return {
      from: null,
      to: null,
      loading: false,
      status: null,
    };
  },
  methods: {
    check() {
      this.loading = true;
      this.errors = null;
      this.$store.commit("setLastSearch", {
        from: this.from,
        to: this.to,
      });
      axios
        .get(
          `/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`
        )
        .then((response) => {
          this.status = response.status;
        })
        .catch((error) => {
          if (is422(error)) {
            this.errors = error.response.data.errors;
          }
          this.status = error.response.status;
        })
        .then(() => (this.loading = false));
    },
  },
  computed: {
    hasErrors() {
      return this.status === 422 && this.errors;
    },
    hasAvailability() {
      return this.status === 200;
    },
    noAvailability() {
      return this.status === 404;
    },
  },
};
</script>

<style scoped>
label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: gray;
  font-weight: bolder;
}
</style>