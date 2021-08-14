import { createWebHistory, createRouter } from "vue-router";
import Main from "../views/MainPage.vue";
import Board from "../views/BoardPage.vue";
import Login from "../views/LoginPage.vue";
import AddRoom from "../views/AddRoomPage.vue";
import AddRoom2 from "../views/AddRoomPage2.vue";
import MyPage from "../views/MyPage.vue";
import RoomDetail from "../views/RoomDetailPage.vue";

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
  {
    path: "/AddRoom",
    name: "AddRoom",
    component: AddRoom,
  },
  {
    path: "/AddRoom2",
    name: "AddRoom2",
    component: AddRoom2,
  },
  {
    path: "/MyPage",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/RoomDetail",
    name: "RoomDetail",
    component: RoomDetail,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  //   base: process.env.BASE_URL,
  routes,
});
