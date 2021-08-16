<template>
  <form class="w-full">
    <div class="flex items-center">
      <resetIcon class="resetIcon flex justify-end absolute" />
      <input
        @input="ChangeName"
        :value="name"
        class="block w-full text-16 text-gray300 bg-bg focus:ring-0 focus:border-gray500 focus:text-gray500"
        type="text"
        placeholder="기록장의 이름을 적어주세요"
        aria-label="Bookname"
        width="280px"
      />
    </div>
  </form>
</template>

<script>
import resetIcon from "../../assets/textfield_reset.svg";
export default {
  components: { resetIcon },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ChangeName(e) {
      this.name = e.target.value;
      this.$emit("setName", this.name);
    },
  },
};
</script>

<style>
input :focus,
input :active {
  outline: none;
  border: none;
  box-shadow: none;
  --tw-ring-shadow: none;
}

.resetIcon {
  margin-left: 260px;
}
</style>
