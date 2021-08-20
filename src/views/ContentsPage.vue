<template>
  <v-app>
    <Header
      :want="this.text"
      :textData="this.recordText"
      :roomid="this.rId"
      :roomTitle="this.rTitle"
      @upload="uploadText"
    ></Header>
    <div class="h-screen">
      <div v-if="param == 'text'" class="p-3 bg-bg h-screen">
        <textarea
          v-bind="recordText"
          v-on:input="updateRecordData"
          placeholder="친구들과 있었던 일들을 적어보세요:)"
          class="text-gray500 w-full h-544 p-20"
        ></textarea>
      </div>
      <div v-else class="bg-bg">
        <div class="bg-white">
          <div class="h-56 flex flex-row items-center justify-between px-20 py-1">
            <div>
              <input
                ref="imageBtn"
                id="input"
                type="file"
                name="image"
                accept="image/*"
                multiple="multiple"
                class="hidden"
                @change="uploadImage()"
              /><picIcon @click="clickInputTag()" />
            </div>
            <trashIcon v-if="this.pictureList.length > 0" />
          </div>
          <div class="divider"></div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Headers/ContentsHeader.vue";
import picIcon from "../assets/btn_picture.svg";
import trashIcon from "../assets/btn_trash.svg";

import { instance } from "../api/index";
export default {
  data() {
    console.log("고고", this.$route.params.roomId);
    return {
      pictureList: [],
      param: this.$route.params.want,
      text: this.$route.params.want == "text" ? "글 기록하기" : "사진 기록하기",
      rId: this.$route.params.roomId,
      rTitle: this.$route.params.roomTitle,
    };
  },
  methods: {
    updateRecordData: function (event) {
      this.recordText = event.target.value;
      console.log(event.target.value);
    },
    uploadImage: function () {
      let form = new FormData();
      let image = this.$refs["imageBtn"].files[0];

      form.append("imgUrl", image);
      console.log(form);
      instance
        .post("/contents/image", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            room_id: this.$route.params.roomId,
          },
        })
        .then((res) => {
          console.log(res);
          window.history.back();
        });
    },
    clickInputTag: function () {
      this.$refs["imageBtn"].click();
    },
    uploadText: async function () {
      let config = {
        headers: {
          room_id: this.$route.params.roomId,
        },
      };
      await instance
        .post(
          "/contents/text",
          {
            text: this.recordText,
          },
          config,
        )
        .then((res) => {
          console.log(res);
          window.history.back();
        });
    },
  },
  setup() {},
  components: {
    Header,
    picIcon,
    trashIcon,
    // MemoryText,
  },
  created() {},
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
