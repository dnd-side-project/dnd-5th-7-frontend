<template>
  <div>
    <div class="flex flex-row justify-between items-center p-3 h-56 header">
      <cancleIcon class="cursor-pointer" @click="goback()" />
      <div class="text-16 header-text">멤버 내보내기</div>
      <div class="text-16">삭제</div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import cancleIcon from "../../assets/icon_cancle.svg";
export default {
  props: ["path"],
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
