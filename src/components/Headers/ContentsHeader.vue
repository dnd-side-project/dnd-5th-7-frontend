<template>
  <div class="flex flex-row justify-between items-center p-3 h-56 header">
    <cancleIcon class="cursor-pointer" @click="goback()" />
    <div class="text-16">{{ this.want }}</div>
    <div class="text-16" @click="sendEvent()">등록</div>
  </div>
  <div class="divider"></div>
</template>

<script>
import cancleIcon from "../../assets/icon_cancle.svg";
export default {
  props: ["want", "textData"],
  data() {
    return {};
  },
  components: {
    cancleIcon,
  },

  methods: {
    goback() {
      window.history.back();
    },
    goto(page) {
      if (this.themecheck()) this.$router.push(page);
      else this.alertShow();
    },
    sendEvent: function () {
      console.log("hi", this.textData);
    },
  },
};
</script>

<style>
.divider {
  height: 2px;
  background: #eaeaea;
  transform: matrix(1, 0, 0, -1, 0, 0);
}
</style>
