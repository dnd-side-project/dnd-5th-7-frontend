<template>
  <div class="w-152 h-208">
    <div class="font-bold text-18 pt-10 pt-10 pl-1.2 absolute text-stroke">{{ this.index }}</div>
    <img :src="image" class="w-152 h-208 image object-cover" />
  </div>
</template>

<script>
export default {
  props: ["index", "url"],
  data() {
    return {
      image: this.url,
    };
  },
  created() {
    console.log(this.url);
  },
};
</script>

<style>
.image {
  width: "152px" !important;
  height: "208px" !important;
}
</style>
