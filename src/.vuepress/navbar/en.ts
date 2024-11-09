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
        text: "Summary",
        icon: "edit",
        link: "summary/",
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
        text: "Basic",
        icon: "edit",
        prefix: "basic/",
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
        text: "Database",
        icon: "edit",
        prefix: "database/",
        children: [
          {
            text: "MySQK",
            icon: "edit",
            prefix: "mysql/",
            link: "mysql/",
            children: [
              { text: "Transaction", icon: "edit", link: "transaction" },
              { text: "Index", icon: "edit", link: "index" },
              { text: "Lock", icon: "edit", link: "lock" },
              { text: "Log", icon: "edit", link: "log" },
            ],
          },
          {
            text: "Redis",
            icon: "edit",
            prefix: "redis/",
            link: "redis/",
            children: [
              { text: "Clients", icon: "edit", link: "clients" },
              { text: "Commands", icon: "edit", link: "commands" },
              { text: "Data structure", icon: "edit", link: "data-structure" },
            ],
          },
        ],
      },
    ],
  },
  {
    text: "Software Engineer",
    icon: "edit",
    prefix: "/se/",
    children: [
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
          "docker/",
          "k8s/",
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
      "tools/",
    ],
  },
  {
    text: "Course",
    icon: "note",
    prefix: "/course/",
    children: [
      {
        text: "Rec Sys",
        icon: "edit",
        link: "rec-sys/",
      },
      {
        text: "Deep Learning",
        icon: "edit",
        link: "deep-learning/",
      },
      {
        text: "Block Chain",
        icon: "edit",
        link: "block-chain/",
      },
      {
        text: "XR Tech",
        icon: "edit",
        link: "xr-tech/",
      },
    ],
  },
  {
    text: "Standardized",
    icon: "edit",
    prefix: "/apply/test/",
    children: [
      {
        text: "GRE",
        icon: "edit",
        prefix: "GRE/",
        children: [
          { text: "QUANTITATIVE", icon: "edit", link: "QUANTITATIVE" },
          { text: "VERBAL", icon: "edit", link: "VERBAL" },
        ],
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
        ],
      },
    ],
  },
]);
