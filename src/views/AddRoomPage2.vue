<template>
  <v-app>
    <Header></Header>
    <div class="h-screen w-360">
      <div class="flex justify-center h-300 bg-gray100">
        <BookView :nname="this.name" :ndate="this.date" :ntheme="this.theme"></BookView>
      </div>
      <Inputs @setName="setName" />
      <SelectDate @click="modalToggle" :nyear="this.year" :nmonth="this.month" :nday="this.day" />
      <div v-show="isModalClicked">
        <Modal @closeModal="modalToggle" @dayConfirmed="dayConfirm" />
      </div>
      <div class="flex justify-center mt-20"><OKBtn /></div>
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/AddRoomHeader2.vue";
import BookView from "../components/AddRooms/BookView.vue";
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
    };
  },
  components: {
    Header,
    BookView,
    Inputs,
    SelectDate,
    Modal,
    OKBtn,
  },
  methods: {
    setName(InputName) {
      console.log(InputName);
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

<style></style>
