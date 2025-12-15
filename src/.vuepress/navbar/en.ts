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
    icon: "brain", // 修改：用 brain 比 robot 更偏向算法/模型内核
    prefix: "/ai/",
    children: [
      {
        text: "Recommender System",
        // 修改：thumbs-up 代表“推荐/点赞”，或者用 'share-nodes'
        icon: "thumbs-up", 
        prefix: "rec-sys/",
        children: [
          {
            text: "Retrieval",
            // 修改：漏斗(filter)代表从海量数据中筛选出候选集，比放大镜更准确
            icon: "filter", 
            link: "retrieval/",
          },
          {
            text: "Pre-Ranking",
            // 修改：列表(list-ul)代表粗略的排序列表
            icon: "list-ul", 
            link: "pre-ranking/",
          },
          {
            text: "Ranking",
            // 修改：带有星号的排名(ranking-star)，代表精排、计算分数
            icon: "ranking-star", 
            link: "ranking/",
          },
          {
            text: "Re-Ranking",
            // 修改：滑块(sliders)，代表微调、多样性打散、业务规则干预
            icon: "sliders", 
            link: "re-ranking/",
          },
          {
            text: "Metrics",
            icon: "chart-line",
            link: "metrics/",
          },
        ]
      },
      {
        text: "Generative Models",
        // 修改：魔术棒(wand-magic-sparkles)是目前 GenAI 最通用的隐喻（生成/魔法）
        // 备选：'dna' (生成/变异) 或 'pen-nib' (文本生成)
        icon: "wand-magic-sparkles", 
        link: "gm/",
      }
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