<template>
  <div class="app">
    <simple-memo bgColor="orange">オレンジ</simple-memo>
    <simple-memo bgColor="pink">ピンク</simple-memo>
    <simple-memo bgColor="green">みどり</simple-memo>
  </div>
</template>

<script>
import SimpleMemo from "./components/SimpleMemo.vue"
export default {
  components: { SimpleMemo },
}
</script>
