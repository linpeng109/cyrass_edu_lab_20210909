<template>
  <component :is="$store.state.index_store.right_view"></component>
</template>

<script>
export default {
  name: "Right",
}
</script>

<style scoped>

</style>