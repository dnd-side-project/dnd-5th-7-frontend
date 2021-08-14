<template>
  <v-app>
    <Header></Header>
    <div class="h-screen">
      <div class="flex justify-center h-300 bg-gray100">
        <BookView
          :data="{
            name: this.name,
            date: this.date,
            theme: this.theme,
          }"
        ></BookView>
      </div>
      <Inputs @setName="setName()" />
      <SelectDate @click="modalToggle" />
      <div v-show="isModalClicked">
        <Modal @closeModal="modalToggle" />
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
      this.name = InputName;
    },
    modalToggle() {
      this.isModalClicked = !this.isModalClicked;
    },
  },
};
</script>

<style></style>
