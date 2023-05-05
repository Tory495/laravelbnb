<template>
  <div class="container">
    <div v-if="loading">data is loading...</div>
    <div v-else>
      <bookables-list-item
        :item-title="bookable.title"
        :item-content="bookable.content"
        :item-price="1000"
        v-for="(bookable, index) in bookables"
        :key="index"
      ></bookables-list-item>
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
    };
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
        }
      ];
      this.loading = false;
    }, 5000);
  },
};
</script>

<style>
</style>