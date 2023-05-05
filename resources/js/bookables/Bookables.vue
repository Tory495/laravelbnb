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
    <bookables-list-item
      :item-title="bookable3.title"
      :item-content="bookable3.content"
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
      console.log("first");
      this.bookable1 = {
        title: "very cheap villa",
        content: "very cheap villa you know",
      };
      this.bookable2 = {
        title: "cheap villa",
        content: "cheap villa we know",
      };
      this.bookable3 = {
        title: "bookable 3",
        content: "bookable 3 villa we know",
      };
    }, 5000);

    setTimeout(() => {
      console.log("second");
      this.bookable2.title = "bookable 2 title you see";
    }, 8000);

    setTimeout(() => {
      console.log("third");
      this.bookable3.title = "u ll'nt see this";
    }, 12000);
  },
};
</script>

<style>
</style>