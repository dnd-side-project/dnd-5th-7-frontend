<template>
  <div class="flex bg-bg h-screen">
    <div v-for="(data, index) in lst" v-bind:key="data.id" class="cursor-pointer">
      <layoutFrame :data="data" :index="index" :width="data.x" :height="data.y" :theme="this.theme"></layoutFrame>
    </div>
  </div>
</template>

<script>
import layoutFrame from "./layoutFrame.vue";
import jsonData from "../../data/Picture.json";

export default {
  data() {
    return {
      lst: [],
      theme: "hip",
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
  created() {
    this.w = this.theme == "hip" ? 154 : 152;
    this.h = this.theme == "hip" ? 186 : 208;
    this.p = this.theme == "hip" ? 12 : 16;

    console.log(this.w);
    console.log(this.h);
    console.log(this.p);
    for (var i = 0; i < jsonData.length; i++) {
      let data = jsonData[i];

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
