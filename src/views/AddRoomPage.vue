<template>
  <v-app>
    <Header :theme="this.theme" @showAlert="showAlert"></Header>
    <div class="p-3 h-screen">
      <SelectTheme @themeSelected="themeSelected"></SelectTheme>
      <SelectMember></SelectMember>
      <alert v-if="this.isAlertShow" class="alert absolute" :text="this.alertText" />
    </div>
  </v-app>
</template>
<script>
import Header from "../components/Headers/AddRoomHeader.vue";
import SelectTheme from "../components/AddRooms/SelectTheme.vue";
import SelectMember from "../components/AddRooms/SelectMember.vue";
import alert from "../components/Alert/NotiLayer.vue";

export default {
  data() {
    return {
      theme: "",
      alertText: "테마를 선택해주세요!",
      isAlertShow: false,
    };
  },
  components: {
    Header,
    SelectTheme,
    SelectMember,
    alert,
  },
  methods: {
    themeSelected(theme) {
      this.theme = theme;
    },
    showAlert() {
      this.isAlertShow = true;
      setTimeout(() => {
        this.isAlertShow = false;
      }, 2000);
    },
  },
};
</script>

<style>
.alert {
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
