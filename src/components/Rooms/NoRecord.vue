<template>
  <div class="max-w-sm mx-auto flex flex-col justify-center items-center relative">
    <nodrecordIcon class="mt-36 mb-5" />
    <div class="font-bold text-gray200 text-center text-14">아직 기록이 없네요.<br />추억을 정리하러 가볼까요?</div>
    <div class="h-28 flex flex-col justify-between absolute top-5 right-5">
      <writingIcon />
      <hostIcon />
    </div>
  </div>
</template>

<script>
import nodrecordIcon from "../../assets/plus_icon_norecord.svg";
import writingIcon from "../../assets/floating_writing2.svg";
import hostIcon from "../../assets/floating_host2.svg";
export default {
  name: "NoRoom",
  props: {},
  components: {
    nodrecordIcon,
    writingIcon,
    hostIcon,
  },
};
</script>

<style scoped></style>
