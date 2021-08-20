<template>
  <div v-for="data in list" :key="data.id" class="w-360 flex justify-center cursor-pointer">
    <div class="w-320 h-84 mx-20 my-10 flex flex-row" @click="goRoom(data.id)">
      <div class="w-76 h-84 mr-1.2">
        <img v-if="data.mood == 'simple'" src="../../assets/book_image_modern.png" class="w-76 h-84 object-fit" />
        <img v-else src="../../assets/book_image_hip.png" />
      </div>
      <div class="ListWrapper flex flex-col">
        <div class="font-bold text-14 mt-0.3">{{ data.title }}</div>
        <div class="font-light text-12 text-grayscale">{{ data.date }}</div>
        <div class="flex flex-row items-center mt-1.2">
          <!-- 방 소속 인원 -->
          <div class="w-56 mr-1.4"><profiles :len="data.Members.length" /></div>
          <div class="font-light text-12">{{ data.Members.length }}명</div>
          <!-- <div class="font-light text-12">{{ data.people.length }}명</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profiles from "./Profiles.vue";
export default {
  name: "ListView",
  props: ["dates", "CalendarList"],
  data() {
    return {
      list: this.CalendarList,
      date: this.CalendarList.date,
      members: this.CalendarList.Members,
    };
  },
  components: { profiles },
  methods: {
    goto(page) {
      this.$router.push(page);
    },
    getData() {
      if (this.CalendarList.length > 0) return true;
      return false;
    },
    goRoom(rid) {
      this.$router.push({ path: "/room/" + rid });
    },
  },
  created() {
    console.log(this.list);
  },
};
</script>

<style></style>
