<template>
  <Modal>
    <!-- header slot starts -->
    <template #title>
      <div class="flex justify-end"><cencleIcon @click="closeModal" /></div>
      <div class="font-bold text-18 flex justify-start mt-10 mb-16">기록장 시작하기</div>
    </template>

    <!-- content slot starts -->
    <template #content>
      <div class="text-14 mb-16">기록장 수정{{ this.roomId }}</div>
      <div class="text-14 text-error mb-28">기록장 삭제</div>
    </template>

    <!-- footer slot starts -->
    <template #footer>
      <div class="font-bold text-18 flex justify-start mb-16">멤버</div>
      <div class="text-14 mb-16">멤버 내보내기</div>
      <div class="text-14" @click="sendMessage()">멤버 추가하기</div>
    </template>
  </Modal>
</template>

<script>
import Modal from "../Alert/Hostmodal";
import cencleIcon from "../../assets/cancel_s.svg";
import { FRONT_URL } from "../../config";
export default {
  props: ["HostBtnClicked", "rId", "rTitle"],
  components: { Modal, cencleIcon },
  data() {
    console.log("ㅁ무무무", this.rId);
    return {
      message: "",
      isModalOpen: this.HostBtnClicked,
      roomId: this.rid,
      roomTitle: this.rTitle,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    sendMessage() {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: `${this.rTitle}에서 같이 추억을 공유해요!`,
          description: "함께 추억을 기록하고 보관해요.",
          imageUrl: "https://dnd57-bucket.s3.ap-northeast-2.amazonaws.com/mood/book_image_hip.png",
          link: {
            webUrl: `${FRONT_URL}?${this.rId}`,
            mobileWebUrl: `${FRONT_URL}?${this.rId}`,
          },
          // buttons: [
          //   {
          //     title: "입장하기",
          //     link: {
          //       webUrl: `https://www.inflearn.com/questions/38367`,
          //       mobileWebUrl: `https://www.inflearn.com/questions/38367`,
          //     },
          //   },
          // ],
        },
      });
    },
  },
};
</script>
