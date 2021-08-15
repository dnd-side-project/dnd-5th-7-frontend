<template>
  <div class="bg-white w-152 h-208 pt-10 pl-1.2 pr-16">
    <div class="font-bold text-18 pb-10">{{ this.index }}</div>
    <div class="text-14 h-140 overflow-hidden overflow-ellipsis">{{ this.text }}</div>
  </div>
</template>

<script>
export default {
  props: ["index", "text"],
  setup() {},
};
</script>
