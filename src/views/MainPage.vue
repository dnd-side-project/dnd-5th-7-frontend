<template>
  <v-app>
    <Header></Header>
    <div class="p-3 bg-bg">
      <Calendar></Calendar>
      <CurrRooms :id="this.userData.id"></CurrRooms>
      <CurrMemories></CurrMemories>
    </div>
    <!-- <h1>{{ userData.id }}</h1> -->
    <!-- <MemoryText></MemoryText> -->
  </v-app>
</template>

<script>
// import MemoryText from "../components/Memory/MemoryText.vue";
// import MainService from "../api/Room/services/main.service";
import Calendar from "../components/Calendars/monthly.vue";
import Header from "../components/Headers/MainHeader.vue";
import CurrRooms from "../components/Rooms/CurrRooms.vue";
import CurrMemories from "../components/BookmarkRooms/CurrMemories.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

import axios from "axios";
import { BASE_URL } from "../config";
const API_URL = `${BASE_URL}` + "/members/";

export default {
  setup() {
    const store = useStore();
    store.dispatch("userStore/FETCH_USER");
    const userData = computed(() => {
      return store.getters[`userStore/getUser`];
    });

    const router = useRouter();
    const roomId = localStorage.getItem("roomId");
    console.log(">>>>>>>>>>>>>>>" + roomId);
    if (roomId) {
      axios.post(API_URL, { admin: "false", room_id: roomId }, { withCredentials: true }).then((res) => {
        console.log(res);
        localStorage.removeItem("roomId");
        router.push({ path: "room/" + roomId });
      });
      // 멤버 추가
    }
    return { userData };
  },
  async created() {
    // await MainService.GetInProgressList(this.userData.id).then((result) => {
    //   console.log("[MainService.GetInProgressList]", result);
    // });
  },
  components: {
    Header,
    // MemoryText,
    Calendar,
    CurrRooms,
    CurrMemories,
  },
};
</script>

<style></style>
