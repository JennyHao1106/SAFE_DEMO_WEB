const state = {
  user: null,
  token: "",
  collapse: false,
  tagsList: [
    {
      name: "watch",
      title: "运行监控",
      path: "/watch",
    },
    {
      name: "history",
      title: "历史报警",
      path: "/history",
    },
    {
      name: "synclog",
      title: "同步日志",
      path: "/synclog",
    },
  ],
  prodData: {},
  faceData:{}
};

export default state;
