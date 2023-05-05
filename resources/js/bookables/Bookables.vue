<template>
  <div class="container">
    Rows: {{ rows }}
    <div v-if="loading">data is loading...</div>
    <div v-else>
      <div class="row" v-for="row in rows" :key="'row' + row">
        <div class="col" v-for="(bookable, col) in bookablesInRow(row)" :key="'col' + row + col">
          <bookables-list-item
            :item-title="bookable.title"
            :item-content="bookable.content"
            :item-price="1000"
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
    console.log("created");

    setTimeout(() => {
      this.bookables = [
        {
          title: "very cheap villa",
          content: "very cheap villa you know",
        },
        {
          title: "cheap villa",
          content: "cheap villa we know",
        },
        {
          title: "cheap villa3",
          content: "cheap villa we know",
        },
        {
          title: "cheap villa4",
          content: "cheap villa we know",
        },
        {
          title: "cheap villa5",
          content: "cheap villa we know",
        },
        {
          title: "cheap villa6",
          content: "cheap villa we know",
        },
        {
          title: "cheap villa7",
          content: "cheap villa we know",
        },
      ];
      this.loading = false;
    }, 5000);
  },
};
</script>

<style>
</style>