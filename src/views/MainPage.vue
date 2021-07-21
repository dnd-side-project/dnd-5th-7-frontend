<template>
  <v-app>
    <Header></Header>
    <MemoryText></MemoryText>
    <CurrRooms></CurrRooms>
    <MemoryRecommend></MemoryRecommend>
  </v-app>
</template>

<script>
import MemoryText from "../components/Memory/MemoryText.vue";
import Header from "../components/Headers/MainHeader.vue";
import CurrRooms from "../components/Rooms/CurrRooms.vue";
import MemoryRecommend from "../components/Memory/MemoryRecommend.vue";

export default {
  components: {
    Header,
    MemoryText,
    CurrRooms,
    MemoryRecommend,
  },
};
</script>

<style></style>
