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
        <div
          class="invalid-feedback"
          v-for="(error, index) in errorFor('from')"
          :key="`from${index}`"
        >
          {{ error }}
        </div>
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
        <div
          class="invalid-feedback"
          v-for="(error, index) in errorFor('to')"
          :key="`to${index}`"
        >
          {{ error }}
        </div>
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
export default {
  props: { bookableId: String },
  data() {
    return {
      from: null,
      to: null,
      loading: false,
      status: null,
      errors: null,
    };
  },
  methods: {
    check() {
      this.loading = true;
      this.errors = null;

      axios
        .get(
          `/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`
        )
        .then((response) => {
          this.status = response.status;
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
          this.status = error.response.status;
        })
        .finally(() => (this.loading = false));
    },

    errorFor(field) {
      return this.hasErrors && this.errors[field] ? this.errors[field] : null;
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