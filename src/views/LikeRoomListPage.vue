<template>
  <v-app>
    <Header :text="this.title"></Header>
    <div class="h-screen bg-bg">
      <ListView v-if="dataCheck()" :CalendarList="dataList" />
      <NoBookmark :from="this.from" v-else />
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/MainRoomListHeader.vue";
import ListView from "../components/RoomList/ListView.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import dummydata from "../data/CalendarEvent.json";
import MainService from "../api/Room/services/main.service";
import NoBookmark from "../components/BookmarkRooms/NoBookmark.vue";

export default {
  props: [],
  data() {
    return {
      title: "즐겨찾는 기록들",
      from: "list",
      dummydata: dummydata,
      dataList: [],
    };
  },
  components: { Header, ListView, NoBookmark },
  setup() {
    const store = useStore();
    const roomList = computed(() => store.state.roomStore.RoomList);
    store.commit("setRoomList", []);

    // dummydata.forEach((element) => {
    //   // console.log(element);
    //   store.commit("setRoomList", element);
    // });

    // const getRoomList = computed(() => store.getters.roomList);
    return { roomList };
  },
  async created() {
    window.scrollTo(0, 0);
    const response = await MainService.GetBookmarkList(false);
    response.data.forEach((e) => {
      this.dataList.push(e.DiaryRoom);
      // console.log(">>ING>>>", e.DiaryRoom);
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
