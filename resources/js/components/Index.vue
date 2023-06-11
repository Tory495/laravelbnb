<template>
  <div>
    <nav class="navbar bg-white border-bottom navbar-light">
      <router-link class="navbar-brand mr-auto" :to="{ name: 'bookables' }">Bookables</router-link>
    </nav>
    <div class="container-md mt-5 mb-5 pr-5 pl-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>