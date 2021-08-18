<template>
  <div>
    <div class="flex flex-row justify-between items-center p-3 h-56 header">
      <cancleIcon class="cursor-pointer" @click="goback()" />
      <div class="text-16 header-text">{{ this.year }}.{{ this.month }}.{{ this.day }}</div>
      <DateIcon class="cursor-pointer" @click="modalToggle" />
      <div v-show="isModalClicked">
        <Modal @closeModal="modalToggle" @dayConfirmed="dayConfirm" />
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import cancleIcon from "../../assets/icon_cancle.svg";
import DateIcon from "../../assets/SelectDate.svg";
import Modal from "../AddRooms/CalendarModal.vue";
export default {
  props: ["datee", "theme"],
  components: {
    cancleIcon,
    DateIcon,
    Modal,
  },
  data() {
    return {
      dates: this.datee,
      year: this.datee.year,
      month: this.datee.month,
      day: this.datee.day,
      isModalClicked: false,
    };
  },
  methods: {
    goback() {
      window.history.back();
    },
    goto(page) {
      if (this.themecheck()) this.$router.push(page);
      else this.alertShow();
    },
    modalToggle() {
      this.isModalClicked = !this.isModalClicked;
    },
    dayConfirm(dates) {
      this.year = dates.year;
      this.month = dates.month;
      this.day = dates.day;
      //   this.date = dates.year + "/" + dates.month + "/" + dates.day;
      console.log(this.date);
    },
  },
};
</script>

<style>
.divider {
  height: 2px;
  background: #eaeaea;
  transform: matrix(1, 0, 0, -1, 0, 0);
}
</style>
