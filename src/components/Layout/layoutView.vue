<template>
  <div class="flex bg-bg h-screen">
    <div v-for="(data, index) in lst" v-bind:key="data.id" class="cursor-pointer">
      <layoutFrame
        v-if="data"
        :data="data"
        :index="index"
        :width="data.x"
        :height="data.y"
        :theme="data.theme"
      ></layoutFrame>
    </div>
  </div>
</template>

<script>
import layoutFrame from "./layoutFrame.vue";
// import jsonData from "../../data/Picture.json";

import DiaryService from "../../api/Room/services/diary.service";

export default {
  props: ["roomsInfo"],
  data() {
    // [일기 리스트 조회 api 호출] - get:contents/list/:contentIdx
    //  방 번호인 this.room_id 를 파라미터로 넣어주세요
    // 아래에 수정 사항 더 있습니다.
    return {
      lst: [],
      datalist: [],
      room_id: undefined,
      theme: undefined,
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
  watch: {
    roomsInfo: {
      deep: true,
      handler() {
        const { roomId, mood } = this.roomsInfo;
        this.theme = mood;
        console.log(this.theme);
        this.getDiaryList(roomId, mood);
      },
    },
  },
  methods: {
    async getDiaryList(roomId, theme) {
      if (roomId === undefined) return;
      const result = await DiaryService.GetDiaryList(roomId);
      console.log("[DiaryService.GetDiaryList]: ", result.data);
      result.data.forEach((e) => {
        this.datalist.push(e);
      });

      this.w = theme == "hip" ? 154 : 152;
      this.h = theme == "hip" ? 186 : 208;
      this.p = theme == "hip" ? 12 : 16;

      // [일기 리스트 조회 api 호출]  jsonData가 아닌 받아온 데이터를 store에 저장한 뒤, 가져오도록 해주세요!
      for (var i = 0; i < this.datalist.length; i++) {
        let data = this.datalist[i];

        if (i % 2 == 0) this.x = 0;
        else this.x = this.w + this.p;

        if (i == 0) {
          this.lst.push({ id: data.id, data: data, x: 0, y: 0, theme: theme });
          this.maxFH += this.w;
        } else if (i == 1) {
          if (theme == "simple") {
            this.lst.push({ id: data.id, data: data, x: 168, y: 0, theme: theme });
          } else {
            this.lst.push({ id: data.id, data: data, x: 166, y: 0, theme: theme });
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
          this.lst.push({ id: data.id, data: data, x: this.x, y: this.y, theme: theme });
        }
      }
      console.warn(this.lst);
    },
  },
};
</script>

<style></style>
