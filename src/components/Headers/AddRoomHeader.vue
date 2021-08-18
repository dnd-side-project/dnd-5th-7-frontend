<template>
  <div>
    <div class="flex flex-row justify-between items-center p-3 h-56 header">
      <backIcon class="cursor-pointer" @click="goback()" />
      <div class="text-16 header-text">기록장 시작하기</div>
      <div></div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import backIcon from "../../assets/icon_back.svg";
export default {
  props: ["theme"],
  components: {
    backIcon,
  },
  methods: {
    goback() {
      window.history.back();
    },
    goto(page) {
      if (this.themecheck()) this.$router.push(page);
      else this.alertShow();
    },
    themecheck() {
      if (this.theme == "" || this.theme == undefined || this.theme == null) return false;
      return true;
    },
    alertShow() {
      this.$emit("showAlert");
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
