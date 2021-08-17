<template>
  <div class="flex flex-row justify-between p-3 bg-bg">
    <div class="flex flex-row cursor-pointer">
      <mypageIcon v-on:click="goto('MyPage')" />
      <!-- <p>{{ id }}</p> -->
    </div>
    <div class="flex flex-row justify-end">
      <AlarmIcon class="mr-3 cursor-pointer" v-on:click="goto('Alarm')" />
      <SearchIcon class="cursor-pointer" v-on:click="goto('Search')" />
      <!-- <button @click="callCreateRoom">방생성</button> -->
    </div>

    <!-- <button @click="callGetRoom">방 조회</button>
    <button @click="callPatchRoom">방 수정</button>
    <button @click="callDeleteRoom">방 삭제</button> -->
  </div>
</template>
<script>
import mypageIcon from "../../assets/mypage_icon.svg";
import SearchIcon from "../../assets/search_icon.svg";
import AlarmIcon from "../../assets/alarm_icon.svg";
import axios from "axios";
export default {
  components: {
    mypageIcon,
    SearchIcon,
    AlarmIcon,
  },
  data: () => {
    return {
      id: [],
      roomId: 0,
    };
  },
  created() {
    this.callGetId();
  },
  methods: {
    goto(page) {
      this.$router.push(page);
    },
    callGetId() {
      axios
        .get("https://tido-diary.herokuapp.com/auth/id", { withCredentials: true })
        .then((res) => {
          this.id = res.id;
          console.log(this.id);
          console.log("응답 : ", res.data);
        })
        .catch((e) => {
          console.log("error : ", e);
        });
    },
    callCreateRoom() {
      axios
        .post(
          "https://tido-diary.herokuapp.com/diaries",
          { title: "제목", date: "2020-2-23", mood: "simple" },
          { withCredentials: true },
        )
        .then((res) => {
          console.log("응답2 : ", res);
        })
        .catch((e) => {
          console.log("error : ", e);
        });
    },
    callGetRoom() {
      axios
        .get("https://tido-diary.herokuapp.com/diaries/" + this.roomId, { withCredentials: true })
        .then((res) => {
          console.log("응답2 : ", res);
        })
        .catch((e) => {
          console.log("error : ", e);
        });
    },
    callPatchRoom() {
      axios
        .patch(
          "https://tido-diary.herokuapp.com/diaries/" + this.roomId,
          { title: "수정된~이름", date: "2020/2/23", mood: "simple", lock: 0 },
          { withCredentials: true },
        )
        .then((res) => {
          console.log("응답2 : ", res);
        })
        .catch((e) => {
          console.log("error : ", e);
        });
    },
    callDeleteRoom() {
      axios
        .delete("https://tido-diary.herokuapp.com/diaries/" + this.roomId, { withCredentials: true })
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
