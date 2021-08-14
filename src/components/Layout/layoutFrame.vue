<template>
  <div class="p-16 absolute">
    <div v-if="this.idx == 0" class="relative w-152 h-152 bg-white shadow-layout" :style="translateStyle">
      <div v-if="this.target.text == null"><mp1 :index="Rindex" :url="this.target.imgUrl" /></div>
      <div v-else><mt1 :index="Rindex" :text="this.target.text" /></div>
    </div>
    <div v-if="this.idx == 1" class="relative w-152 h-208 bg-gray100 shadow-layout" :style="translateStyle">
      <div v-if="this.target.text == null"><mp2 :index="Rindex" :url="this.target.imgUrl" /></div>
      <div v-else><mt2 :index="Rindex" :text="this.target.text" /></div>
    </div>
    <div v-if="this.idx == 2" class="relative w-152 h-208 bg-gray200 shadow-layout" :style="translateStyle">
      <div v-if="this.target.text == null"><mp2 :index="Rindex" :url="this.target.imgUrl" /></div>
      <div v-else><mt2 :index="Rindex" :text="this.target.text" /></div>
    </div>
    <div v-if="this.idx == 3" class="relative w-152 h-152 bg-gray300 shadow-layout" :style="translateStyle">
      <div v-if="this.target.text == null"><mp1 :index="Rindex" :url="this.target.imgUrl" /></div>
      <div v-else><mt1 :index="Rindex" :text="this.target.text" /></div>
    </div>
  </div>
</template>

<script>
import mp1 from "./Simple/photo/item1.vue";
import mp2 from "./Simple/photo/item2.vue";
import mt1 from "./Simple/text/item1.vue";
import mt2 from "./Simple/text/item2.vue";

export default {
  props: ["data", "index", "width", "height"],
  components: { mp1, mp2, mt1, mt2 },
  data() {
    return {
      target: this.data.data,
      Rindex: this.getIndex(this.index),
      idx: this.index % 4,
      x: this.width,
      y: this.height,
    };
  },
  created() {
    console.log(this.target);
    console.log("[x]:" + this.x + "/[y]:" + this.y);
    console.log("[index]" + this.index);
  },
  computed: {
    translateStyle() {
      return { transform: "translate(" + this.x + "px," + this.y + "px)" };
    },
  },
  methods: {
    getIndex(index) {
      if (index <= 8) index = "0" + (index + 1);
      else index += 1;
      return index;
    },
  },
};
</script>

<style>
#layout1 {
  transform: translate(0px, 392px);
}
#layout2 {
  transform: translate(168px, 0px);
}
#layout3 {
  transform: translate(0px, 168px);
}
#layout4 {
  transform: translate(168px, 224px);
}
</style>
