<template>
  <div class="flex flex-row mt-5 justify-between items-baseline">
    <div class="flex flex-row items-baseline">
      <img :src="symbolIcon" class="mr-1" />
      <span class="text-lg font-bold text-black">진행중인 추억들이에요</span>
    </div>
    <span class="text-sm">더보기</span>
  </div>
  <div class="overflow-x-auto flex flex-row h-56 ml-1">
    <Room v-on:click="goto('Board')"></Room>
    <Room v-on:click="goto('Board')"></Room>
    <AddRoom></AddRoom>
  </div>
</template>

<script>
import symbolIcon from "../../assets/title_symbol_1.svg";
import Room from "./Room.vue";
import AddRoom from "./AddRoom.vue";

export default {
  name: "CurrRooms",
  setup() {
    return {
      symbolIcon,
    };
  },
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
