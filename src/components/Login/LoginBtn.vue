<template>
  <div class="p-3 my-3 mx-2 rounded-xl shadow-md LoginBtn">
    <div class="flex h-5 justify-center items-center" v-on:click="goto('Main')">
      <p class="text-center text-white">카카오로 LOGIN</p>
    </div>
  </div>
</template>

<style>
.LoginBtn {
  background-color: #454545;
}
</style>

<script>
export default {
  name: "LoginBtn",
  props: {},
  methods: {
    goto(page) {
      this.$router.push(page);
    },
  },
};
</script>
