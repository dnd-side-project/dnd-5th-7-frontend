<template>
  <div class="flex flex-row justify-between p-3">
    <div>
      <mypageIcon />
    </div>
    <div class="flex flex-row justify-end">
      <AlarmIcon class="mr-3" />
      <SearchIcon />
    </div>
  </div>
</template>

<script>
import mypageIcon from "../../assets/mypage_icon.svg";
import SearchIcon from "../../assets/search_icon.svg";
import AlarmIcon from "../../assets/alarm_icon.svg";
export default {
  components: {
    mypageIcon,
    SearchIcon,
    AlarmIcon,
  },
};
</script>
