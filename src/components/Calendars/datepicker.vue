<template>
  <div class="flex flex-col h-256 w-140 font-regular text-13 overflow-y-scroll bg-white datepicker">
    <div
      id="scrollView"
      class="flex justify-center items-center py-2.5 p-0.6 h-256 w-140 hoverPicker"
      v-for="[y, m] in list"
      v-bind:key="[y, m]"
      :class="{ 'picker-selected-date': y === currYear && m === currMonth }"
      @click="onEmit(y, m)"
    >
      <span>{{ y }}년 {{ m }}월</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["SelectedYear", "SelectedMonth"],
  data() {
    return {
      currYear: this.SelectedYear,
      currMonth: this.SelectedMonth,
      startyears: 2021,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      list: [],
    };
  },
  created() {
    this.init();
    this.makeList();
  },
  methods: {
    init() {
      const date = new Date();
      this.currYear = date.getFullYear();
      this.currMonth = date.getMonth() + 1; // 시금 시점의 연도와 달 가져옴
    },
    makeList() {
      for (let y = this.startyears; y <= this.currYear; y++) {
        if (y !== this.currYear) {
          this.months.forEach((m) => {
            this.list.push([y, m]);
          });
        } else {
          for (let m = 1; m <= this.currMonth; m++) {
            this.list.push([y, m]);
          }
        }
      }
    },
    onEmit(y, m) {
      const param = [y, m];
      this.$emit("setEmitDate", param);
    },
  },
};
</script>

<style>
.datepicker {
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.hoverPicker:hover,
.picker-selected-date {
  background-color: #eaeaea;
}
</style>
