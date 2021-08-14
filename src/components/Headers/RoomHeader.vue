<template>
  <div>
    <div class="flex flex-row justify-between items-center p-5 h-56 header">
      <cancleIcon @click="goback()" />
      <div class="text-16 header-text">기록장 이름</div>
      <div class="flex w-16 justify-between">
        <likeIcon />
        <hamburgerIcon />
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
  props: {},
  components: {
    cancleIcon,
    likeIcon,
    hamburgerIcon,
  },
  methods: {
    goback() {
      window.history.back();
    },
    goto(page) {
      this.$router.push(page);
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
