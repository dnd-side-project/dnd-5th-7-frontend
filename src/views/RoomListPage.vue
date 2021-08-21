<template>
  <v-app>
    <Header
      :datee="{
        year: this.year,
        month: this.month,
        day: this.day,
      }"
    ></Header>
    <div class="h-screen bg-bg pt-18"><ListView :CalendarList="CalendarList" /></div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/RoomListHeader.vue";
import ListView from "../components/RoomList/ListView.vue";
import { computed } from "vue";
import { useStore } from "vuex";
// import dummydata from "../data/CalendarEvent.json";
import MainService from "../api/Room/services/main.service";

export default {
  props: ["dates"],
  data() {
    return {
      year: "",
      month: "",
      day: "",
      CalendarList: [],
    };
  },
  components: { Header, ListView },
  created() {
    const temp = this.$route.params.dates.split("-");
    this.year = temp[0];
    this.month = this.dateLength(temp[1]);
    this.day = this.dateLength(temp[2]);
    this.getDateDetailRes();
  },
  setup() {
    const store = useStore();
    const roomList = computed(() => store.state.roomStore.RoomList);
    // store.commit("setRoomList", []);

    // dummydata.forEach((element) => {
    //   // console.log(element);
    //   store.commit("setRoomList", element);
    // });

    // const getRoomList = computed(() => store.getters.roomList);
    return { roomList };
  },
  methods: {
    dateLength(day) {
      if (("" + day).length < 2) return "0" + day;
      return day;
    },
    async getDateDetailRes() {
      const param = this.year + "-" + this.month + "-" + this.day;
      const response = await MainService.GetCalendarDetail(param);
      response.data.forEach((e) => {
        this.CalendarList.push(e);
        console.log(">>RoomList>>", e);
      });
      // console.log(response.data);
    },
  },
};
</script>

<style></style>
