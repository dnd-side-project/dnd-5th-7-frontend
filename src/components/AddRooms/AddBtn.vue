<template>
  <div class="flex flex-col justify-center items-center mb-2 cursor-pointer">
    <div class="relative">
      <plusIcon class="absolute plus-icon" />
    </div>
    <addBackground />
    <div class="text-12 mt-0.8">추가</div>
  </div>
</template>

<script>
import addBackground from "../../assets/SelectMember_background.svg";
import plusIcon from "../../assets/SelectMember_plus.svg";

export default {
  name: "SelectMember",
  props: {},
  components: {
    addBackground,
    plusIcon,
  },
  methods: {},
};
</script>

<style>
.plus-icon {
  top: 15px;
  left: -9px;
}
</style>
