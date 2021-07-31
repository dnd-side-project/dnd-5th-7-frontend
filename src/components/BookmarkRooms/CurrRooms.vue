<template>
  <div class="flex flex-row mt-5 justify-between items-baseline">
    <div class="text-lg font-bold text-black">즐겨찾는</div>
    <span class="text-sm">더보기</span>
  </div>
  <div class="overflow-x-auto flex flex-row h-48 ml-1">
    <Memory></Memory>
    <Memory></Memory>
    <Memory></Memory>
  </div>
</template>

<script>
import Memory from "./Room.vue";

export default {
  name: "MemoryRecommend",
  components: {
    Memory,
  },
  props: {},
};
</script>
