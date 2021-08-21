<template>
  <div v-if="this.theme == 'simple'" class="p-16 absolute" @click="goWithParam('contentView', this.contentId)">
    <div v-if="this.idx == 0" class="relative w-152 h-152 bg-white shadow-layout" :style="translateStyle">
      <div v-if="this.target.text == null" @click="goWithParam('contentView', this.contentId)">
        <mp1 :index="Rindex" :url="this.target.imgUrl" />
      </div>
      <div v-else>
        <mt1 :index="Rindex" :text="this.target.text" />
      </div>
    </div>
    <div
      v-if="this.idx == 1"
      class="relative w-152 h-208 bg-gray100 shadow-layout"
      :style="translateStyle"
      @click="goWithParam('contentView', this.contentId)"
    >
      <div v-if="this.target.text == null" @click="goWithParam('contentView', this.contentId)">
        <mp2 :index="Rindex" :url="this.target.imgUrl" />
      </div>
      <div>
        <mt2 :index="Rindex" :text="this.target.text" />
      </div>
    </div>
    <div
      v-if="this.idx == 2"
      class="relative w-152 h-208 bg-gray200 shadow-layout"
      :style="translateStyle"
      @click="goWithParam('contentView', this.contentId)"
    >
      <div v-if="this.target.text == null" @click="goWithParam('contentView', this.contentId)">
        <mp2 :index="Rindex" :url="this.target.imgUrl" />
      </div>
      <div v-else>
        <mt2 :index="Rindex" :text="this.target.text" />
      </div>
    </div>
    <div
      v-if="this.idx == 3"
      class="relative w-152 h-152 bg-gray300 shadow-layout"
      :style="translateStyle"
      @click="goWithParam('contentView', this.contentId)"
    >
      <div v-if="this.target.text == null" @click="goWithParam('contentView', this.contentId)">
        <mp1 :index="Rindex" :url="this.target.imgUrl" />
      </div>
      <div v-else>
        <mt1 :index="Rindex" :text="this.target.text" />
      </div>
    </div>
  </div>

  <!-- 테마가 hip일 경우 -->
  <div v-else class="p-20 absolute">
    <div
      v-if="this.idx == 0"
      class="relative w-154 h-154"
      :style="translateStyle"
      @click="goWithParam('contentView', this.contentId)"
    >
      <div v-if="this.target.text == null"><hp1 :index="Rindex" :url="this.target.imgUrl" /></div>
      <div v-else><ht1 :index="Rindex" :text="this.target.text" /></div>
    </div>
    <div
      v-if="this.idx == 1"
      class="relative w-154 h-186"
      :style="translateStyle"
      @click="goWithParam('contentView', this.contentId)"
    >
      <div v-if="this.target.text == null"><hp2 :index="Rindex" :url="this.target.imgUrl" /></div>
      <div v-else><ht2 :index="Rindex" :text="this.target.text" /></div>
    </div>
    <div
      v-if="this.idx == 2"
      class="relative w-154 h-186"
      :style="translateStyle"
      @click="goWithParam('contentView', this.contentId)"
    >
      <div v-if="this.target.text == null"><hp3 :index="Rindex" :url="this.target.imgUrl" /></div>
      <div v-else><ht3 :index="Rindex" :text="this.target.text" /></div>
    </div>
    <div
      v-if="this.idx == 3"
      class="relative w-154 h-154"
      :style="translateStyle"
      @click="goWithParam('contentView', this.contentId)"
    >
      <div v-if="this.target.text == null"><hp4 :index="Rindex" :url="this.target.imgUrl" /></div>
      <div v-else><ht4 :index="Rindex" :text="this.target.text" /></div>
    </div>
  </div>
</template>

<script>
import mp1 from "./Simple/photo/item1.vue";
import mp2 from "./Simple/photo/item2.vue";
import mt1 from "./Simple/text/item1.vue";
import mt2 from "./Simple/text/item2.vue";

import hp1 from "./Hip/photo/item1.vue";
import hp2 from "./Hip/photo/item2.vue";
import hp3 from "./Hip/photo/item3.vue";
import hp4 from "./Hip/photo/item4.vue";
import ht1 from "./Hip/text/item1.vue";
import ht2 from "./Hip/text/item2.vue";
import ht3 from "./Hip/text/item3.vue";
import ht4 from "./Hip/text/item4.vue";

export default {
  props: ["data", "index", "width", "height", "theme"],
  components: { mp1, mp2, mt1, mt2, hp1, hp2, hp3, hp4, ht1, ht2, ht3, ht4 },
  data() {
    return {
      mood: this.theme,
      target: this.data.data,
      contentId: this.data.id,
      Rindex: this.getIndex(this.index),
      idx: this.index % 4,
      x: this.width,
      y: this.height,
    };
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
    goWithParam(page, id) {
      this.$router.push({ name: page, params: { id: id } });
    },
  },
};
</script>

<style>
/* #layout1 {
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
} */
</style>
