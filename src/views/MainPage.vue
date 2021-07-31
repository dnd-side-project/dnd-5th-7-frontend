<template>
  <v-app>
    <Header></Header>
    <div class="p-3">
      <Calendar></Calendar>
      <CurrRooms></CurrRooms>
      <MemoryRecommend></MemoryRecommend>
    </div>
    <!-- <MemoryText></MemoryText> -->
  </v-app>
</template>

<script>
import Calendar from "../components/Calendars/Compo.vue";
// import MemoryText from "../components/Memory/MemoryText.vue";
import Header from "../components/Headers/MainHeader.vue";
import CurrRooms from "../components/Rooms/CurrRooms.vue";
import MemoryRecommend from "../components/BookmarkRooms/CurrRooms.vue";

export default {
  components: {
    Header,
    Calendar,
    // MemoryText,
    CurrRooms,
    MemoryRecommend,
  },
};
</script>

<style></style>
