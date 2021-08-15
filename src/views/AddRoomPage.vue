<template>
  <v-app>
    <Header :theme="this.theme" @showAlert="showAlert"></Header>
    <div class="p-3">
      <SelectTheme @themeSelected="themeSelected"></SelectTheme>

      <alert v-if="this.isAlertShow" class="alert absolute" :text="this.alertText" />
    </div>
    <Inputs @setName="setName" />
    <SelectDate @click="modalToggle" :nyear="this.year" :nmonth="this.month" :nday="this.day" />
    <div v-show="isModalClicked">
      <Modal @closeModal="modalToggle" @dayConfirmed="dayConfirm" />
    </div>
    <div class="flex justify-center mt-20"><OKBtn /></div>
  </v-app>
</template>
<script>
import Header from "../components/Headers/AddRoomHeader.vue";
import SelectTheme from "../components/AddRooms/SelectTheme.vue";
import alert from "../components/Alert/NotiLayer.vue";
import Inputs from "../components/AddRooms/Inputs.vue";
import SelectDate from "../components/AddRooms/SelectDate.vue";
import Modal from "../components/AddRooms/CalendarModal.vue";
import OKBtn from "../components/Common/OKButton.vue";

export default {
  data() {
    return {
      name: "기록장의 이름을 적어주세요",
      date: "2021/3/4",
      year: 0,
      month: 0,
      day: 0,
      theme: "hip",
      isModalClicked: false,
      alertText: "테마를 선택해주세요!",
      isAlertShow: false,
    };
  },
  components: {
    Header,
    SelectTheme,
    alert,
    Inputs,
    SelectDate,
    Modal,
    OKBtn,
  },
  methods: {
    themeSelected(theme) {
      this.theme = theme;
    },
    showAlert() {
      this.isAlertShow = true;
      setTimeout(() => {
        this.isAlertShow = false;
      }, 2000);
    },
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
      this.date = dates.year + "/" + dates.month + "/" + dates.day;
      console.log(this.date);
    },
  },
  created() {
    this.date = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate();
  },
};
</script>

<style>
.alert {
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
