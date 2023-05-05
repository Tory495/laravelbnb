<template>
  <div class="container">
    <bookables-list-item
      :item-title="bookable1.title"
      :item-content="bookable1.content"
      :item-price="1000"
    ></bookables-list-item>
    <bookables-list-item
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
      bookable1: {
        title: "very cheap villa",
        content: "very cheap villa you know",
      },
      bookable2: {
        title: "cheap villa",
        content: "cheap villa we know",
      },
    };
  },
  created() {
    console.log("created");

    setTimeout(() => {
      this.bookable1.title = "expensive villa";
      this.bookable2.title = "very expensive villa";
    }, 5000);

  },
};
</script>

<style>
</style>