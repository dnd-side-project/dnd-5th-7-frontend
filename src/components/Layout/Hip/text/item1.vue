<template>
  <div class="w-154 h-154 layout">
    <div class="text-14 w-110 h-800 overflow-hidden overflow-ellipsis absolute left-20 top-4.8">{{ this.text }}</div>

    <img src="../../../../assets/layout_hip_text_1.png" class="w-154 h-154 object-fill" />
    <!-- <background /> -->
  </div>
</template>

<script>
// import background from "../../../../assets/layout_hip_text_1.svg";
export default {
  props: ["index", "text"],
  components: {},
  setup() {},
};
</script>
