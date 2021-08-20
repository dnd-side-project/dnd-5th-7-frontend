<template>
  <div class="text-black w-154 h-154 layout">
    <img src="../../../../assets/layout_hip_picture_1.png" class="w-154 h-154 object-fill" />
    <img :src="this.url" class="w-130 h-130 object-cover absolute rounded-full left-1.2 top-10" />
    <img src="../../../../assets/hip_sticker_1_1.png" class="w-42 h-42 absolute object-fill right-4 bottom-4" />
    <img src="../../../../assets/hip_sticker_1_2.png" class="w-42 h-42 absolute object-fill left-3 top-3" />
  </div>
</template>

<script>
export default {
  props: ["index", "url"],
};
</script>

<style>
.text-stroke {
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
}
</style>
