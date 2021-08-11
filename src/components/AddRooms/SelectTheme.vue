<template>
  <div class="font-bold text-gray500 text-18 mt-3 ml-2">테마를 선택해주세요!</div>
  <div class="p-6 flex flex-col justify-center items-center">
    <div class="flex flex-row">
      <div>
        <themeHip class="theme-icon" />
        <div class="pl-1.5 pt-1.5 font-regular text-14">힙</div>
      </div>
      <div>
        <themeModern class="theme-icon" />
        <div class="pl-1.5 pt-1.5 font-regular text-14">모던</div>
      </div>
    </div>
  </div>
</template>

<script>
import themeHip from "../../assets/SelectTheme_hip.svg";
import themeModern from "../../assets/SelectTheme_modern.svg";

export default {
  name: "NoBookmark",
  props: {},
  components: {
    themeHip,
    themeModern,
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
</style>
