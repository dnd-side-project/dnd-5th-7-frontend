<template>
  <div>
    <div class="flex flex-row justify-between items-center p-3 h-56 header">
      <div><backIcon @click="goback()" /></div>

      <div class="text-16 header-text">기록장 시작하기</div>
      <div></div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import backIcon from "../../assets/icon_back.svg";
export default {
  data() {
    return {
      // headercheck: "1",
    };
  },
  components: {
    backIcon,
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
