import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Algorithm",
    icon: "sitemap",
    prefix: "/algo/",
    children: [
      {
        text: "Overview",
        icon: "compass",
        link: "",
      },
      {
        text: "Data Structure",
        icon: "layer-group",
        prefix: "data-structure/",
        children: [
          { text: "Linear", icon: "bars", link: "linear/" },
          { text: "Tree", icon: "network-wired", link: "tree/" },
          { text: "Graph", icon: "circle-nodes", link: "graph/" },
          { text: "Set", icon: "object-group", link: "set/" },
        ]
      },
      {
        text: "Search",
        icon: "magnifying-glass",
        prefix: "search/",
        children: [
          { text: "DFS", icon: "arrow-down-long", link: "DFS/" },
          { text: "BFS", icon: "wifi", link: "BFS/" },
          { text: "FOR", icon: "rotate", link: "FOR/" },
        ]
      },
      {
        text: "Optimization",
        icon: "gauge-high",
        prefix: "optimization/",
        children: [
          { text: "Decrease & Conquer", icon: "scissors", link: "decrease-conquer/" },
          { text: "Dynamic Programming", icon: "table", link: "dynamic-programming/" },
          { text: "Math", icon: "square-root-variable", link: "math/" },
        ]
      },
      {
        text: "Course",
        icon: "graduation-cap",
        prefix: "course/",
        children: [
          { text: "JZ Track", icon: "road", link: "jz/" },
        ],
      },
      {
        text: "Framework",
        icon: "cubes",
        link: "framework/",
      },
      {
        text: "FAQ",
        icon: "circle-question",
        link: "faq/",
      },
    ],
  },
  // ---------------------------------------------------------
  // 重点修改区域：AI & Generative Models
  // ---------------------------------------------------------
  {
    text: "AI",
    icon: "brain",
    prefix: "/ai/",
    children: [
      {
        text: "Overview",
        icon: "compass",
        link: "",
      },
      {
        text: "Foundation",
        icon: "layer-group",
        link: "foundation/",
      },
      {
        text: "Recommender System",
        icon: "thumbs-up",
        prefix: "rec-sys/",
        children: [
          {
            text: "Retrieval",
            icon: "filter",
            link: "retrieval/",
          },
          {
            text: "Pre-Ranking",
            icon: "list-ul",
            link: "pre-ranking/",
          },
          {
            text: "Ranking",
            icon: "ranking-star",
            link: "ranking/",
          },
          {
            text: "Re-Ranking",
            icon: "sliders",
            link: "re-ranking/",
          },
          {
            text: "Metrics",
            icon: "chart-line",
            link: "metrics/",
          },
          {
            text: "Cold Start",
            icon: "seedling",
            link: "cold-start/",
          },
        ]
      },
      {
        text: "Generative Models",
        icon: "wand-magic-sparkles",
        prefix: "gm/",
        children: [
          {
            text: "Overview",
            icon: "map",
            link: "",
          },
          {
            text: "Fine-Tuning",
            icon: "graduation-cap",
            link: "training/fine-tuning/",
          },
          {
            text: "Alignment",
            icon: "scale-balanced",
            link: "training/alignment/",
          },
          {
            text: "Inference",
            icon: "bolt",
            link: "inference/",
          },
          {
            text: "Multimodal",
            icon: "images",
            link: "multimodal/",
          },
          {
            text: "Application",
            icon: "screwdriver-wrench",
            link: "application/",
          },
        ],
      },
      {
        text: "PyTorch",
        icon: "cube",
        link: "pytorch/",
      },
      {
        text: "Search",
        icon: "magnifying-glass",
        link: "search/",
      },
    ],
  },
  // ---------------------------------------------------------
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
            icon: "globe", // 修改：用 globe 代表互联网/网络更直观
            link: "network/",
          },
          {
            text: "Operating System",
            icon: "server", // 修改：用 server 代表底层系统资源管理
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
            icon: "palette", // 修改：调色板代表模式的组合
            link: "pattern/",
          },
          {
            text: "Object-Oriented Design",
            icon: "cubes-stacked", // 修改：堆叠方块代表对象封装与组合
            link: "ood/",
          },
          {
            text: "System Design",
            icon: "sitemap", // 架构图
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