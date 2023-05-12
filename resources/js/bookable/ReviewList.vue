<template>
  <div style="padding: 1.25rem">
    <h6 class="text-uppercase text-secondary font-weight-bolder pt-4">
      review list
    </h6>
    <div v-if="loading">data is loading...</div>
    <div v-else>
      <div
        class="border-bottom d-none d-md-block"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <div class="row pt-4">
          <div class="col-md-6">Ilya Plotnikov</div>
          <div class="col-md-6 d-flex justify-content-end">
            {{ review.rating }}
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">{{ review.created_at }}</div>
        </div>
        <div class="row pt-4 pb-4">
          <div class="col-md-12">{{ review.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { bookableId: String },
  data() {
    return {
      loading: false,
      reviews: null,
    };
  },
  created() {
    this.loading = true;
    axios
      .get(`/api/bookables/${this.bookableId}/reviews`)
      .then((response) => (this.reviews = response.data.data))
      .finally(() => (this.loading = false));
  },
};
</script>

<style>
</style>