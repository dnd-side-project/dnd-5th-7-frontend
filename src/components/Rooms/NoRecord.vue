<template>
  <div className=" flex flex-col justify-center items-center relative z-0">
    <nodrecordIcon class="mt-36 mb-5 z-0" />
    <div class="font-bold text-gray200 text-center text-14 z-0">아직 기록이 없네요.<br />추억을 정리하러 가볼까요?</div>
  </div>
</template>

<script>
import nodrecordIcon from "../../assets/plus_icon_norecord.svg";

export default {
  name: "NoRoom",
  setup() {},
  props: {},
  components: {
    nodrecordIcon,
  },
};
</script>

<style scoped></style>
