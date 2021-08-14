<template>
  <v-app>
    <Header></Header>
    <div class="h-screen">
      <NoRecord></NoRecord>
      <SliderBar></SliderBar>
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/RoomHeader.vue";
import NoRecord from "../components/Rooms/NoRecord.vue";

export default {
  components: {
    Header,
    NoRecord,
  },
  data() {
    return {
      isClicked: false,
    };
  },
};
</script>

<style></style>
