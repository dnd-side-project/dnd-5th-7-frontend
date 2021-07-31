import { createApp } from "vue";
import { router } from "./router";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";

import App from "./App.vue";
import "./assets/styles/index.css";

const app = createApp(App);

app.use(router);
app.use(SetupCalendar, {}).component("Calendar", Calendar).component("DatePicker", DatePicker);
app.mount("#app");
