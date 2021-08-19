<template>
  <div>
    <div class="flex flex-row justify-between items-center p-5 h-56 header">
      <cancleIcon class="cursor-pointer" @click="goback()" />
      <div class="text-16 header-text">{{ this.title }}</div>
      <div class="flex w-56 justify-between">
        <likeIcon class="cursor-pointer" />
        <hamburgerIcon class="z-10 cursor-pointer" @click="onClickSlider" />
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import cancleIcon from "../../assets/icon_cancle.svg";
import likeIcon from "../../assets/like.svg";
import hamburgerIcon from "../../assets/hamburger.svg";
export default {
  props: ["title"],
  components: {
    cancleIcon,
    likeIcon,
    hamburgerIcon,
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    goback() {
      window.history.back();
    },
    goto(page) {
      this.$router.push(page);
    },
    onClickSlider() {
      this.isClicked = !this.isClicked;
      this.$emit("onClickSlider", this.isClicked);
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

.header-text {
}
</style>
