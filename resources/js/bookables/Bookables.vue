<template>
  <div class="container">
    <bookables-list-item
      v-if="bookable1"
      :item-title="bookable1.title"
      :item-content="bookable1.content"
      :item-price="1000"
    ></bookables-list-item>
    <bookables-list-item
      v-if="bookable2"
      :item-title="bookable2.title"
      :item-content="bookable2.content"
      :item-price="1500"
    ></bookables-list-item>
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
      bookable1: null,
      bookable2: null
    };
  },
  created() {
    console.log("created");

    setTimeout(() => {
      console.log("first");
      this.bookable1 = {
        title: "very cheap villa",
        content: "very cheap villa you know",
      };
      this.bookable2 = {
        title: "cheap villa",
        content: "cheap villa we know",
      };
    }, 5000);
  },
};
</script>

<style>
</style>