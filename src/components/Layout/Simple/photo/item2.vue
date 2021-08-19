<template>
  <div class="bg-gray w-152 h-208">
    <div class="font-bold text-18 pt-10 pt-10 pl-1.2 absolute text-stroke">{{ this.index }}</div>
    <img v-bind:src="this.image" class="w-152 h-208 object-cover" />
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
