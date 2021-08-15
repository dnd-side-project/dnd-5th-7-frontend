<template>
  <v-app>
    <Header @onClickSlider="onClickSlider"></Header>
    <teleport to="#end-of-body" :disabled="!this.onClickedHamburger">
      <Slider v-if="this.onClickedHamburger" @onClickSlider="onClickSlider"></Slider>
    </teleport>
    <div class="h-screen">
      <NoRecord></NoRecord>
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/RoomHeader.vue";
import NoRecord from "../components/Rooms/NoRecord.vue";
import Slider from "../components/SlideBar/RoomSlider.vue";

export default {
  components: {
    Header,
    NoRecord,
    Slider,
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
