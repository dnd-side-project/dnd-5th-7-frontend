<template>
  <v-app>
    <Header :want="this.text"></Header>
    <div class="h-screen">
      <div v-if="param == 'text'" class="p-3 bg-bg h-screen">
        <textarea placeholder="친구들과 있었던 일들을 적어보세요:)" class="text-gray500 w-full h-544 p-20"></textarea>
      </div>
      <div v-else class="bg-bg">
        <div class="bg-white">
          <div class="h-56 flex flex-row items-center justify-between px-20 py-1">
            <div>
              <input
                ref="image"
                id="input"
                type="file"
                name="image"
                accept="image/*"
                multiple="multiple"
                class="hidden"
                @change="uploadImage()"
              /><picIcon />
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

export default {
  data() {
    return {
      pictureList: [],
      param: this.$route.params.want,
      text: this.$route.params.want == "text" ? "글 기록하기" : "사진 기록하기",
    };
  },
  methods: {
    uploadImage: function () {
      let form = new FormData();
      let image = this.$refs["image"].files[0];

      form.append("image", image);

      // axios
      //   .post("/upload", form, {
      //     header: { "Content-Type": "multipart/form-data" },
      //   })
      //   .then(({ data }) => {
      //     this.images = data;
      //   })
      //   .catch((err) => console.log(err));
    },
    clickInputTag: function () {
      this.$refs["image"].click();
    },
  },
  setup() {},
  components: {
    Header,
    picIcon,
    trashIcon,
    // MemoryText,
  },
  created() {
    // console.log(this.$route.params);
  },
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
