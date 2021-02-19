<template>
  <div class="simple-memo" v-bind:style="{ backgroundColor: bgColor }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "orange",
    },
  },
}
</script>

<style scoped>
.simple-memo {
  margin: 4px;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
}
</style>
