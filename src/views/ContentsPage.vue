<template>
  <v-app>
    <Header :want="this.text"></Header>
    <div class="p-3 bg-bg h-screen">
      <div v-if="param == 'text'" class="h-screen"><textarea class="w-full h-screen p-20"></textarea></div>
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/ContentsHeader.vue";

export default {
  data() {
    return {
      param: this.$route.params.want,
      text: this.$route.params.want == "text" ? "글 기록하기" : "사진 기록하기",
    };
  },
  setup() {},
  components: {
    Header,
    // MemoryText,
  },
  created() {
    console.log(this.$route.params);
  },
};
</script>

<style></style>
