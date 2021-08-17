<template>
  <div class="w-154 h-186 layout">
    <div class="text-14 w-110 h-80 overflow-hidden overflow-ellipsis absolute left-20 top-4.8">{{ this.text }}</div>
    <img src="../../../../assets/layout_hip_text_3.png" class="w-154 h-186 object-fill" />
    <!-- <background /> -->
  </div>
</template>

<script>
// import background from "../../../../assets/layout_hip_text_3.svg";
export default {
  props: ["index", "text"],
  components: {},
};
</script>
