<!-- @format -->

<template>
  <div class="w-full h-full flex justify-center items-center bg-gray100">
    <router-view class="w-360 h-full max-w-screen-md mx-auto"></router-view>
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
