<template>
  <div class="w-56 flex flex-row">
    <div id="p1" class="z-0">
      <img src="../../assets/nodata_m.png" class="profileIcon" height="24px" />
      <!-- 크기 왜이래!!!!!ㅠ -->
    </div>
    <div id="p2" class="z-10 transform -translate-x-24">
      <img src="../../assets/nodata_m.png" class="profileIcon" height="24px" />
    </div>
    <div id="p3" class="z-20 transform -translate-x-4.8">
      <img src="../../assets/nodata_m.png" class="profileIcon" height="24px" />
    </div>
  </div>
</template>

<script>
// import profile from "../../assets/nodata_m.svg";
export default {
  // components: { profile },
  setup() {},
};
</script>

<style>
.profileIcon {
  width: 24px !important;
  height: 24px !important;
}
</style>
