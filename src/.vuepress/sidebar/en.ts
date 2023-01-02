import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  // "/": [
  //   "",
  //   {
  //     icon: "discover",
  //     text: "Demo",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "Articles",
  //     icon: "note",
  //     prefix: "posts/",
  //     children: "structure",
  //   },
  //   "intro",
  //   "slides",
  // ],
  "/cs/algo/": [
    "",
    {
      text: "基础",
      icon: "note",
      prefix: "basic/",
      // link: "basic/",
      children: "structure",
    },
    {
      text: "总结",
      icon: "note",
      prefix: "summary/",
      // link: "summary/",
      children: "structure",
    },
    {
      text: "高频题",
      icon: "note",
      prefix: "faq/",
      // link: "faq/",
      children: "structure",
    },
  ],
  "/cs/database/mysql/": [
    "",
    {
      text: "事务",
      icon: "note",
      prefix: "transaction/",
      children: "structure",
    },
    {
      text: "索引",
      icon: "note",
      prefix: "index/",
      children: "structure",
    },
    {
      text: "引擎",
      icon: "note",
      prefix: "engine/",
      children: "structure",
    },
    {
      text: "日志",
      icon: "note",
      prefix: "log/",
      children: "structure",
    },
  ],
  "/se/unix/": [
    "",
    {
      text: "UNIX 基础",
      icon: "note",
      prefix: "basic/",
      // link: "basic/",
      children: "structure",
    },
    {
      text: "Availability 可用性",
      icon: "note",
      prefix: "availability/",
      // link: "availability/",
      children: "structure",
    },
  ],
  "/standardized/": [
    "",
    {
      text: "GRE",
      icon: "note",
      prefix: "GRE/",
      link: "GRE/",
      children: "structure",
    },
    {
      text: "TOEFL",
      icon: "note",
      prefix: "TOEFL/",
      link: "TOEFL/",
      children: "structure",
    },
  ],
});
