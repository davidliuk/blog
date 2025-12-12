import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Algorithm",
    icon: "edit",
    prefix: "/algo",
    children: [
      {
        text: "Framework",
        icon: "edit",
        link: "framework/",
      },
      {
        text: "Data Structure",
        icon: "edit",
        prefix: "data-structure/",
        children: [
          "linear",
          "tree/",
          "graph/",
          "set/",
        ]
      },
      {
        text: "Patterns",
        icon: "edit",
        prefix: "patterns/",
        children: [
          "search/",
          "optimise/",
          "math/",
        ]
      },
      {
        text: "FAQ",
        icon: "edit",
        link: "faq/",
      },
    ],
  },
  {
    text: "Computer Science",
    icon: "edit",
    prefix: "/cs/",
    children: [
      {
        text: "Core",
        icon: "edit",
        prefix: "core/",
        children: [
          {
            text: "Network",
            icon: "edit",
            link: "network/",
          },
          {
            text: "Operating System",
            icon: "edit",
            link: "os/",
          },
        ],
      },
      {
        text: "Design",
        icon: "note",
        prefix: "design/",
        children: [
          {
            text: "Design Pattern",
            icon: "edit",
            link: "pattern/",
          },
          {
            text: "Object-Oriented Design",
            icon: "edit",
            link: "ood/",
          },
          {
            text: "System Design",
            icon: "edit",
            link: "system/",
          },
        ],
      },
    ],
  },
  {
    text: "Engineering",
    icon: "edit",
    prefix: "/se/",
    children: [
      {
        text: "Database",
        icon: "edit",
        prefix: "database/",
        children: [
          {
            text: "MySQL",
            icon: "edit",
            link: "mysql/",
            // prefix: "mysql/",
            // children: [
            //   { text: "Transaction", icon: "edit", link: "transaction" },
            //   { text: "Index", icon: "edit", link: "index" },
            //   { text: "Lock", icon: "edit", link: "lock" },
            //   { text: "Log", icon: "edit", link: "log" },
            // ],
          },
          {
            text: "Redis",
            icon: "edit",
            link: "redis/",
            // prefix: "redis/",
            // children: [
            //   { text: "Clients", icon: "edit", link: "clients" },
            //   { text: "Commands", icon: "edit", link: "commands" },
            //   { text: "Data structure", icon: "edit", link: "data-structure" },
            // ],
          },
        ],
      },
      {
        text: "Lang",
        icon: "note",
        prefix: "lang/",
        children: [
          {
            text: "Java",
            icon: "edit",
            link: "java/",
          },
        ],
      },
      {
        text: "DevOps",
        icon: "note",
        prefix: "devops/",
        children: [
          {
            text: "Unix",
            icon: "edit",
            link: "unix/",
          },
        ],
      },
      "tools/",
    ],
  },
  {
    text: "Tests",
    icon: "edit",
    prefix: "/test/",
    children: [
      {
        text: "TOEFL",
        icon: "edit",
        prefix: "TOEFL/",
        children: [
          { text: "LISTENING", icon: "edit", link: "LISTENING/" },
          { text: "READING", icon: "edit", link: "READING/" },
          { text: "SPEAKING", icon: "edit", link: "SPEAKING/" },
          { text: "WRITING", icon: "edit", link: "WRITING/" },
        ],
      },
      {
        text: "GRE",
        icon: "edit",
        prefix: "GRE/",
        children: [
          { text: "QUANTITATIVE", icon: "edit", link: "QUANTITATIVE/" },
          { text: "VERBAL", icon: "edit", link: "VERBAL/" },
        ],
      },
    ],
  },
]);
