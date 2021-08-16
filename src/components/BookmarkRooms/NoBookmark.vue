<template>
  <div class="p-6 mt-3 mb-14 max-w-sm mx-auto flex flex-col justify-center items-center">
    <nodataIcon class="mt-6 mb-2" />
    <div class="text-gray500 text-center text-14">
      아직 즐겨찾기한 기록이 없어요.<br />원하는 다이어리에서 이 아이콘을 눌러보세요!
    </div>
  </div>
</template>

<script>
import nodataIcon from "../../assets/like_icon_nodata.svg";
export default {
  name: "NoBookmark",
  props: {},
  components: {
    nodataIcon,
  },
};
</script>

<style scoped></style>
