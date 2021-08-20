<template>
  <div class="w-56 flex flex-row">
    <div v-if="this.len > 0" id="p1" class="z-0">
      <profile />
    </div>
    <div v-if="this.len > 1" id="p2" class="z-10 transform -translate-x-1.4">
      <profile />
    </div>
    <div v-if="this.len > 2" id="p3" class="z-20 transform -translate-x-28">
      <profile />
    </div>
  </div>
</template>

<script>
import profile from "../../assets/nodata_m.svg";
export default {
  props: ["len"],
  components: { profile },
  setup() {},
};
</script>

<style>
.profileIcon {
  width: 24px !important;
  height: 24px !important;
}
</style>
