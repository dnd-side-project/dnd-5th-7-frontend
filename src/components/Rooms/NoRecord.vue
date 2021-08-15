<template>
  <div className=" flex flex-col justify-center items-center relative z-0">
    <nodrecordIcon class="mt-36 mb-5 z-0" />
    {{ counter }}
    <button @click="inc">inc</button>
    <div class="font-bold text-gray200 text-center text-14 z-0">아직 기록이 없네요.<br />추억을 정리하러 가볼까요?</div>
    <div class="h-28 flex flex-col justify-between absolute top-5 right-5 z-0">
      <writingIcon class="z-0" />
      <hostIcon class="z-0" />
    </div>
  </div>
</template>

<script>
import nodrecordIcon from "../../assets/plus_icon_norecord.svg";
import writingIcon from "../../assets/floating_writing2.svg";
import hostIcon from "../../assets/floating_host2.svg";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "NoRoom",
  setup() {
    const { state } = useStore();
    const counter = computed(() => state.counter);
    const inc = () => store.commit("setCounter");
    return { counter, inc };
  },
  props: {},
  components: {
    nodrecordIcon,
    writingIcon,
    hostIcon,
  },
});
</script>

<style scoped></style>
