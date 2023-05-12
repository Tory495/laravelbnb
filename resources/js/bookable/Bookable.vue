<template>
  <div>
    <div v-if="loading">data is loading...</div>
    <div v-else class="row">
      <div class="col-md-8 pb-4">
        <div class="card">
          <div class="card-body">
            <h5>{{ bookable.title }}</h5>
            <hr />
            <article>{{ bookable.description }}</article>
          </div>
        </div>
        <review-list :bookable-id="bookable.id"></review-list>
      </div>
      <div class="col-md-4 pb-4">
        <availability :bookable-id="bookable.id"></availability>
      </div>
    </div>
  </div>
</template>

<script>
import Availability from "./Availability";
import ReviewList from "./ReviewList";
export default {
  components: {
    Availability,
    ReviewList,
  },

  data() {
    return {
      bookable: null,
      loading: true,
    };
  },

  created() {
    axios.get(`/api/bookables/${this.$route.params.id}`).then((response) => {
      this.bookable = response.data.data;
      this.loading = false;
    });
  },
};
</script>

<style>
</style>