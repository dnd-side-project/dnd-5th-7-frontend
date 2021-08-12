<template>
  <v-app>
    <form class="w-full max-w-sm p-3">
      <div class="flex items-center py-2">
        <resetIcon class="resetIcon flex justify-end absolute" />
        <input
          v-model="InputName"
          class="
            mt-0
            mx-2
            block
            w-full
            px-0.5
            border-0 border-b-2
            text-16 text-gray300
            border-gray300
            focus:ring-0 focus:border-gray500 focus:text-gray500
          "
          type="text"
          placeholder="기록장의 이름을 적어주세요"
          aria-label="Bookname"
        />
      </div>
    </form>
  </v-app>
</template>

<script>
import resetIcon from "../../assets/textfield_reset.svg";
export default {
  components: { resetIcon },
  data() {
    return {
      InputName: "",
    };
  },
  watch: {
    InputName: function () {
      let InputName = this.InputName;
      console.log(InputName);
      this.$emit("set-name", InputName);
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
  margin-left: 310px;
}
</style>
