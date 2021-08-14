<template>
  <div class="font-bold text-gray500 text-18 mt-3 ml-2">테마를 선택해주세요!</div>
  <div class="p-6 flex flex-col justify-center items-center">
    <div class="flex flex-row">
      <div>
        <div
          v-if="this.Selected == 'hip'"
          class="w-154 h-154 ml-0.6 flex justify-center items-center bg-blackdip absolute"
        >
          <CheckIcon width="42px" height="42px" />
        </div>
        <div v-else></div>
        <themeHip class="theme-icon" @click="themeSelected('hip')" />
        <div class="pl-1.5 pt-1.5 font-regular text-14">힙</div>
      </div>
      <div>
        <div
          v-if="this.Selected == 'simple'"
          class="w-154 h-154 ml-0.6 flex justify-center items-center bg-blackdip absolute"
        >
          <CheckIcon width="42px" height="42px" />
        </div>
        <div v-else></div>
        <themeSimple class="theme-icon" @click="themeSelected('simple')" />
        <div class="pl-1.5 pt-1.5 font-regular text-14">심플</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckIcon from "../../assets/check_symbol.svg";
import themeHip from "../../assets/SelectTheme_hip.svg";
import themeSimple from "../../assets/SelectTheme_modern.svg";

export default {
  name: "SelectTheme",
  props: {},
  data() {
    return {
      Selected: null,
    };
  },
  components: {
    CheckIcon,
    themeHip,
    themeSimple,
  },
  methods: {
    themeSelected(theme) {
      this.Selected = theme;
    },
  },
  watch: {
    Selected: function () {
      this.$emit("themeSelected", this.Selected);
    },
  },
};
</script>

<style>
.theme-icon {
  width: 154px;
  border: 1px solid #171717;
  box-sizing: border-box;
  margin: 0px 6px;
}

.bg-blackdip {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
