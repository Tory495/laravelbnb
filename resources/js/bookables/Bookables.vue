<template>
  <div class="container">
    <div v-if="loading">data is loading...</div>
    <div v-else>
      <div class="row" v-for="row in rows" :key="'row' + row">
        <div class="col d-flex align-items-stretch" v-for="(bookable, col) in bookablesInRow(row)" :key="'col' + row + col">
          <bookables-list-item
            v-bind="bookable"
          ></bookables-list-item>
        </div>
        <div class="col" v-for="placeholder in placeholdersInRow(row)" :key="'placeholder' + row + placeholder"/>
      </div>
    </div>
  </div>
</template>

<script>
import BookablesListItem from "./BookablesListItem";

export default {
  components: {
    BookablesListItem,
  },
  data() {
    return {
      bookables: null,
      loading: true,
      cols: 3,
    };
  },

  computed: {
    rows() {
      return this.bookables ? Math.ceil(this.bookables.length / this.cols) : 0;
    },
  },

  methods: {
    bookablesInRow(row) {
      return this.bookables.slice((row - 1) * this.cols, row * this.cols);
    },
    placeholdersInRow(row) {
      return this.cols - this.bookablesInRow(row).length;
    }
  },

  created() {
    const request = axios.get("/api/bookables").then((response) => {
      this.bookables = response.data;
      this.loading = false;
    });
  },
};
</script>

<style>
</style>