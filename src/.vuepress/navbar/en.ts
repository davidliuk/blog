import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Algorithm",
    icon: "sitemap",
    prefix: "/algo",
    children: [
      {
        text: "Framework",
        icon: "cubes",
        link: "framework/",
      },
      {
        text: "Data Structure",
        icon: "layer-group",
        prefix: "data-structure/",
        children: [
          // 数组/链表通常是线性的，用条形图表示
          { text: "Linear", icon: "bars", link: "linear/" },
          // 树形结构
          { text: "Tree", icon: "network-wired", link: "tree/" },
          // 图论，节点连接
          { text: "Graph", icon: "circle-nodes", link: "graph/" },
          // 集合，包含关系
          { text: "Set", icon: "object-group", link: "set/" },
        ]
      },
      {
        text: "Search",
        icon: "magnifying-glass",
        prefix: "search/",
        children: [
          // 深度优先：向下箭头
          { text: "DFS", icon: "arrow-down-long", link: "DFS/" },
          // 广度优先：波纹/层级扩散
          { text: "BFS", icon: "wifi", link: "BFS/" },
          // 循环/迭代/暴力：循环图标
          { text: "FOR", icon: "rotate", link: "FOR/" },
        ]
      },
      {
        text: "Optimization",
        icon: "gauge-high",
        prefix: "optimization/",
        children: [
          // 减治法：剪刀（把问题剪小）或压缩
          { text: "Decrease & Conquer", icon: "scissors", link: "decrease-conquer/" },
          // 动态规划：通常涉及填表
          { text: "Dynamic Programming", icon: "table", link: "dynamic-programming/" },
          // 数学：平方根符号或计算器
          { text: "Math", icon: "square-root-variable", link: "math/" },
        ]
      },
      {
        text: "FAQ",
        icon: "circle-question",
        link: "faq/",
      },
    ],
  },
  {
    text: "Computer Science",
    icon: "laptop-code",
    prefix: "/cs/",
    children: [
      {
        text: "Core",
        icon: "microchip",
        prefix: "core/",
        children: [
          {
            text: "Network",
            icon: "network-wired",
            link: "network/",
          },
          {
            text: "Operating System",
            icon: "hard-drive",
            link: "os/",
          },
        ],
      },
      {
        text: "Design",
        icon: "pen-ruler",
        prefix: "design/",
        children: [
          {
            text: "Design Pattern",
            icon: "puzzle-piece",
            link: "pattern/",
          },
          {
            text: "Object-Oriented Design",
            icon: "object-group",
            link: "ood/",
          },
          {
            text: "System Design",
            icon: "server",
            link: "system/",
          },
        ],
      },
    ],
  },
  {
    text: "Engineering",
    icon: "gears",
    prefix: "/se/",
    children: [
      {
        text: "Database",
        icon: "database",
        prefix: "database/",
        children: [
          {
            text: "MySQL",
            icon: "table", 
            link: "mysql/",
          },
          {
            text: "Redis",
            icon: "memory", 
            link: "redis/",
          },
        ],
      },
      {
        text: "Lang",
        icon: "code",
        prefix: "lang/",
        children: [
          {
            text: "Java",
            icon: "mug-hot",
            link: "java/",
          },
        ],
      },
      {
        text: "DevOps",
        icon: "infinity",
        prefix: "devops/",
        children: [
          {
            text: "Unix",
            icon: "terminal",
            link: "unix/",
          },
        ],
      },
      // 工具：扳手/工具箱
      {
        text: "Tools",
        icon: "screwdriver-wrench",
        link: "tools/",
      },
    ],
  },
  {
    text: "Tests",
    icon: "graduation-cap",
    prefix: "/test/",
    children: [
      {
        text: "TOEFL",
        icon: "language",
        prefix: "TOEFL/",
        children: [
          { text: "LISTENING", icon: "headphones", link: "LISTENING/" },
          { text: "READING", icon: "book-open", link: "READING/" },
          { text: "SPEAKING", icon: "microphone", link: "SPEAKING/" },
          { text: "WRITING", icon: "pen-nib", link: "WRITING/" },
        ],
      },
      {
        text: "GRE",
        icon: "scroll",
        prefix: "GRE/",
        children: [
          { text: "QUANTITATIVE", icon: "calculator", link: "QUANTITATIVE/" },
          { text: "VERBAL", icon: "font", link: "VERBAL/" },
        ],
      },
    ],
  },
]);