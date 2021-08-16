<template>
  <div class="w-280 flex flex-row justify-between items-center">
    <span class="text-16">추억생성일</span>
    <div class="flex flex-row text-16 border-b-2 border-gray100 pb-0.4" @click="dateClicked">
      <DateIcon class="mr-0.4" />{{ this.year }}. {{ this.month }}. {{ this.day }}
    </div>
  </div>
</template>

<script>
import DateIcon from "../../assets/SelectDate.svg";
export default {
  props: ["nyear", "nmonth", "nday"],
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    };
  },
  components: {
    DateIcon,
  },
  methods: {
    dateClicked() {
      this.$emit("dateClicked");
    },
  },
  watch: {
    nday: function () {
      this.year = this.nyear;
      this.month = this.nmonth;
      this.day = this.nday;
    },
  },
};
</script>
