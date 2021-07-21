<template>
  <div class="mt-5 text-lg font-bold text-black">현재 진행중인 방</div>
  <div class="overflow-x-auto flex flex-row">
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
