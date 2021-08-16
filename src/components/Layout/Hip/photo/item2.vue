<template>
  <div class="bg-gray w-152 h-208">
    <div class="font-bold text-18 pt-10 pt-10 pl-1.2 absolute text-stroke">{{ this.index }}</div>
    <img src="../../../../data/testImage2.png" class="w-152 h-208 object-cover" />
  </div>
</template>

<script>
export default {
  props: ["index", "url"],
};
</script>
