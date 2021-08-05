import { createApp } from "vue";
import { router } from "./router";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import App from "./App.vue";
import "./assets/styles/index.css";
import { KAKAO_KEY } from "./config";
const app = createApp(App);

app.use(router);
SwiperCore.use([Navigation, Pagination]);

app.mount("#app");
window.Kakao.init(KAKAO_KEY);
