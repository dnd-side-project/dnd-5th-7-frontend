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
    <div v-else class="h-full"><LayoutView class="h-full" :roomId="this.roomId" :mood="this.rooms.mood" /></div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/RoomHeader.vue";
import NoRecord from "../components/Rooms/NoRecord.vue";
import Slider from "../components/SlideBar/RoomSlider.vue";
import LayoutView from "../components/Layout/layoutView.vue";
import FloatingBtn from "../components/DetailRoom/FloatingBtn.vue";

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
      //  페이지 이동하면서 props로 받아온 id를 roomId에 넣어두었습니다.
      // response의 mood, date, title, user_id를  this.rooms에 저장해주세욥
      roomId: this.id,
      rooms: { roomId: this.id, title: "일기장 제목", date: "", user_id: 0, mood: "hip" },
      onClickedHamburger: "",
    };
  },
  methods: {
    onClickSlider(signal) {
      this.onClickedHamburger = signal;
    },
    created() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
