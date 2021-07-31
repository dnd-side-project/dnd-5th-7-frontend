<template>
  <div class="flex flex-row mt-5 justify-between items-baseline">
    <div class="text-lg font-bold text-black">진행중</div>
    <span class="text-sm">더보기</span>
  </div>
  <div class="overflow-x-auto flex flex-row h-56 ml-1">
    <Room v-on:click="goto('Board')"></Room>
    <Room v-on:click="goto('Board')"></Room>
    <AddRoom></AddRoom>
  </div>
</template>

<script>
import Room from "./Room.vue";
import AddRoom from "./AddRoom.vue";

export default {
  name: "CurrRooms",
  components: {
    Room,
    AddRoom,
  },
  props: {},
  methods: {
    goto(page) {
      this.$router.push(page);
    },
  },
};
</script>
