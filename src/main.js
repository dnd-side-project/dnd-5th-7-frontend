import { createApp } from "vue";
import { router } from "./router";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import App from "./App.vue";
import store from "./store";
import "./assets/styles/index.css";

const app = createApp(App);

app.use(router);
app.use(store);
SwiperCore.use([Navigation, Pagination]);

app.mount("#app");
