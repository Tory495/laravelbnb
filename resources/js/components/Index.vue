<template>
	<div>
		<router-link :to="{name: 'home'}">home</router-link>
		<router-link :to="{name: 'example'}">example</router-link>
		<div class="mt-5">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>