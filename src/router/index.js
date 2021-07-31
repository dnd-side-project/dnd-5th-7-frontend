import { createWebHistory, createRouter } from "vue-router";
import Main from "../views/MainPage.vue";
import Board from "../views/BoardPage.vue";
import Login from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
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
