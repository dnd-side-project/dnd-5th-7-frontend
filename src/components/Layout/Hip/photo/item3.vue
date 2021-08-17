<template>
  <div class="text-black w-154 h-186 layout">
    <img src="../../../../assets/layout_hip_picture_3.png" class="w-154 h-186 object-fill" />
    <img src="../../../../data/testImage.png" class="w-124 h-124 object-cover rounded-full absolute left-16 top-28" />
    <img src="../../../../assets/hip_sticker_3.png" class="w-50 h-50 absolute object-fill right-2 bottom-7" />
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
