<template>
  <v-app>
    <Header></Header>
    <div class="h-screen">
      <div class="flex justify-center h-300 bg-gray100">
        <BookView
          :data="{
            name: this.name,
            date: this.date,
            theme: this.theme,
          }"
        ></BookView>
      </div>
      <Inputs />
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/AddRoomHeader.vue";
import BookView from "../components/AddRooms/BookView.vue";
import Inputs from "../components/AddRooms/Inputs.vue";

export default {
  data() {
    return {
      name: "기록장의 이름을 적어주세요",
      date: "2021/3/4",
      theme: "hip",
    };
  },
  components: {
    Header,
    BookView,
    Inputs,
  },
};
</script>

<style></style>
