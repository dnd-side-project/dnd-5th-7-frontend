import { createWebHistory, createRouter } from "vue-router";
import Main from "../views/MainPage.vue";
import Room from "../views/RoomPage.vue";
import Login from "../views/LoginPage.vue";
import AddRoom from "../views/AddRoomPage.vue";
import MyPage from "../views/MyPage.vue";
import RoomDetail from "../views/RoomDetailPage.vue";
import RoomList from "../views/RoomListPage.vue";
import LikeRoomList from "../views/LikeRoomListPage.vue";
import INGRoomList from "../views/INGRoomListPage.vue";
import ThemePreview from "../views/ThemePreviewPage.vue";
import contents from "../views/ContentsPage.vue";
import contentView from "../views/ContentDetailPage.vue";
import kick from "../views/DeleteUserPage.vue";
// import test from "../views/storeTest.vue";

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
    props: true,
  },
  {
    path: "/room/:id",
    name: "Room",
    component: Room,
    props: true,
  },
  {
    path: "/addroom",
    name: "AddRoom",
    component: AddRoom,
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/roomdetail",
    name: "RoomDetail",
    component: RoomDetail,
  },
  {
    path: "/roomlist/:dates",
    name: "RoomList",
    component: RoomList,
    props: true,
  },
  {
    path: "/likeroomlist/",
    name: "LikeRoomList",
    component: LikeRoomList,
  },
  {
    path: "/ingroomlist",
    name: "INGRoomList",
    component: INGRoomList,
  },
  {
    path: "/themepreview",
    name: "ThemePreview",
    component: ThemePreview,
  },
  {
    path: "/contents/:want",
    name: "contents",
    component: contents,
    props: true,
  },
  {
    path: "/contentView/:id",
    name: "contentView",
    component: contentView,
    props: true,
  },
  {
    path: "/kick/:id",
    name: "kick",
    component: kick,
    props: true,
  },
  // {
  //   path: "/test",
  //   name: "test",
  //   component: test,
  // },
];

export const router = createRouter({
  history: createWebHistory(),
  //   base: process.env.BASE_URL,
  routes,
});
