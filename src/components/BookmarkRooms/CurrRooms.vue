<template>
  <div class="flex flex-row mt-5 justify-between items-baseline">
    <div class="flex flex-row items-baseline">
      <img :src="symbolIcon" class="mr-1" />
      <span class="text-lg font-bold text-black">즐거웠던 추억들을 모았어요</span>
    </div>
    <span class="text-sm">더보기</span>
  </div>
  <div class="overflow-x-auto flex flex-row h-48 ml-1">
    <Memory></Memory>
    <Memory></Memory>
    <Memory></Memory>
  </div>
</template>

<script>
import symbolIcon from "../../assets/title_symbol_2.svg";
import Memory from "./Room.vue";

export default {
  name: "MemoryRecommend",
  setup() {
    return {
      symbolIcon,
    };
  },
  components: {
    Memory,
  },
  props: {},
};
</script>
