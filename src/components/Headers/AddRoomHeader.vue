<template>
  <div class="flex flex-row justify-between items-center p-3 h-56 header">
    <cancleIcon @click="goback()" />
    <div class="text-16 header-text">기록장 시작하기</div>
    <div class="text-16 header-text" @click="goto('AddRoom2')">다음</div>
  </div>
  <div class="divider"></div>
</template>

<script>
import cancleIcon from "../../assets/icon_cancle.svg";
export default {
  props: {},
  components: {
    cancleIcon,
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
