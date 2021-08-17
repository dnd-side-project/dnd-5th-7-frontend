<template>
  <div id="modal-wrap">
    <div id="modal-box" class="w-320 h-352 p-3">
      <monthly @dayClicked="dayClicked" />
      <div class="flex flex-row justify-end mt-3 text-14">
        <span class="mr-5 cursor-pointer" @click="modalClose">취소</span>
        <span class="mx-5 cursor-pointer" @click="dayConfirm">확인</span>
      </div>
    </div>
    <label id="modal-bg" for="modal-status" />
  </div>
</template>

<script>
import Monthly from "./Calendar.vue";
export default {
  components: { Monthly },
  props: ["myear", "mmonth", "mday"],
  data() {
    return {
      year: this.myear,
      month: this.mmonth,
      day: this.mday,
    };
  },
  methods: {
    modalClose() {
      this.$emit("closeModal");
    },
    dayConfirm() {
      const dates = {
        year: this.year,
        month: this.month,
        day: this.day,
      };
      this.$emit("dayConfirmed", dates);
      this.$emit("closeModal");
    },
    dayClicked(dates) {
      this.year = dates.year;
      this.month = dates.month;
      this.day = dates.day;
    },
  },
};
</script>

<style>
#modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
}
#modal-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 101;
}
#modal-status + #modal-wrap {
  display: none;
}
#modal-status:checked + #modal-wrap {
  display: initial;
}
</style>
