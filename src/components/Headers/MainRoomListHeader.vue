<template>
  <div class="flex flex-row justify-between items-center p-3 h-56 header">
    <div class="cursor-pointer"><backIcon @click="goback()" /></div>

    <div class="text-16 header-text">{{ this.text }}</div>
    <div></div>
  </div>
  <div class="divider"></div>
</template>

<script>
import backIcon from "../../assets/icon_back.svg";
export default {
  props: ["text"],
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
</style>
