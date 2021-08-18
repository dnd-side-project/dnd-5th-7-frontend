<template>
  <v-app>
    <Header></Header>
    <div class="p-3 bg-bg">
      <Calendar></Calendar>
      <CurrRooms></CurrRooms>
      <CurrMemories></CurrMemories>
    </div>
    <h1>{{ userData.id }}</h1>
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
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    store.dispatch("userStore/FETCH_USER");
    const userData = computed(() => {
      return store.getters[`userStore/getUser`];
    });

    return { userData };
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
