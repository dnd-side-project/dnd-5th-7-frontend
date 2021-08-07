<template>
  <v-app>
    <Header></Header>
    <div class="p-3">
      <Calendar></Calendar>
      <CurrRooms></CurrRooms>
      <CurrMemories></CurrMemories>
    </div>
    <!-- <MemoryText></MemoryText> -->
  </v-app>
</template>

<script>
// import MemoryText from "../components/Memory/MemoryText.vue";
import Calendar from "../components/Calendars/research.vue";
import Header from "../components/Headers/MainHeader.vue";
import CurrRooms from "../components/Rooms/CurrRooms.vue";
import CurrMemories from "../components/BookmarkRooms/CurrMemories.vue";

export default {
  components: {
    Header,
    // MemoryText,
    Calendar,
    CurrRooms,
    CurrMemories,
  },
};
</script>

<style></style>
