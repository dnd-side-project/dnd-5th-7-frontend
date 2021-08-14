<template>
  <div class="flex flex-row justify-between items-center p-3 mx-2">
    <span class="text-16">추억생성일</span>
    <div class="flex flex-row text-16 border-b-2 border-gray300 pb-0.4">
      <DateIcon class="mr-0.4" />{{ this.year }}. {{ this.month }}. {{ this.day }}
    </div>
  </div>
</template>

<script>
import DateIcon from "../../assets/SelectDate.svg";
export default {
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
  methods: {},
};
</script>
