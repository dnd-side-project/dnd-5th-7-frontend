import { createApp } from "vue";
import { router } from "./router";
import store from "./store";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import App from "./App.vue";
import "./assets/styles/index.css";

const app = createApp(App);

app.use(router).use(store);
SwiperCore.use([Navigation, Pagination]);

app.mount("#app");
