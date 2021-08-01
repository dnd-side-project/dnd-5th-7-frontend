<!-- @format -->

<template>
  <div class="p-3">
    <Logo></Logo>
    <BrandingText></BrandingText>
    <EnterPageImg></EnterPageImg>
    <LoginBtn @click="kakaoLogin"></LoginBtn>
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
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email;
          console.log(nickname, "nickname");
          console.log(email, "email");
        },
      });
    },
  },
};
</script>

<style></style>
