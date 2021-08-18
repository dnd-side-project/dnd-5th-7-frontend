<template>
  <Modal>
    <!-- header slot starts -->
    <template #title>
      <div class="flex justify-end"><cencleIcon @click="closeModal" /></div>
      <div class="font-bold text-18 flex justify-start mt-10 mb-16">기록장 시작하기</div>
    </template>

    <!-- content slot starts -->
    <template #content>
      <div class="text-14 mb-16">기록장 수정</div>
      <div class="text-14 text-error mb-28">기록장 삭제</div>
    </template>

    <!-- footer slot starts -->
    <template #footer>
      <div class="font-bold text-18 flex justify-start mb-16">멤버</div>
      <div class="text-14 mb-16">멤버 내보내기</div>
      <div class="text-14">멤버 추가하기</div>
    </template>
  </Modal>
</template>

<script>
import Modal from "../Alert/Hostmodal";
import cencleIcon from "../../assets/cancel_s.svg";
export default {
  props: ["HostBtnClicked"],
  components: { Modal, cencleIcon },
  data() {
    return {
      message: "",
      isModalOpen: this.HostBtnClicked,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
