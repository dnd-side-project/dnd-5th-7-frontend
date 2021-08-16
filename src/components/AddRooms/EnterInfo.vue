<template>
  <div class="border-2 border-gray100 px-20 py-20 mt-20">
    <div class="flex flex-row justify-between items-center">
      <div class="font-bold text-gray500 text-18">기록장의 정보를 입력해주세요.</div>
    </div>
    <div class="pt-22 flex flex-col justify-center items-center">
      <div class="flex flex-col">
        <div class="w-280 flex flex-col items-center justify-center">
          <Inputs class="w-280 mb-28" @setName="setName" />
          <SelectDate @click="modalToggle" :nyear="this.year" :nmonth="this.month" :nday="this.day" />
          <div v-show="isModalClicked">
            <Modal
              :myear="this.year"
              :mmonth="this.month"
              :mday="this.day"
              @closeModal="modalToggle"
              @dayConfirmed="dayConfirm"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Inputs from "./Inputs.vue";
import SelectDate from "./SelectDate.vue";
import Modal from "./CalendarModal.vue";

export default {
  components: { Inputs, SelectDate, Modal },
  setup() {},
  data() {
    return {
      name: "",
      data: "",
      year: "",
      month: "",
      day: "",
      isModalClicked: false,
    };
  },
  methods: {
    setName(InputName) {
      this.name = InputName;
    },
    modalToggle() {
      this.isModalClicked = !this.isModalClicked;
    },
    dayConfirm(dates) {
      this.year = dates.year;
      this.month = dates.month;
      this.day = dates.day;
      this.date = dates.year + "-" + dates.month + "-" + dates.day;
      console.log(this.date);
    },
  },
  created() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.day = new Date().getDate();
    this.date = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
  },
  watch: {
    day: function () {
      this.$emit("dateChanged", this.date);
    },
    name: function () {
      this.$emit("nameChanged", this.name);
    },
  },
};
</script>
