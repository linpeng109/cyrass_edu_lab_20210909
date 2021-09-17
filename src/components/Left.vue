<template>
  <component :is="$store.state.index_store.left_view"></component>
</template>

<script>

export default {
  name: "Left",
}
</script>

<style scoped>

</style>