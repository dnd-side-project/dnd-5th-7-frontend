<template>
  <div class="border-2 border-gray100 px-20 py-20">
    <div class="flex flex-row justify-between items-center">
      <div class="font-bold text-gray500 text-18">테마를 선택해주세요.</div>
      <div class="text-12 pb-02 border-b border-gray100" @click="goto('ThemePreview')">미리보기</div>
    </div>
    <div class="pt-22 flex flex-col justify-center items-center">
      <div class="flex flex-col">
        <div class="w-280 h-24 flex flex-row items-center justify-between pb-1.4 border-b-2 border-gray100">
          <div class="flex flex-row items-center"><themeHip class="mr-1.2" /> HIP</div>
          <div @click="themeSelected('hip')">
            <img v-if="this.Selected == 'hip'" src="../../assets/check.png" width="24" height="24" />
            <img v-else src="../../assets/not_check.png" width="24" height="24" />
          </div>
        </div>
        <div class="w-280 h-24 flex flex-row items-center justify-between mt-1.4">
          <div class="flex flex-row items-center"><themeSimple class="mr-1.2" /> SIMPLE</div>
          <div @click="themeSelected('simple')">
            <img v-if="this.Selected == 'simple'" src="../../assets/check.png" width="24" height="24" />
            <img v-else src="../../assets/not_check.png" width="24" height="24" />
          </div>
        </div>
        <!-- <div class="flex flex-row">
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
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import themeHip from "../../assets/hip.svg";
import themeSimple from "../../assets/simple.svg";

export default {
  name: "SelectTheme",
  props: {},
  data() {
    return {
      Selected: null,
    };
  },
  components: {
    themeHip,
    themeSimple,
  },
  methods: {
    goto(page) {
      this.$router.push(page);
    },
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
