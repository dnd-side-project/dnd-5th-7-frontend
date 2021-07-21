<template>
  <div class="mt-5 text-lg font-bold text-black">추천 추억 리스트</div>
  <div class="grid grid-cols-2">
    <Memory></Memory>
    <Memory></Memory>
    <Memory></Memory>
    <Memory></Memory>
    <Memory></Memory>
    <Memory></Memory>
    <Memory></Memory>
  </div>
</template>

<script>
import Memory from "./Memory.vue";

export default {
  name: "MemoryRecommend",
  components: {
    Memory,
  },
  props: {},
};
</script>
