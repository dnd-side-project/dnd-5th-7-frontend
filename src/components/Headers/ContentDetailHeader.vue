<template>
  <div>
    <div class="flex flex-row justify-between items-center p-3 h-56 header">
      <cancleIcon class="cursor-pointer" @click="goback()" />
      <div class="text-16 header-text">{{ this.text }}</div>
      <div></div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import cancleIcon from "../../assets/icon_cancle.svg";
export default {
  props: ["path"],
  data() {
    return {
      cid: 0,
      //   cid: this.$route.params.id,
      text: this.path ? "글 상세정보" : "사진 확인하기",
    };
  },
  components: {
    cancleIcon,
  },
  watch: {
    path: function () {
      if (this.path) this.text = " 글 상세정보";
      else this.text = "사진 확인하기";
    },
  },
  setup() {
    // const response = DiaryService.GetDiaryDetail(this.cid);
    // console.log(response);
  },
  created() {
    // console.log(this.cid);
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
