<!-- @format -->

<template>
  <div class="p-3">
    <Logo></Logo>
    <BrandingText></BrandingText>
    <EnterPageImg></EnterPageImg>
    <LoginBtn></LoginBtn>
  </div>
</template>

<script>
import Logo from "../components/Login/Logo.vue";
import BrandingText from "../components/Login/BrandingText.vue";
import LoginBtn from "../components/Login/LoginBtn.vue";
import EnterPageImg from "../components/Login/EnterPageImg.vue";
export default {
  components: {
    Logo,
    BrandingText,
    LoginBtn,
    EnterPageImg,
  },
};
</script>

<style></style>
