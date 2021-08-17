<template>
  <v-app>
    <Header :theme="this.theme"></Header>
    <div class="pt-28 px-20 h-screen bg-bg">
      <SelectTheme @themeSelected="themeSelected"></SelectTheme>
      <!-- <SelectMember></SelectMember> -->
      <EnterInfo @dateChanged="dateChanged" @nameChanged="nameChanged" />
      <alert v-if="this.isAlertShow == true" class="alert absolute" :text="this.alertText" />
      <OKBtn class="mt-42" @click="AddRoom" />
      <!-- <OKBtn class="mt-42" @click="goto('room')" /> -->
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
// import RoomService from "../api/Room/services/room.service";
import Header from "../components/Headers/AddRoomHeader.vue";
import SelectTheme from "../components/AddRooms/SelectTheme.vue";
// import SelectMember from "../components/AddRooms/SelectMember.vue";
import EnterInfo from "../components/AddRooms/EnterInfo.vue";
import alert from "../components/Alert/NotiLayer.vue";
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
    // SelectMember,
    EnterInfo,
    alert,
    OKBtn,
  },
  methods: {
    themeSelected(theme) {
      this.theme = theme;
      // console.log("선택된 테마 :" + this.theme);
    },
    goto(page) {
      if (this.theme != "") this.$router.push(page);
      else this.showAlert();
    },
    showAlert() {
      this.isAlertShow = true;
      setTimeout(() => {
        this.isAlertShow = false;
      }, 2000);
    },
    isAlert() {
      return this.isisAlertShow;
    },
    dateChanged(date) {
      this.date = date;
      // console.log("선택된 날짜 :" + this.date);
    },
    nameChanged(name) {
      this.name = name;
      // console.log("입력된 이름 :" + this.name);
    },
    AddRoom() {
      axios
        .post(
          "https://tido-diary.herokuapp.com/diaries",
          { title: this.name, date: this.date, mood: this.theme },
          { withCredentials: true },
        )
        .then((res) => {
          console.log("응답2 : ", res);
        })
        .catch((e) => {
          console.log("error : ", e);
        });
      // RoomService.CreateRoom(this.name, this.date, this.theme).then((result) => {
      //   console.log("name: " + this.name);
      //   console.log("date: " + this.date);
      //   console.log("theme: " + this.theme);
      //   console.log(result);
      // });
    },
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
