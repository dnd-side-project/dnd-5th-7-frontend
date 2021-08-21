<template>
  <div class="flex flex-row mt-5 justify-between items-center content-center">
    <div class="flex flex-row items-center">
      <symbolIcon class="mr-1" />
      <span class="text-18 font-semibold text-black">다시 보고 싶은 기록장 주섬주섬..</span>
    </div>
    <span class="text-sm cursor-pointer" style="color: #d2d2d2" @click="goto('LikeRoomList')">더보기</span>
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
      <swiper-slide v-for="room in memories" :key="room.Rid">
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
  <div v-else><NoBookmark /></div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Scrollbar } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import symbolIcon from "../../assets/title_symbol_2.svg";
import Room from "./Room.vue";
import NoBookmark from "./NoBookmark.vue";
SwiperCore.use([Scrollbar]);
import MainService from "../../api/Room/services/main.service";

export default {
  name: "CurrMemories",
  data() {
    return {
      memories: [],
    };
  },
  async created() {
    const response = await MainService.GetBookmark();
    response.data.forEach((element) => {
      this.memories.push({
        Rid: element.DiaryRoom.id,
        Rname: element.DiaryRoom.title,
        Rdate: element.DiaryRoom.date,
        // 대현님이 말슴해주시면 수정
        Rtheme: element.DiaryRoom.mood,
      });
      // console.log(element.DiaryRoom);
    });
  },
  components: {
    Swiper,
    SwiperSlide,
    Room,
    NoBookmark,
    symbolIcon,
  },
  props: {},
  methods: {
    goto(page) {
      this.$router.push(page);
    },
    getData() {
      if (this.memories.length > 0) return true;
      return false;
    },
    goWithParam(page, param) {
      this.$router.push({ name: page, params: { id: param } });
    },
  },
};
</script>

<style>
:v-deep .swiper-container-horizontal >>> .swiper-scrollbar {
  top: 103%;
}
</style>
