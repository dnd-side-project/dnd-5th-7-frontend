import { createApp } from "vue";
import { router } from "./router";
import store from "./store";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import App from "./App.vue";
import "./assets/styles/index.css";

const app = createApp(App);
process.env.KAKAO_KEY;
window.Kakao.init(`${process.env.VUE_APP_KAKAO_KEY}`);
app.use(router);
app.use(store);
SwiperCore.use([Navigation, Pagination]);

app.mount("#app");
