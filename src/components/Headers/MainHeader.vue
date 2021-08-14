<template>
  <div class="flex flex-row justify-between p-3">
    <div class="flex flex-row">
      <mypageIcon v-on:click="goto('MyPage')" />
      <!-- <p>{{ id }}</p> -->
    </div>
    <div class="flex flex-row justify-end">
      <AlarmIcon class="mr-3" v-on:click="goto('Alarm')" />
      <SearchIcon v-on:click="goto('Search')" />
    </div>
    <!-- <button @click="callGetId">Id 가져오셈</button>
    <button @click="callCreateRoom">방생성</button> -->
  </div>
</template>

<script>
import mypageIcon from "../../assets/mypage_icon.svg";
import SearchIcon from "../../assets/search_icon.svg";
import AlarmIcon from "../../assets/alarm_icon.svg";
import axios from "axios";
import { BASE_URL } from "../../config";
export default {
  components: {
    mypageIcon,
    SearchIcon,
    AlarmIcon,
  },
  data: () => {
    return {
      id: [],
    };
  },
  created() {
    this.callGetId();
    this.callCreateRoom();
  },
  methods: {
    goto(page) {
      this.$router.push(page);
    },
    callGetId() {
      axios
        .get(`${BASE_URL}/auth/id`, { withCredentials: true })
        .then((res) => {
          this.id = res.id;
          console.log("응답 : ", res);
        })
        .catch((e) => {
          console.log("error : ", e);
        });
    },
    callCreateRoom() {
      axios
        .post(`${BASE_URL}/diaries`, { title: "제목" }, { withCredentials: true })
        .then((res) => {
          console.log("응답2 : ", res);
        })
        .catch((e) => {
          console.log("error : ", e);
        });
    },
  },
};
</script>
