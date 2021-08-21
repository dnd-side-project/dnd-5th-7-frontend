<template>
  <div class="SliderBlock z-20">
    <div class="w-120 h-full outside" @click="sliderClosed"></div>
    <div class="Slider">
      <div class="w-240 h-full">
        <div class="h-800 flex items-end pl-20 pb-1.2 font-bold text-18">공유 멤버 목록</div>
        <div class="bg-basic h-504 border-b-2 border-gray100 flex flex-col pl-20 pt-20 text-16 overflow-y-auto">
          <div v-for="user in Users" :key="user.uId" class="w-200 h-3.6 mb-16">
            <member :UserName="user.uName" :host="user.isHost" />
          </div>
        </div>
        <div class="font-bold text-14 pt-16 pl-20 flex flex-row items-center cursor-pointer" @click="outRoom">
          기록장 나가기<exitIcon class="ml-1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import member from "./Member.vue";
import exitIcon from "../../assets/icon_exit.svg";

import MemberService from "../../api/Room/services/member.service";
import RoomService from "../../api/Room/services/room.service";

export default {
  name: "RoomSlider",
  props: ["userId", "roomId"],
  data() {
    return {
      // / [멤버 리스트 조회 api 호출] - get:members/:roomIdx
      HostId: this.userId,
      RoomId: this.roomId,
      Users: [],
    };
  },
  components: { member, exitIcon },
  methods: {
    sliderClosed() {
      this.$emit("sliderClosed", false);
    },
    async outRoom() {
      // 기록장 나가기
      const response = await RoomService.DeleteRoom(this.roomId).then(() => {
        this.gotoMain();
      });
      console.log(response);
    },
    gotoMain() {
      this.$router.replace({ path: "/main" });
    },
  },
  setup() {
    const store = useStore();
    const userList = computed(() => store.state.roomStore.userList);
    store.commit("setUserList", []);

    // User.forEach((element) => {
    //   store.commit("addUserList", element);
    // });

    return { userList };
  },
  async created() {
    console.log("hostId:", this.HostId);
    await MemberService.GetMembersList(this.roomId).then((res) => {
      console.log(res.data);
      res.data.rows.forEach((element) => {
        this.Users.push({ uid: element.User.id, uName: element.User.nick, isHost: element.admin });
      });
    });

    console.log(this.Users);
  },
};
</script>

<style>
.SliderBlock {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transition: all 250ms ease-in;
  background-color: rgba(0, 0, 0, 0.6);
}
.Slider {
  width: 240px;
  position: absolute;
  top: 0;

  right: 0;
  bottom: 0;
  margin-left: 120px;
  background: white;
  transition: all 250ms ease-in;
  z-index: 100;
}
</style>
