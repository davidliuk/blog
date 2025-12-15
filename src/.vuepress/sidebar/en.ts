import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  // =========================
  // Algorithm 算法模块
  // =========================
  "/algo/": [
    "", // README.md
    {
      text: "Framework",
      icon: "cubes", // 对应 Navbar 的 Framework
      prefix: "framework/",
      children: "structure",
    },
    {
      text: "Data Structure",
      icon: "layer-group", // 对应 Navbar 的 Data Structure
      prefix: "data-structure/",
      children: "structure",
    },
    {
      text: "Search",
      icon: "magnifying-glass", // 对应 Navbar 的 Search
      prefix: "search/",
      children: "structure",
    },
    {
      text: "Optimization",
      icon: "gauge-high", // 对应 Navbar 的 Optimization
      prefix: "optimization/",
      children: "structure",
    },
    {
      text: "FAQ",
      icon: "circle-question", // 对应 Navbar 的 FAQ
      prefix: "faq/",
      children: "structure",
    },
  ],

  "/ai/": [
    {
      text: "Recommender System",
      icon: "neural-network", // 对应 Navbar 的 Recommender System
      prefix: "rec-sys/",
      children: "structure",
    },
  ],

  // =========================
  // CS Core & Design
  // =========================
  "/cs/core/": "structure",   // 自动生成 Network 和 OS 的侧边栏
  "/cs/design/": "structure", // 自动生成 Design Pattern 等侧边栏

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
  ],
});