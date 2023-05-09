<template>
  <div>
    <h6 class="text-uppercase text-secondary text-weight-bolder">
      check availability
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
        />
      </div>
      <div class="form-group col-md-6">
        <label for="to">To</label>
        <input
          type="text"
          name="to"
          class="form-control form-control-sm"
          placeholder="End date"
          v-model="to"
        />
      </div>
    </div>
    <div class="d-grid gap">
      <button class="btn btn-secondary btn-block">Check!</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: null,
      to: null,
    };
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