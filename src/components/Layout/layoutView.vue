<template>
  <div class="flex bg-bg h-screen">
    <div v-for="(data, index) in lst" v-bind:key="data.id" class="cursor-pointer">
      <layoutFrame :data="data" :index="index" :width="data.x" :height="data.y" :theme="this.mood"></layoutFrame>
    </div>
  </div>
</template>

<script>
import layoutFrame from "./layoutFrame.vue";
// import jsonData from "../../data/Picture.json";

import DiaryService from "../../api/Room/services/diary.service";

export default {
  props: ["roomId", "mood"],
  data() {
    // [일기 리스트 조회 api 호출] - get:contents/list/:contentIdx
    //  방 번호인 this.room_id 를 파라미터로 넣어주세요
    // 아래에 수정 사항 더 있습니다.
    return {
      lst: [],
      datalist: [],
      room_id: this.roomId,
      theme: this.mood,
      x: 0,
      y: 0,
      maxFH: 0,
      maxSH: 0,
      w: 0,
      h: 0,
      p: 0,
    };
  },
  components: {
    layoutFrame,
  },
  setup() {
    // const roomList = computed(() => store.state.DairyStore.RoomList);
    // const getRoomList = computed(() => store.getters.roomList);
    // return { roomList };
  },
  async created() {
    await DiaryService.GetDiaryList(this.room_id).then((result) => {
      console.log("[DiaryService.GetDiaryList]: ", result.data);
      result.data.forEach((element) => {
        this.datalist.push(element);
      });
    });

    this.w = this.theme == "hip" ? 154 : 152;
    this.h = this.theme == "hip" ? 186 : 208;
    this.p = this.theme == "hip" ? 12 : 16;

    // [일기 리스트 조회 api 호출]  jsonData가 아닌 받아온 데이터를 store에 저장한 뒤, 가져오도록 해주세요!
    for (var i = 0; i < this.datalist.length; i++) {
      let data = this.datalist[i];

      if (i % 2 == 0) this.x = 0;
      else this.x = this.w + this.p;

      if (i == 0) {
        this.lst.push({ id: data.id, data: data, x: 0, y: 0 });
        this.maxFH += this.w;
      } else if (i == 1) {
        if (this.theme == "simple") {
          this.lst.push({ id: data.id, data: data, x: 168, y: 0 });
        } else {
          this.lst.push({ id: data.id, data: data, x: 166, y: 0 });
        }
        this.maxSH += this.h;
      } else {
        if (i % 4 == 0) {
          this.y = this.maxFH + this.p;
          this.maxFH = this.maxFH + this.w + this.p;
        } else if (i % 4 == 1) {
          this.y = this.maxSH + this.p;
          this.maxSH = this.maxSH + this.h + this.p;
        } else if (i % 4 == 2) {
          this.y = this.maxFH + this.p;
          this.maxFH = this.maxFH + this.h + this.p;
        } else if (i % 4 == 3) {
          this.y = this.maxSH + this.p;
          this.maxSH = this.maxSH + this.w + this.p;
        }
        this.lst.push({ id: data.id, data: data, x: this.x, y: this.y });
      }
    }
  },
};
</script>

<style></style>
