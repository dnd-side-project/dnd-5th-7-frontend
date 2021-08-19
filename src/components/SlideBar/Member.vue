<template>
  <div class="flex flex-row">
    <div class="hostIcon z-10"><hostIcon v-if="this.host == true" /></div>
    <noDataIcon :class="{ hosttext: this.host == true }" />
    <div class="ml-10 flex items-center" :class="{ hosttext: this.host == true }">{{ this.name }}</div>
  </div>
</template>

<script>
import hostIcon from "../../assets/icon_host.svg";
import noDataIcon from "../../assets/nodata_m.svg";
export default {
  props: ["UserName", "host"],
  components: { hostIcon, noDataIcon },
  setup() {},
  data() {
    return {
      name: this.UserName,
      HostChecked: this.host,
    };
  },
  methods: {
    checkLength() {
      if (this.name.length > 9) {
        this.name = this.name.substring(0, 9) + "...";
      }
    },
  },
  created() {
    this.checkLength();
  },
};
</script>

<style>
.hostIcon {
  transform: translate(25px, 20px);
}
.hosttext {
  transform: translate(-15px, 0px);
}
</style>
