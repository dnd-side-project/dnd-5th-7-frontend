<template>
  <v-app>
    <Header @onClickSlider="onClickSlider"></Header>
    <teleport to="#end-of-body" :disabled="!this.onClickedHamburger">
      <Slider v-if="this.onClickedHamburger" @sliderClosed="onClickSlider"></Slider>
    </teleport>
    <FloatingBtn />
    <div class="h-screen">
      <NoRecord></NoRecord>
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/RoomHeader.vue";
import NoRecord from "../components/Rooms/NoRecord.vue";
import Slider from "../components/SlideBar/RoomSlider.vue";
import FloatingBtn from "../components/DetailRoom/FloatingBtn.vue";

export default {
  components: {
    Header,
    NoRecord,
    Slider,
    FloatingBtn,
  },
  data() {
    return {
      onClickedHamburger: "",
    };
  },
  methods: {
    onClickSlider(signal) {
      this.onClickedHamburger = signal;
    },
  },
};
</script>

<style></style>
