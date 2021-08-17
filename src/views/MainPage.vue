<template>
  <v-app>
    <Header></Header>
    <div class="p-3 bg-bg">
      <Calendar></Calendar>
      <CurrRooms></CurrRooms>
      <CurrMemories></CurrMemories>
    </div>
    <!-- <MemoryText></MemoryText> -->
  </v-app>
</template>

<script>
// import MemoryText from "../components/Memory/MemoryText.vue";
import Calendar from "../components/Calendars/monthly.vue";
import Header from "../components/Headers/MainHeader.vue";
import CurrRooms from "../components/Rooms/CurrRooms.vue";
import CurrMemories from "../components/BookmarkRooms/CurrMemories.vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const data = store.dispatch("FETCH_USER");
    console.log("dddd", data);
    return {};
  },
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
