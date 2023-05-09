<template>
  <div class="row">
    <div class="col-md-8 pb-4">
      <div class="card">
        <div class="card-body">
          <div v-if="loading">data is loading...</div>
          <div v-else>
            <h5>{{ bookable.title }}</h5>
            <hr />
            <article>{{ bookable.description }}</article>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 pb-4">
      <availability></availability>
    </div>
  </div>
</template>

<script>
import Availability from './Availability';

export default {
  components: {
    Availability
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