import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Computer Science",
    icon: "edit",
    prefix: "/cs/",
    children: [
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
      {
        text: "Basic",
        icon: "edit",
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
        text: "Algorithm",
        icon: "edit",
        prefix: "algo/",
        children: [
          {
            text: "Basic",
            icon: "edit",
            link: "basic/",
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
        text: "Framework",
        icon: "edit",
        prefix: "framework/",
        children: [
          {
            text: "Spring",
            icon: "edit",
            link: "spring/",
          },
          {
            text: "ORM",
            icon: "edit",
            link: "orm/",
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
            text: "System design",
            icon: "edit",
            link: "system-design/",
          },
          // "system-design/",
          {
            text: "OOD",
            icon: "edit",
            link: "ood/",
          },
        ],
      },
      "tools/",
    ],
  },
  {
    text: "AI ",
    icon: "note",
    prefix: "/ai/",
    children: [
      {
        text: "RS",
        icon: "edit",
        link: "rs/",
      },
    ],
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
