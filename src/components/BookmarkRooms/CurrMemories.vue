<template>
  <div class="flex flex-row mt-5 justify-between items-center content-center">
    <div class="flex flex-row items-center">
      <symbolIcon class="mr-1" />
      <span class="text-lg font-bold text-black">즐거웠던 기록장들을 모았어요</span>
    </div>
    <span class="text-sm cursor-pointer" style="color: #d2d2d2" @click="goto('LikeRoomList')">더보기</span>
  </div>
  <div v-if="getData()" class="flex flex-row h-56 mb-5 mt-3">
    <swiper
      :slidesPerView="2"
      :freeMode="false"
      :spaceBetween="5"
      :scrollbar="{
        hide: true,
      }"
      class="mySwiper"
    >
      <swiper-slide><Room /></swiper-slide>
      <swiper-slide><Room /></swiper-slide>
      <swiper-slide><Room /></swiper-slide>
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

export default {
  name: "CurrMemories",
  data() {
    return {
      memories: [],
    };
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
  },
};
</script>
