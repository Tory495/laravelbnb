<template>
  <div>
    <div class="form-group mb-4">
        <label class="text-muted">Select rating (1 is worst | 5 is best)</label>
        <star-rating :rating="5" class="fa-3x"></star-rating>
    </div>
    <div class="form-group mb-4">
        <label for="content" class="text-muted">Write your experience with</label>
        <textarea name="content" cols="30" rows="10" class="form-control"></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-primary w-100">Submit</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>