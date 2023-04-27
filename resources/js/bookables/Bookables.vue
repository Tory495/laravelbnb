<template>
  <div class="container">
    <bookables-list-item
      item-title="Cheap Villa"
      item-content="A very cheap villa"
      :item-price="1000"
    ></bookables-list-item>
		<bookables-list-item
      item-title="Cheap Villa 2"
      item-content="A very cheap villa 2"
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
};
</script>

<style>
</style>