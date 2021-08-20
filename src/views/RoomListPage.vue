<template>
  <v-app>
    <Header
      :datee="{
        year: this.year,
        month: this.month,
        day: this.day,
      }"
    ></Header>
    <div class="h-screen bg-bg pt-18"><ListView :dummydata="roomList" /></div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/RoomListHeader.vue";
import ListView from "../components/RoomList/ListView.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import dummydata from "../data/CalendarEvent.json";

export default {
  props: ["dates"],
  data() {
    return {
      dummydata: dummydata,
      year: "",
      month: "",
      day: "",
    };
  },
  components: { Header, ListView },
  created() {
    const temp = this.$route.params.dates.split("-");
    this.year = temp[0];
    this.month = temp[1];
    this.day = temp[2];
  },
  setup() {
    const store = useStore();
    const roomList = computed(() => store.state.roomStore.RoomList);
    store.commit("setRoomList", []);

    dummydata.forEach((element) => {
      // console.log(element);
      store.commit("setRoomList", element);
    });

    // const getRoomList = computed(() => store.getters.roomList);
    return { roomList };
  },
};
</script>

<style></style>
