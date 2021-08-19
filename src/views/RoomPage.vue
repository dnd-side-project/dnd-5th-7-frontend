<template>
  <v-app>
    <Header @onClickSlider="onClickSlider" :title="this.rooms.title"></Header>
    <teleport to="#end-of-body" :disabled="!this.onClickedHamburger">
      <Slider
        v-if="this.onClickedHamburger"
        @sliderClosed="onClickSlider"
        :userId="this.rooms.user_id"
        :roomId="this.rooms.roomId"
      ></Slider>
    </teleport>
    <FloatingBtn />
    <div v-if="this.rooms == null" class="h-full bg-bg">
      <NoRecord></NoRecord>
    </div>
    <div v-else class="h-full"><LayoutView class="h-full" :roomId="this.rooms.roomId" :mood="this.rooms.mood" /></div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/RoomHeader.vue";
import NoRecord from "../components/Rooms/NoRecord.vue";
import Slider from "../components/SlideBar/RoomSlider.vue";
import LayoutView from "../components/Layout/layoutView.vue";
import FloatingBtn from "../components/DetailRoom/FloatingBtn.vue";

import RoomService from "../api/Room/services/room.service";

export default {
  props: ["id"],
  components: {
    Header,
    NoRecord,
    Slider,
    LayoutView,
    FloatingBtn,
  },
  data() {
    return {
      // [방 조회 api 호출] - get:diaries/:diaryIdx
      rooms: { roomId: this.id, title: "일기장 제목", date: "", user_id: 0, mood: "hip" },
      onClickedHamburger: "",
    };
  },
  methods: {
    onClickSlider(signal) {
      this.onClickedHamburger = signal;
    },
  },
  async created() {
    window.scrollTo(0, 0);
    await RoomService.GetRoomList(this.id).then((res) => {
      this.rooms = {
        roomId: res.data.id,
        title: res.data.title,
        date: res.data.date,
        user_id: res.data.user_id,
        mood: res.data.mood,
      };
    });
    console.log("rooms:", this.rooms);
  },
};
</script>

<style></style>
