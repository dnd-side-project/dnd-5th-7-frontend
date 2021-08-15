import { createApp } from "vue";
import { router } from "./router";
import store from "./store";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import App from "./App.vue";
import "./assets/styles/index.css";
import { KAKAO_KEY } from "./config";

const app = createApp(App);

window.Kakao.init(`${KAKAO_KEY}`);
app.use(router);
app.use(store);
SwiperCore.use([Navigation, Pagination]);

app.mount("#app");
