<template>
  <div class="flex bg-bg h-screen">
    <div v-for="(data, index) in lst" v-bind:key="data.id">
      <layoutFrame :data="data" :index="index" :width="data.x" :height="data.y"></layoutFrame>
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
      x: 0,
      y: 0,
      maxFH: 0,
      maxSH: 0,
    };
  },
  components: {
    layoutFrame,
  },
  created() {
    for (var i = 0; i < jsonData.length; i++) {
      let data = jsonData[i];

      if (i % 2 == 0) this.x = 0;
      else this.x = 168;

      if (i == 0) {
        this.lst.push({ id: data.id, data: data, x: 0, y: 0 });
        this.maxFH += 152;
      } else if (i == 1) {
        this.lst.push({ id: data.id, data: data, x: 168, y: 0 });
        this.maxSH += 208;
      } else {
        if (i % 4 == 0) {
          this.y = this.maxFH + 16;
          this.maxFH = this.maxFH + 152 + 16;
        } else if (i % 4 == 1) {
          this.y = this.maxSH + 16;
          this.maxSH = this.maxSH + 208 + 16;
        } else if (i % 4 == 2) {
          this.y = this.maxFH + 16;
          this.maxFH = this.maxFH + 208 + 16;
        } else if (i % 4 == 3) {
          this.y = this.maxSH + 16;
          this.maxSH = this.maxSH + 152 + 16;
        }
        this.lst.push({ id: data.id, data: data, x: this.x, y: this.y });
      }
    }
  },
};
</script>

<style></style>
