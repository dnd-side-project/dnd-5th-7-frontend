<template>
  <div class="bg-gray500 text-black w-152 h-152 layout">
    <div class="font-bold text-18 pt-10 pl-1.2 absolute text-stroke">{{ this.index }}</div>
    <img src="../../../../data/testImage.png" class="w-152 h-152 object-cover" />
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
