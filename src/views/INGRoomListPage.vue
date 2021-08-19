<template>
  <v-app>
    <Header :text="this.title"></Header>
    <div class="h-screen bg-bg">
      <ListView v-if="dataCheck()" :dummydata="dataList" />
      <NoRoom :from="this.from" v-else />
    </div>
  </v-app>
</template>

<script>
// 주석 풀어주세여~!
import Header from "../components/Headers/MainRoomListHeader.vue";
import ListView from "../components/RoomList/ListView.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import dummydata from "../data/CalendarEvent.json";
import MainService from "../api/Room/services/main.service";
import NoRoom from "../components/Rooms/NoRoom.vue";

export default {
  data() {
    return {
      title: "진행중인 기록들",
      from: "list",
      dummydata: dummydata,
      dataList: [],
    };
  },
  components: { Header, ListView, NoRoom },
  setup() {
    const store = useStore();
    const roomList = computed(() => store.state.roomStore.RoomList);
    store.commit("setRoomList", []);

    dummydata.forEach((element) => {
      console.log(element);
      store.commit("setRoomList", element);
    });

    // const getRoomList = computed(() => store.getters.roomList);

    return { roomList };
  },
  async created() {
    window.scrollTo(0, 0);
    const response = await MainService.GetInProgressList();

    response.data.forEach((element) => {
      this.dataList.push(element.DiaryRoom);
    });
  },
  methods: {
    dataCheck() {
      // if (this.roomList.length > 0) return true;
      if (this.dataList.length > 0) return true;
      return false;
    },
  },
};
</script>

<style></style>
