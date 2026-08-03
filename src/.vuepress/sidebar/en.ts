import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/algo/": [
    "",
    {
      text: "Data Structures",
      icon: "layer-group",
      prefix: "data-structure/",
      children: "structure",
    },
    {
      text: "Search",
      icon: "magnifying-glass",
      prefix: "search/",
      children: "structure",
    },
    {
      text: "Optimization",
      icon: "gauge-high",
      prefix: "optimization/",
      children: "structure",
    },
    {
      text: "Study Tracks",
      icon: "graduation-cap",
      prefix: "course/",
      children: "structure",
    },
    {
      text: "Problem-Solving Framework",
      icon: "cubes",
      prefix: "framework/",
      children: "structure",
    },
    {
      text: "FAQ",
      icon: "circle-question",
      prefix: "faq/",
      children: "structure",
    },
  ],

  "/ai/": [
    "",
    {
      text: "Foundations",
      icon: "layer-group",
      prefix: "foundation/",
      children: "structure",
    },
    {
      text: "Generative AI",
      icon: "wand-magic-sparkles",
      prefix: "gm/",
      children: "structure",
    },
    {
      text: "AI Engineering",
      icon: "gears",
      prefix: "engineering/",
      children: "structure",
    },
    {
      text: "Recommender Systems",
      icon: "neural-network",
      prefix: "rec-sys/",
      children: "structure",
    },
    {
      text: "PyTorch",
      icon: "cube",
      prefix: "pytorch/",
      children: "structure",
    },
    {
      text: "Search Systems",
      icon: "magnifying-glass",
      prefix: "search/",
      children: "structure",
    },
    {
      text: "AI Evaluation",
      icon: "clipboard-check",
      prefix: "evaluation/",
      children: "structure",
    },
    {
      text: "AI Safety",
      icon: "shield-halved",
      prefix: "safety/",
      children: "structure",
    },
  ],

  "/cs/": [
    "",
    {
      text: "Systems Foundations",
      icon: "microchip",
      prefix: "core/",
      children: [
        "",
        {
          text: "Computer Networks",
          icon: "globe",
          link: "network/",
        },
        {
          text: "Operating Systems",
          icon: "server",
          link: "os/",
        },
      ],
    },
    {
      text: "Software & System Design",
      icon: "pen-ruler",
      prefix: "design/",
      children: [
        "",
        {
          text: "Object-Oriented Design",
          icon: "cubes-stacked",
          link: "ood/",
        },
        {
          text: "Design Patterns",
          icon: "palette",
          link: "pattern/",
        },
        {
          text: "System Design",
          icon: "sitemap",
          link: "system/",
        },
      ],
    },
  ],
  "/cs/core/": "structure",
  "/cs/design/": "structure",

  // =========================
  // Software Engineering
  // =========================
  "/se/": [
    "",
    {
      text: "Languages & Runtimes",
      icon: "code",
      prefix: "lang/",
      children: "structure",
    },
    {
      text: "Data Systems",
      icon: "database",
      prefix: "database/",
      children: "structure",
    },
    {
      text: "Middleware",
      icon: "network-wired",
      prefix: "middleware/",
      children: "structure",
    },
    {
      text: "DevOps & Infrastructure",
      icon: "infinity",
      prefix: "devops/",
      children: "structure",
    },
    {
      text: "Observability",
      icon: "chart-line",
      prefix: "monitor/",
      children: "structure",
    },
    {
      text: "Software Testing",
      icon: "vial",
      prefix: "test/",
      children: "structure",
    },
    {
      text: "Application Engineering",
      icon: "mobile-screen",
      prefix: "app/",
      children: "structure",
    },
    {
      text: "Engineering Tools",
      icon: "screwdriver-wrench",
      prefix: "tools/",
      children: "structure",
    },
  ],
  "/se/database/": "structure",
  "/se/lang/": "structure",
  "/se/middleware/": "structure",
  "/se/devops/": "structure",
  "/se/monitor/": "structure",
  "/se/test/": "structure",
  "/se/app/": "structure",

  // =========================
  // SE - Database (MySQL)
  // =========================
  // 注意：Navbar 中路径是 /se/database/mysql/，这里必须匹配
  "/se/database/mysql/": [
    "",
    {
      text: "Transaction", // 事务
      icon: "arrow-right-arrow-left", // 交换/事务图标
      prefix: "transaction/",
      children: "structure",
    },
    {
      text: "Index", // 索引
      icon: "list-ol", // 列表/索引图标
      prefix: "index/",
      children: "structure",
    },
    {
      text: "Engine", // 引擎
      icon: "gears", // 齿轮/引擎图标
      prefix: "engine/",
      children: "structure",
    },
    {
      text: "Lock", // 锁
      icon: "lock", // 锁图标
      prefix: "lock/",
      children: "structure",
    },
    {
      text: "Log", // 日志
      icon: "file-lines", // 文件行/日志图标
      prefix: "log/",
      children: "structure",
    },
  ],

  // =========================
  // SE - Database (Redis)
  // =========================
  "/se/database/redis/": "structure",

  // =========================
  // SE - Other Modules
  // =========================
  "/se/lang/java/": "structure",
  "/se/tools/": "structure",
  
  // =========================
  // SE - DevOps (Unix)
  // =========================
  "/se/devops/unix/": [
    "",
    {
      text: "Basics", // UNIX 基础
      icon: "terminal", // 终端图标
      prefix: "basic/",
      children: "structure",
    },
    {
      text: "Availability", // 可用性
      icon: "heart-pulse", // 心跳/高可用图标
      prefix: "availability/",
      children: "structure",
    },
  ],

  // =========================
  // Tests (TOEFL / GRE)
  // =========================
  "/test/": [
    "",
    {
      text: "TOEFL",
      icon: "language",
      prefix: "TOEFL/",
      children: "structure",
    },
    {
      text: "GRE",
      icon: "scroll",
      prefix: "GRE/",
      children: "structure",
    },
    {
      text: "Language Foundations",
      icon: "spell-check",
      prefix: "basics/",
      children: "structure",
    },
  ],
  "/test/TOEFL/": "structure",
  "/test/GRE/": "structure",

  // =========================
  // Course Archive
  // =========================
  "/education/": [
    "",
    {
      text: "Undergraduate Courses",
      icon: "school",
      link: "/education/bs/",
    },
    {
      text: "Graduate Courses",
      icon: "graduation-cap",
      link: "/education/ms/",
    },
  ],
  "/education/bs/": [
    "",
    { text: "AI Introduction", icon: "brain", link: "ai-intro/" },
    { text: "AI Technology", icon: "microchip", link: "ai-tech/" },
    { text: "Blockchain", icon: "link", link: "block-chain/" },
    { text: "Deep Learning", icon: "network-wired", link: "deep-learning/" },
    { text: "Discrete Mathematics", icon: "shapes", link: "discrete-math/" },
    { text: "Recommender Systems", icon: "thumbs-up", link: "rec-sys/" },
    { text: "XR Technology", icon: "vr-cardboard", link: "xr-tech/" },
  ],
  "/education/bs/ai-intro/": "structure",
  "/education/bs/ai-tech/": "structure",
  "/education/bs/block-chain/": "structure",
  "/education/bs/deep-learning/": "structure",
  "/education/bs/discrete-math/": "structure",
  "/education/bs/rec-sys/": "structure",
  "/education/bs/xr-tech/": "structure",
  "/education/ms/": [
    "",
    { text: "3D Computer Modeling", icon: "cube", link: "5005/" },
    { text: "Software Systems", icon: "server", link: "5050/" },
    { text: "Theory of Computation", icon: "infinity", link: "5110/" },
    { text: "Applied Machine Learning", icon: "brain", link: "5190/" },
    { text: "Engineering Entrepreneurship", icon: "rocket", link: "5450/" },
    { text: "Internet & Web Systems", icon: "globe", link: "5550/" },
    { text: "Computer Graphics", icon: "image", link: "5600/" },
    { text: "Computer Animation", icon: "person-running", link: "5620/" },
    { text: "Machine Perception", icon: "eye", link: "5800/" },
    { text: "Advanced Graphics", icon: "wand-magic-sparkles", link: "6600/" },
  ],
  "/education/ms/5005/": "structure",
  "/education/ms/5050/": "structure",
  "/education/ms/5110/": "structure",
  "/education/ms/5190/": "structure",
  "/education/ms/5450/": "structure",
  "/education/ms/5550/": "structure",
  "/education/ms/5600/": "structure",
  "/education/ms/5620/": "structure",
  "/education/ms/5800/": "structure",
  "/education/ms/6600/": "structure",

  // =========================
  // Personal Notes
  // =========================
  "/hobby/": [
    "",
    { text: "Devices & Home", icon: "laptop", link: "device/" },
    { text: "Minecraft", icon: "cubes", link: "minecraft/" },
    { text: "Palworld", icon: "gamepad", link: "palworld/" },
    { text: "Recipes", icon: "utensils", link: "recipe/" },
  ],
  "/hobby/device/": "structure",
  "/hobby/minecraft/": "structure",
  "/hobby/palworld/": "structure",
  "/hobby/recipe/": "structure",

  // Blog-generated pages and the portfolio homepage intentionally have no
  // content sidebar. More specific prefixes above continue to take priority.
  "/": false,
});
