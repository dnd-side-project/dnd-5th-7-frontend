<template>
  <div>
    <div class="font-bold text-gray500 text-18 my-3 ml-2">함께 기록할 멤버들</div>
    <div class="grid grid-cols-5">
      <div class="flex flex-col"><addBtn @click="sendMessage" /></div>
      <div class="" v-for="n in names" :key="n">
        <member :Mname="n" />
      </div>
    </div>
  </div>
</template>

<script>
import addBtn from "./AddBtn.vue";
import member from "./member.vue";
import { FRONT_URL } from "../../config";

export default {
  name: "SelectMember",
  props: {},
  data() {
    return {
      names: ["하진", "예주", "도연", "민규", "본", "대현", "세희"],
    };
  },
  components: {
    addBtn,
    member,
  },
  methods: {
    sendMessage() {
      console.log("버튼 클릭함");
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "xx님이 xx로 초대하였습니다.",
          description: "들어오세용",
          imageUrl: "../../assets/라이언.png",
          link: {
            webUrl: FRONT_URL,
            mobileWebUrl: FRONT_URL,
          },
        },
      });
    },
  },
};
</script>

<style>
.plusicon {
  top: -33px;
  left: 15px;
}
</style>
