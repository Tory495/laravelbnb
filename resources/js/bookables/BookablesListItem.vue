<template>
  <div>
    <h3>{{ itemTitle }}</h3>
    <p>{{ itemContent }}</p>
  </div>
</template>

<script>
export default {
  props: { itemTitle: String, itemContent: String, itemPrice: Number },
};
</script>

<style>
</style>