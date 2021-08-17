<template>
  <div class="bg-white w-152 h-152 pt-10 pl-1.2 pr-16">
    <div class="font-bold text-18 pb-10">{{ this.index }}</div>
    <div class="text-14 h-80 overflow-hidden overflow-ellipsis">{{ this.text }}</div>
    <background />
  </div>
</template>

<script>
import background from "../../../../assets/layout_hip_text_1.svg";
export default {
  props: ["index", "text"],
  components: { background },
  setup() {},
};
</script>
