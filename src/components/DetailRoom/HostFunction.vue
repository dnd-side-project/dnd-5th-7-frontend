<template>
  <div class="flex flex-col h-100 font-regular text-14 bg-white funcpicker">
    <div
      class="flex justify-center items-center py-1.4 px-28 h-50 w-140 hoverPicker"
      v-for="(func, index) in functions"
      v-bind:key="index"
    >
      <div>{{ func }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Selected: ",",
      functions: ["글 기록하기", "사진 기록하기"],
    };
  },
};
</script>

<style>
.funcpicker {
  background-color: white;
}

.hoverPicker:hover {
  background-color: #eaeaea;
}
</style>
