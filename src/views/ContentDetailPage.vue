<template>
  <v-app>
    <Header :path="this.isText"></Header>
    <div class="h-screen">
      <div class="bg-bg h-screen">
        <div class="bg-white">
          <div class="h-56 flex flex-row items-center justify-between px-20 py-1">
            <div class="flex flex-row">
              <trashIcon />
              <rewriteIcon class="ml-16" />
            </div>
          </div>
          <div class="divider"></div>
          <div class="h-428 w-360 bg-bg">
            <div class="flex flex-col">
              <div v-if="this.isText" class="bg-white m-20 p-20">
                <div class="h-398 text-14">{{ this.text }}</div>
                <div class="text-12 text-gray300">{{ this.date }}</div>
                <div class="mt-0.4 text-14 text-gray500">{{ this.nick }}</div>
              </div>
              <div v-else class="flex flex-col">
                <div class="h-428 bg-black">
                  <img :src="this.url" class="h-428 object-contain flex object-center" />
                </div>
                <div class="ml-32 mt-20 text-12 text-gray300">{{ this.date }}</div>
                <div class="ml-32 mt-0.4 text-14 text-gray500">{{ this.nick }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/ContentDetailHeader.vue";
import rewriteIcon from "../assets/rewrite.svg";
import trashIcon from "../assets/btn_trash.svg";

import DiaryService from "../api/Room/services/diary.service";
// import { instance } from "../api/index";
export default {
  data() {
    return {
      isText: undefined,
      url: "",
      date: "",
      nick: "",
      text: "",
      cid: 0,
    };
  },
  components: {
    Header,
    rewriteIcon,
    trashIcon,
    // MemoryText,
  },
  async created() {
    window.scrollTo(0, 0);
    this.cid = this.$route.params.id;

    await DiaryService.GetDiaryDetail(this.cid).then((res) => {
      console.log(res.data);
      const data = res.data;
      this.nick = data.nick;
      const date = data.date.split("-");
      this.date = date[0] + "." + date[1] + "." + date[2];

      if (data.text) {
        // text이면
        this.isText = true;
        this.text = data.text;
      } else if (data.imgUrl) {
        this.isText = false;
        this.url = data.imgUrl;
      }
      console.log(this.isText);
    });
  },
  setup() {},
};
</script>

<style>
textarea {
  font-family: Prentendard;
}

textarea,
textarea :focus,
textarea :active {
  outline: none;
  border: 2px solid #eaeaea;
  box-shadow: none;
  --tw-ring-shadow: none;
}

.divider {
  height: 2px;
  background: #eaeaea;
  transform: matrix(1, 0, 0, -1, 0, 0);
}
</style>
