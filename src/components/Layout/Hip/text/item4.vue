<template>
  <div class="w-154 h-154">
    <div class="text-14 w-110 h-600 absolute overflow-hidden overflow-ellipsis left-20 top-4.8">
      {{ this.text }}
    </div>
    <img src="../../../../assets/layout_hip_text_4.png" class="w-154 h-154 object-fill" />
    <!-- <background /> -->
  </div>
</template>

<script>
// import background from "../../../../assets/layout_hip_text_4.svg";
export default {
  props: ["index", "text"],
  components: {},
};
</script>

<style></style>
