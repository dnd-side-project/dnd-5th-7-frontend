<template>
  <div class="p-6 mt-3 mb-14 max-w-sm mx-auto flex flex-col justify-center items-center">
    <nodataIcon class="mt-6 mb-2" />
    <div class="font-bold text-gray500 text-center text-14">
      아직 진행중인 기록이 없네요.<br />다이어리를 만들거나 참가해보세요!
    </div>
  </div>
</template>

<script>
import nodataIcon from "../../assets/plus_icon_nodata.svg";
export default {
  name: "NoRoom",
  props: {},
  components: {
    nodataIcon,
  },
};
</script>

<style scoped></style>
