<template>
  <div class="flex flex-row mt-5 justify-between items-baseline">
    <div class="flex flex-row items-baseline">
      <symbolIcon class="mr-1" />
      <span class="text-lg font-bold text-black">즐거웠던 추억들을 모았어요</span>
    </div>
    <span class="text-sm">더보기</span>
  </div>
  <div class="flex flex-row h-48 ml-1 mb-5 mt-3">
    <swiper
      :slidesPerView="2"
      :freeMode="false"
      :spaceBetween="3"
      :scrollbar="{
        hide: true,
      }"
      class="mySwiper"
    >
      <swiper-slide><Memory /></swiper-slide>
      <swiper-slide><Memory /></swiper-slide>
      <swiper-slide><Memory /></swiper-slide>
      <swiper-slide><Memory /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Scrollbar } from "swiper/core";
import "swiper/swiper.scss";

import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import symbolIcon from "../../assets/title_symbol_2.svg";
import Memory from "./Room.vue";

SwiperCore.use([Scrollbar]);

export default {
  name: "MemoryRecommend",
  components: {
    Swiper,
    SwiperSlide,
    Memory,
    symbolIcon,
  },
  props: {},
};
</script>
