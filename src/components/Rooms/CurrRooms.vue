<template>
  <div class="flex flex-row mt-5 justify-between items-center content-center">
    <div class="flex flex-row items-center">
      <SymbolIcon class="mr-1" />
      <span class="text-18 font-semibold text-black">티도와 함께 정리 중!</span>
    </div>
    <span class="text-sm cursor-pointer" style="color: #d2d2d2" @click="goto('INGRoomList')">더보기</span>
  </div>

  <div v-if="getData()" class="flex flex-row justify-center items-center h-60">
    <swiper
      :slidesPerView="2"
      :freeMode="true"
      :autoHeight="true"
      :spaceBetween="10"
      :scrollbar="{
        hide: true,
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="room in datalst" :key="room.Rid">
        <Room
          :data="{
            name: room.Rname,
            date: room.Rdate,
            theme: room.Rtheme,
          }"
          v-on:click="goWithParam('Room', room.Rid)"
          class="cursor-pointer"
        />
      </swiper-slide>
    </swiper>
  </div>
  <div v-else><NoRoom /></div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Scrollbar } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
SwiperCore.use([Scrollbar]);

import SymbolIcon from "../../assets/title_symbol_1.svg";
import Room from "./Room.vue";
import NoRoom from "./NoRoom.vue";
// import dummydata from "../../data/rooms.json";
import MainService from "../../api/Room/services/main.service";

export default {
  name: "CurrRooms",
  props: ["id"],
  data() {
    return {
      uid: this.id,
      datalst: [],
      // rooms: [dummydata[0], dummydata[1], dummydata[2], dummydata[3], dummydata[4], dummydata[5]],
    };
  },
  async created() {
    console.log(this.id);
    const response = await MainService.GetInProgress();
    response.data.forEach((element) => {
      this.datalst.push({
        Rid: element.DiaryRoom.id,
        Rname: element.DiaryRoom.title,
        Rdate: element.DiaryRoom.date,
        // 대현님이 말슴해주시면 수정
        Rtheme: "simple",
      });
      console.log(element.DiaryRoom);
    });
  },
  setup() {
    const store = useStore();
    const roomList = computed(() => store.state.roomStore.RoomList);
    // [api 연결] ; 로컬에서 에러 나서 주석 처리 했습니다.
    // const uid = computed(() => store.state.userStore.id);

    // dummydata.forEach((element) => {
    //   store.commit("addRoomList", element);
    // });

    // const getRoomList = computed(() => store.getters.roomList);
    return { roomList };
  },
  components: {
    Swiper,
    SwiperSlide,
    Room,
    NoRoom,
    SymbolIcon,
  },
  methods: {
    goto(page) {
      this.$router.push(page);
    },
    goWithParam(page, param) {
      this.$router.push({ name: page, params: { id: param } });
    },
    getData() {
      // if (this.roomList.length > 0) return true;
      if (this.datalst.length > 0) return true;
      return false;
    },
  },
};
</script>

<style>
:v-deep .swiper-container-horizontal >>> .swiper-scrollbar {
  top: 103%;
}
</style>
