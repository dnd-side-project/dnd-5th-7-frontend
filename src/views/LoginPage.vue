<!-- @format -->

<template>
  <div class="p-3 flex flex-col justify-start h-screen bg-bg">
    <Logo></Logo>
    <BrandingText></BrandingText>
    <EnterPageImg></EnterPageImg>
    <LoginBtn></LoginBtn>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
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
  setup() {
    const route = useRoute();
    const key = Object.keys(route.query);

    localStorage.setItem("roomId", key);
    // function pushWithQuery(query) {
    //   route.push({
    //     name: "search",
    //     query: {
    //       ...route.query,
    //     },
    //   });
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname profile_image",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (res) {
          console.log(res);
          const accessToken = window.Kakao.Auth.getAccessToken();
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          // const email = kakao_account.email;
          console.log(nickname, "nickname");
          // console.log(email, "email");
          console.log(kakao_account);
          console.log(accessToken);
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },
  },
};
</script>

<style></style>
