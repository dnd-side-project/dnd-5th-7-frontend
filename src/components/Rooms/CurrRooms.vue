<template>
  <div class="flex flex-row mt-5 justify-between items-center content-center">
    <div class="flex flex-row items-center">
      <SymbolIcon class="mr-1" />
      <span class="text-lg font-bold text-black">진행중인 기록장들이에요</span>
    </div>
    <span class="text-sm" style="color: #d2d2d2">더보기</span>
  </div>

  <div v-if="getData()" class="flex flex-row justify-center items-center h-60">
    <swiper
      :slidesPerView="2"
      :freeMode="true"
      :spaceBetween="10"
      :scrollbar="{
        hide: true,
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="room in roomList" :key="room.Rid">
        <Room
          :data="{
            name: room.Rname,
            date: room.Rdate,
            theme: room.Rtheme,
          }"
          v-on:click="goto('Board')"
        />
      </swiper-slide>
      <!-- <swiper-slide><Room v-on:click="goto('Board')" /></swiper-slide>
      <swiper-slide><Room v-on:click="goto('Board')" /></swiper-slide> -->
      <swiper-slide><AddRoom /></swiper-slide>
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
import AddRoom from "./AddRoom.vue";
import dummydata from "../../data/rooms.json";

export default {
  name: "CurrRooms",
  data() {
    return {
      // rooms: [dummydata[0], dummydata[1], dummydata[2], dummydata[3], dummydata[4], dummydata[5]],
    };
  },
  setup() {
    const store = useStore();
    const roomList = computed(() => store.state.roomStore.RoomList);
    store.commit("setRoomList", []);

    dummydata.forEach((element) => {
      store.commit("addRoomList", element);
    });

    // const getRoomList = computed(() => store.getters.roomList);
    return { roomList };
  },
  components: {
    Swiper,
    SwiperSlide,
    Room,
    NoRoom,
    AddRoom,
    SymbolIcon,
  },
  props: {},
  methods: {
    goto(page) {
      this.$router.push(page);
    },
    getData() {
      if (this.roomList.length > 0) return true;
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
