<template>
  <form class="w-full">
    <div class="flex flex-col">
      <div class="flex items-center">
        <resetIcon @click="ClearName" class="resetIcon flex justify-end absolute cursor-pointer" />
        <input
          @input="ChangeName"
          maxlength="20"
          :value="name"
          class="
            block
            w-full
            text-16 text-gray300
            bg-bg
            focus:ring-0 focus:border-gray500 focus:text-gray500 focus:outline-none
            active:text-gray500
            px-3
            py-2
          "
          type="text"
          placeholder="기록장의 이름을 적어주세요"
          aria-label="Bookname"
          width="280px"
        />
      </div>
      <div class="flex justify-between w-full mt-1 px-2">
        <span class="text-error text-12">제목을 입력해주세요</span>
        <span class="text-gray300 text-12">{{ name.length }}/20</span>
      </div>
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
    ClearName() {
      this.name = "";
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
