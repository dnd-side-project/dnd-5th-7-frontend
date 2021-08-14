<template>
  <div class="font-bold text-gray500 text-18 my-3 ml-2">함께 기록할 멤버들</div>
  <div class="grid grid-cols-5">
    <div class="flex flex-col"><addBtn /></div>
    <div class="" v-for="n in names" :key="n">
      <member :Mname="n" />
    </div>
  </div>
</template>

<script>
import addBtn from "./AddBtn.vue";
import member from "./member.vue";

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
};
</script>

<style>
.plusicon {
  top: -33px;
  left: 15px;
}
</style>
