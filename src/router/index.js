import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../pages/login.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/home/home"),
    children: [
      {
        path: "/camera",
        name: "camera",
        meta: {
          title: "相机总览",
        },
        component: () =>
          import(/* webpackChunkName: "camera" */ "../pages/content/Camera"),
      },
      {
        path: "/prodsafe",
        name: "prodsafe",
        meta: {
          title: "生产安全监控",
        },
        component: () =>
          import(
            /* webpackChunkName: "prodsafe" */ "../pages/content/Prodsafe"
          ),
      },
      {
        path: "/facesafe",
        name: "facesafe",
        meta: {
          title: "人员登机监控",
        },
        component: () =>
          import(
            /* webpackChunkName: "facesafe" */ "../pages/content/Facesafe"
          ),
      },
      {
        path: "/synclog",
        name: "synclog",
        meta: {
          title: "同步日志",
        },
        component: () =>
          import(/* webpackChunkName: "synclog" */ "../pages/content/Synclog"),
      },
      {
        path: "/baseinfo",
        name: "baseinfo",
        meta: {
          title: "同步日志",
        },
        component: () =>
          import(/* webpackChunkName: "baseinfo" */ "../pages/content/Facebaseinfo"),
      }
    ],
  },
  {
    path: "/show",
    name: "show",
    meta: {
      title: "大屏展示",
    },
    component: () =>
      import(/* webpackChunkName: "show" */ "../pages/show/Show"),
    children: [
      {
        path: "/prodshow",
        name: "prodshow",
        meta: {
          title: "安全大屏展示",
        },
        component: () =>
          import(/* webpackChunkName: "prodshow" */ "../pages/show/Prodshow"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
