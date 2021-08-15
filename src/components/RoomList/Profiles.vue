<template>
  <div class="w-56 flex flex-row">
    <div id="p1" class="z-0"><profile /></div>
    <div id="p2" class="z-10 transform -translate-x-1.4"><profile /></div>
    <div id="p3" class="z-20 transform -translate-x-28"><profile /></div>
  </div>
</template>

<script>
import profile from "../../assets/nodata_m.svg";
export default {
  components: { profile },
  setup() {},
};
</script>

<style></style>
