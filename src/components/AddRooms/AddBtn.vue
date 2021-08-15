<template>
  <div class="flex flex-col justify-center items-center mb-2">
    <div class="relative">
      <plusIcon class="absolute plus-icon" />
    </div>
    <addBackground />
    <div class="text-12 mt-0.8" @click="sendMessage()">추가</div>
  </div>
</template>

<script>
import addBackground from "../../assets/SelectMember_background.svg";
import plusIcon from "../../assets/SelectMember_plus.svg";
import { FRONT_URL } from "../../config";

export default {
  name: "SelectMember",
  props: {},
  components: {
    addBackground,
    plusIcon,
  },
  methods: {
    sendMessage() {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "xx님이 xx로 초대하였습니다.",
          description: "들어오세용",
          imageUrl: "",
          link: {
            webUrl: FRONT_URL,
            mobileWebUrl: FRONT_URL,
          },
          buttons: [
            {
              titile: "입장하기",
              link: {
                webUrl: FRONT_URL,
                mobileWebUrl: FRONT_URL,
              },
            },
          ],
        },
      });
    },
  },
};
</script>

<style>
.plus-icon {
  top: 15px;
  left: -9px;
}
</style>
