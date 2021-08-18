<template>
  <v-app>
    <Header :text="this.title"></Header>
    <div class="h-screen bg-bg"><ListView :dummydata="roomList" /></div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/MainRoomListHeader.vue";
import ListView from "../components/RoomList/ListView.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import dummydata from "../data/CalendarEvent.json";

export default {
  data() {
    return {
      title: "진행중인 기록들",
      dummydata: dummydata,
    };
  },
  components: { Header, ListView },
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
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style></style>
