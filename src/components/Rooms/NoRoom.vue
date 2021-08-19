<template>
  <div v-if="this.from == 'list'" class="p-6 pt-126 mb-14 max-w-sm mx-auto flex flex-col justify-center items-center">
    <plusicon class="mt-6 mb-2" />
    <div class="text-gray300 text-center text-14">
      아직 진행중인 기록이 없네요.<br />다이어리를 만들거나 참가해보세요!
    </div>
  </div>
  <div v-else class="p-6 mt-3 mb-14 max-w-sm mx-auto flex flex-col justify-center items-center">
    <nodataIcon class="mt-6 mb-2" />
    <div class="text-gray500 text-center text-14">
      아직 진행중인 기록이 없네요.<br />다이어리를 만들거나 참가해보세요!
    </div>
  </div>
</template>

<script>
import plusicon from "../../assets/plus_nodata.svg";
import nodataIcon from "../../assets/plus_icon_nodata.svg";
export default {
  name: "NoRoom",
  props: ["from"],
  data() {
    return {
      froms: this.from,
    };
  },
  components: {
    nodataIcon,
    plusicon,
  },
  created() {
    // console.log(this.from);
  },
};
</script>

<style scoped></style>
