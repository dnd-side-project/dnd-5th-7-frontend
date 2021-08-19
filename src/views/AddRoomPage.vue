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
// import axios from "axios";
import RoomService from "../api/Room/services/room.service";
import Header from "../components/Headers/AddRoomHeader.vue";
import SelectTheme from "../components/AddRooms/SelectTheme.vue";
// import SelectMember from "../components/AddRooms/SelectMember.vue";
import EnterInfo from "../components/AddRooms/EnterInfo.vue";
import alert from "../components/Alert/NotiLayer.vue";
import OKBtn from "../components/Common/OKButton.vue";

export default {
  data() {
    return {
      // [방 생성 api 호출] - post:diaries
      //  방 이름 = name, 방 날짜 = date, 방 테마 = theme
      // response 로 방 번호가 올 텐데(room_id) this.roomId 에 저장해주세요~!
      theme: "",
      alertText: "테마를 선택해주세요!",
      isAlertShow: false,
      name: "",
      date: "",
      roomId: "",
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
    goWithParam(page, param) {
      this.$router.push({ name: page, params: { id: param } });
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
    async AddRoom() {
      const response = await RoomService.CreateRoom(this.name, this.date, this.theme);

      this.room_id = response.data.room_id;
      this.goWithParam("Room", this.room_id);
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
