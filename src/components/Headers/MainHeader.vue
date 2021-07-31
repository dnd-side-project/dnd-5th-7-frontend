<template>
  <div class="flex flex-row justify-between p-3">
    <div>
      <img :src="mypageIcon" alt="mypageIcon" />
    </div>
    <div class="flex flex-row justify-end">
      <img :src="AlarmIcon" alt="AlarmIcon" class="mr-3" />
      <img :src="SearchIcon" alt="SearchIcon" />
    </div>
  </div>
</template>

<script>
import mypageIcon from "@/assets/mypage_icon.svg";
import SearchIcon from "@/assets/search_icon.svg";
import AlarmIcon from "@/assets/alarm_icon.svg";
export default {
  setup() {
    return {
      mypageIcon,
      SearchIcon,
      AlarmIcon,
    };
  },
};
</script>
