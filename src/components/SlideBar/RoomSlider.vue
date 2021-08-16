<template>
  <div class="SliderBlock z-20">
    <div class="w-120 h-full outside" @click="sliderClosed"></div>
    <div class="Slider">
      <div class="w-240 h-full">
        <div class="h-800 flex items-end pl-20 pb-1.2 font-bold text-18">공유 멤버 목록</div>
        <div class="bg-basic h-504 border-b-2 border-gray100 flex flex-col pl-20 pt-20 text-16 overflow-y-auto">
          <div v-for="user in userList" :key="user.uId" class="w-200 h-36">
            <member :UserName="user.uName" :host="user.isHost" />
          </div>
        </div>
        <div class="font-bold text-14 pt-16 pl-20 flex flex-row items-center">
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
import User from "../../data/User.json";

export default {
  name: "RoomSlider",
  data() {
    return {
      Users: [],
    };
  },
  components: { member, exitIcon },
  methods: {
    sliderClosed() {
      this.$emit("sliderClosed", false);
    },
  },
  setup() {
    const store = useStore();
    const userList = computed(() => store.state.roomStore.userList);
    store.commit("setUserList", []);

    User.forEach((element) => {
      store.commit("addUserList", element);
    });

    return { userList };
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
