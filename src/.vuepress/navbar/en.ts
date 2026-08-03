import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Algorithms",
    icon: "sitemap",
    prefix: "/algo/",
    children: [
      {
        text: "Overview",
        icon: "compass",
        link: "",
      },
      {
        text: "Data Structures",
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
        text: "Study Tracks",
        icon: "graduation-cap",
        prefix: "course/",
        children: [
          { text: "JZ Track", icon: "road", link: "jz/" },
        ],
      },
      {
        text: "Problem-Solving Framework",
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
  {
    text: "AI Systems",
    icon: "brain",
    prefix: "/ai/",
    children: [
      {
        text: "Overview",
        icon: "compass",
        link: "",
      },
      {
        text: "Foundations",
        icon: "layer-group",
        prefix: "foundation/",
        children: [
          { text: "Overview", icon: "map", link: "" },
          { text: "Classical ML", icon: "chart-simple", link: "classical-ml/" },
          { text: "Deep Learning", icon: "network-wired", link: "dl/" },
          { text: "Language Models", icon: "font", link: "lm/" },
          { text: "Reinforcement Learning", icon: "gamepad", link: "rl/" },
        ],
      },
      {
        text: "Generative AI",
        icon: "wand-magic-sparkles",
        prefix: "gm/",
        children: [
          { text: "Overview", icon: "map", link: "" },
          { text: "Text & Pre-Training", icon: "font", link: "text/" },
          { text: "Training Systems", icon: "graduation-cap", link: "training/" },
          { text: "Alignment", icon: "scale-balanced", link: "training/alignment/" },
          { text: "Inference", icon: "bolt", link: "inference/" },
          { text: "Multimodal", icon: "images", link: "multimodal/" },
          { text: "RAG", icon: "book-open", link: "application/rag/" },
          { text: "Agents", icon: "robot", link: "application/agent/" },
        ],
      },
      {
        text: "AI Engineering",
        icon: "gears",
        link: "engineering/",
      },
      {
        text: "Recommender Systems",
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
        text: "PyTorch",
        icon: "cube",
        link: "pytorch/",
      },
      {
        text: "Search Systems",
        icon: "magnifying-glass",
        link: "search/",
      },
      {
        text: "AI Evaluation",
        icon: "clipboard-check",
        link: "evaluation/",
      },
      {
        text: "AI Safety",
        icon: "shield-halved",
        link: "safety/",
      },
    ],
  },
  {
    text: "CS Foundations",
    icon: "laptop-code",
    prefix: "/cs/",
    children: [
      {
        text: "Overview",
        icon: "compass",
        link: "",
      },
      {
        text: "Systems Foundations",
        icon: "microchip",
        prefix: "core/",
        children: [
          {
            text: "Computer Networks",
            icon: "globe",
            link: "network/",
          },
          {
            text: "Operating System",
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
          {
            text: "Design Pattern",
            icon: "palette",
            link: "pattern/",
          },
          {
            text: "Object-Oriented Design",
            icon: "cubes-stacked",
            link: "ood/",
          },
          {
            text: "System Design",
            icon: "sitemap",
            link: "system/",
          },
        ],
      },
    ],
  },
  {
    text: "Software Engineering",
    icon: "gears",
    prefix: "/se/",
    children: [
      {
        text: "Overview",
        icon: "compass",
        link: "",
      },
      {
        text: "Languages & Runtimes",
        icon: "code",
        prefix: "lang/",
        children: [
          { text: "Overview", icon: "map", link: "" },
          { text: "Java", icon: "mug-hot", link: "java/" },
          { text: "Python", icon: "code", link: "python/" },
          { text: "Go", icon: "code", link: "golang/" },
          { text: "C++", icon: "code", link: "cpp/" },
        ],
      },
      {
        text: "Data Systems",
        icon: "database",
        prefix: "database/",
        children: [
          { text: "Overview", icon: "map", link: "" },
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
          { text: "MongoDB", icon: "leaf", link: "mongodb/" },
          { text: "SQL", icon: "terminal", link: "sql/" },
        ],
      },
      {
        text: "Middleware",
        icon: "network-wired",
        prefix: "middleware/",
        children: [
          { text: "Overview", icon: "map", link: "" },
          { text: "Kafka", icon: "envelopes-bulk", link: "mq/kafka/" },
          { text: "RabbitMQ", icon: "envelope", link: "mq/rabbitmq/" },
          { text: "Elasticsearch", icon: "magnifying-glass", link: "es/" },
          { text: "Nginx", icon: "route", link: "nginx/" },
        ],
      },
      {
        text: "Delivery & Operations",
        icon: "infinity",
        prefix: "devops/",
        children: [
          { text: "Overview", icon: "map", link: "" },
          { text: "Unix", icon: "terminal", link: "unix/" },
          { text: "Docker", icon: "box", link: "docker/" },
          { text: "Kubernetes", icon: "dharmachakra", link: "k8s/" },
          { text: "CI/CD", icon: "arrows-rotate", link: "cicd/" },
        ],
      },
      {
        text: "Quality & Tooling",
        icon: "toolbox",
        children: [
          { text: "Observability", icon: "chart-line", link: "monitor/" },
          { text: "Software Testing", icon: "vial", link: "test/" },
          { text: "Engineering Tools", icon: "screwdriver-wrench", link: "tools/" },
        ],
      },
    ],
  },
  {
    text: "Test Prep",
    icon: "graduation-cap",
    prefix: "/test/",
    children: [
      {
        text: "Overview",
        icon: "compass",
        link: "",
      },
      {
        text: "TOEFL iBT",
        icon: "language",
        prefix: "TOEFL/",
        children: [
          { text: "Overview", icon: "map", link: "" },
          { text: "Reading", icon: "book-open", link: "READING/" },
          { text: "Listening", icon: "headphones", link: "LISTENING/" },
          { text: "Speaking", icon: "microphone", link: "SPEAKING/" },
          { text: "Writing", icon: "pen-nib", link: "WRITING/" },
        ],
      },
      {
        text: "GRE General Test",
        icon: "scroll",
        prefix: "GRE/",
        children: [
          { text: "Overview", icon: "map", link: "" },
          { text: "Verbal", icon: "font", link: "VERBAL/" },
          { text: "Quantitative", icon: "calculator", link: "QUANTITATIVE/" },
          { text: "Analytical Writing", icon: "pen", link: "aw/" },
        ],
      },
      {
        text: "Language Foundations",
        icon: "spell-check",
        link: "basics/",
      },
    ],
  },
  {
    text: "Archive",
    icon: "box-archive",
    children: [
      {
        text: "Course Notes",
        icon: "graduation-cap",
        link: "/education/",
      },
      {
        text: "Personal Notes",
        icon: "heart",
        link: "/hobby/",
      },
      {
        text: "All Articles",
        icon: "newspaper",
        link: "/article/",
      },
      {
        text: "Tags",
        icon: "tags",
        link: "/tag/",
      },
    ],
  },
]);
