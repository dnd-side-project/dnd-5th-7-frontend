<template>
  <div class="flex flex-col justify-center items-center mb-2">
    <div class="relative">
      <memberIcon class="absolute member-icon" />
    </div>
    <addBackground />
    <div class="text-12 mt-0.8">{{ this.Mname }}</div>
  </div>
</template>

<script>
import addBackground from "../../assets/SelectMember_background.svg";
import memberIcon from "../../assets/SelectMember_member.svg";

export default {
  name: "SelectMember",
  props: ["Mname"],
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.name = this.Mname;
  },
  components: {
    addBackground,
    memberIcon,
  },
};
</script>

<style>
.member-icon {
  top: 15px;
  left: -9px;
}
</style>
