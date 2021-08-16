<template>
  <v-app>
    <Header @onClickSlider="onClickSlider"></Header>
    <teleport to="#end-of-body" :disabled="!this.onClickedHamburger">
      <Slider v-if="this.onClickedHamburger" @sliderClosed="onClickSlider"></Slider>
    </teleport>
    <FloatingBtn />
    <div v-if="this.rooms == null" class="h-full">
      <NoRecord></NoRecord>
    </div>
    <div v-else class="h-full ml-1"><LayoutView /></div>
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
      rooms: { mood: "simple" },
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
