<!-- @format -->

<template>
  <div class="p-3">
    <Logo></Logo>
    <BrandingText></BrandingText>
    <LoginBtn></LoginBtn>
  </div>
</template>

<script>
import Logo from "../components/Login/Logo.vue";
import BrandingText from "../components/Login/BrandingText.vue";
import LoginBtn from "../components/Login/LoginBtn.vue";

export default {
  components: {
    Logo,
    BrandingText,
    LoginBtn,
  },
};
</script>

<style></style>
