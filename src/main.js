import { createApp } from "vue";
import { router } from "./router";

import App from "./App.vue";
import "./assets/styles/index.css";
import { KAKAO_KEY } from "./config";
const app = createApp(App);

app.use(router);
app.mount("#app");
window.Kakao.init(KAKAO_KEY);
