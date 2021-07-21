import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/MainPage.vue";
import Board from "../views/BoardPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Board",
    name: "Board",
    component: Board,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  //   base: process.env.BASE_URL,
  routes,
});
