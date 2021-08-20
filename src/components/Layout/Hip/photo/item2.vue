<template>
  <div class="w-154 h-186">
    <img src="../../../../assets/layout_hip_picture_2.png" class="w-154 h-186 object-fill" />
    <img :src="this.url" class="w-136 h-140 top-0 left-10 mt-0.8 absolute object-cover" />
    <img src="../../../../assets/hip_sticker_2_1.png" class="w-90 h-600 absolute object-fill top-1 right-1" />
    <img src="../../../../assets/hip_sticker_2_2.png" class="w-46 h-46 absolute object-fill bottom-6 left-1" />
  </div>
</template>

<script>
export default {
  props: ["index", "url"],
};
</script>
