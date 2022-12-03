import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  // { text: "Demo", icon: "discover", link: "/demo/" },
  {
    text: "Unix",
    icon: "edit",
    link: "/unix/"
  },
  {
    text: "Database",
    icon: "edit",
    prefix: "/database/",
    children: [
      {
        text: "MySQK",
        icon: "edit",
        prefix: "mysql/",
        children: [
          { text: "Transaction", icon: "edit", link: "transaction" },
          { text: "Index", icon: "edit", link: "index" },
          { text: "Lock", icon: "edit", link: "lock" },
          { text: "Log", icon: "edit", link: "log" },
        ]
      },
      {
        text: "Redis",
        icon: "edit",
        prefix: "redis/",
        children: [
          { text: "Clients", icon: "edit", link: "clients" },
          { text: "Commands", icon: "edit", link: "commands" },
          { text: "Data structure", icon: "edit", link: "data-structure" },
        ]
      },
    ]
  },
  {
    text: "Software Engineer",
    icon: "edit",
    prefix: "/se/",
    children: [
      {
        text: "Unix",
        icon: "edit",
        prefix: "unix/",
        children: [
          // { text: "Apple1", icon: "edit", link: "1" },
          // { text: "Apple2", icon: "edit", link: "2" }
        ]
      }
    ]
  },
  {
    text: "Lang",
    icon: "note",
    prefix: "/lang/",
    children: [
      {
        text: "Java",
        icon: "edit",
        link: "java"
        // prefix: "java/",
        // children: [
        //   { text: "Apple1", icon: "edit", link: "1" },
        //   { text: "Apple2", icon: "edit", link: "2" }
        // ]
      }
    ]
  },
  {
    text: "Standardized",
    icon: "edit",
    prefix: "/standardized/",
    children: [
      {
        text: "GRE",
        icon: "edit",
        prefix: "GRE/",
        children: [
          { text: "QUANTITATIVE", icon: "edit", link: "QUANTITATIVE" },
          { text: "VERBAL", icon: "edit", link: "VERBAL" },
        ]
      },
      {
        text: "TOEFL",
        icon: "edit",
        prefix: "TOEFL/",
        children: [
          { text: "LISTENING", icon: "edit", link: "LISTENING" },
          { text: "READING", icon: "edit", link: "READING" },
          { text: "SPEAKING", icon: "edit", link: "SPEAKING" },
          { text: "WRITING", icon: "edit", link: "WRITING" },
        ]
      },
    ]
  },
  // {
  //   text: "V2 Docs",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/",
  // },
  // {
  //   text: "Posts",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Apple",
  //       icon: "edit",
  //       prefix: "apple/",
  //       children: [
  //         { text: "Apple1", icon: "edit", link: "1" },
  //         { text: "Apple2", icon: "edit", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "Banana",
  //       icon: "edit",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "Banana 1",
  //           icon: "edit",
  //           link: "1",
  //         },
  //         {
  //           text: "Banana 2",
  //           icon: "edit",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "Cherry", icon: "edit", link: "cherry" },
  //     { text: "Dragon Fruit", icon: "edit", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
]);
