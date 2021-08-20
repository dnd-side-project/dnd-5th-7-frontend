<template>
  <div class="h-122 flex flex-col justify-between absolute top-76 right-5 z-10">
    <writingIcon class="z-10 cursor-pointer" @click="Wbtnclicked" />
    <div v-show="this.WriteBtnClicked" class="absolute z-20 FirstfuncList"><WriteFunction /></div>
    <hostIcon v-show="this.host_id == userData.id" class="z-10 cursor-pointer" @click="Hbtnclicked" />
    <div v-show="this.HostBtnClicked" class="absolute SecondfuncList z-20">
      <HostFunction :HostBtnClicked="this.HostBtnClicked" @closeModal="Hbtnclicked" />
    </div>
  </div>
</template>

<script>
import WriteFunction from "./WriteFunction.vue";
import HostFunction from "./HostFunction.vue";
import writingIcon from "../../assets/floating_writing2.svg";
import hostIcon from "../../assets/floating_host2.svg";

import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: { writingIcon, hostIcon, HostFunction, WriteFunction },
  props: ["host_id"],
  data() {
    return {
      WriteBtnClicked: false,
      HostBtnClicked: false,
    };
  },
  methods: {
    Wbtnclicked() {
      // console.log("Wbtnclicked");
      this.WriteBtnClicked = !this.WriteBtnClicked;
    },
    Hbtnclicked() {
      // console.log("Hbtnclicked");
      this.HostBtnClicked = !this.HostBtnClicked;
    },
  },
  setup() {
    const store = useStore();
    const userData = computed(() => {
      return store.getters[`userStore/getUser`];
    });
    return { userData };
  },
};
</script>

<style>
.FirstfuncList,
.SecondfuncList {
  top: 60px;
  left: -85px;
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.2));
}

.SecondfuncList {
  /* top: 100px; */
}
</style>
