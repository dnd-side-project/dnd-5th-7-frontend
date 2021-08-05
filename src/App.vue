<!-- @format -->

<template>
  <div class="flex justify-center w-screen h-full items-center">
    <router-view class="max-w-md w-360 h-full"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
};
</script>

<style>
v-app {
  height: 100vh;
  background-color: #ffffff;
  background-clip: content-box;
}
</style>
