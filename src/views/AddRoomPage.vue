<template>
  <v-app>
    <Header></Header>
    <div class="p-3 h-screen">
      <SelectTheme></SelectTheme>
      <SelectMember></SelectMember>
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/AddRoomHeader.vue";
import SelectTheme from "../components/AddRooms/SelectTheme.vue";
import SelectMember from "../components/AddRooms/SelectMember.vue";

export default {
  components: {
    Header,
    SelectTheme,
    SelectMember,
  },
};
</script>

<style></style>
