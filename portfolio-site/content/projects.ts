export const projects = [
  {
    slug: "mixed-reality-headset",
    title: "Mixed Reality Headset Prototype",
    tech: "Python, OpenCV, Raspberry Pi",
    description:
      "Engineered a Raspberry Pi-based MR headset with YOLO detection and UDP networking.",
    screenshot: "/static/images/mixed-reality-headset.png",
    thumbnail: "/static/images/mixed-reality-headset.png",
    featured: true
  },
  {
    slug: "inventory-management",
    title: "Inventory Management Web App",
    tech: "Python, Django, PostgreSQL, Docker",
    description:
      "Built a CRUD-based web app for managing DnD inventories with persistent storage.",
    screenshot: "/static/images/inventory-app.png",
    thumbnail: "/static/images/inventory-app.png",
    featured: true
  },
  {
    slug: "microblog",
    title: "Flask Microblog Platform",
    tech: "Flask, SQLAlchemy, Boostrap, SQLite",
    description:
      "Built a fully-featured microblog platform with real-time posts, user authentication, and responsive design.",
    features: [
      "Create, edit, and delete posts",
      "Commenting system",
      "User authentication and session management",
      "Responsive design with Bootstrap",
      "SQLite database for persistent storage"
    ],
    demoUrl: "https://your-microblog-demo.vercel.app",
    repoUrl: "https://github.com/BlakeIvor/FlaskMicroBlog",
    screenshot: "/static/images/microblog-hero.png",
    thumbnail: "/static/images/microblog-hero.png",
    featured: true
  },
  {
    slug: "meltdown",
    title: "Meltdown",
    tech: "C#, Unity",
    description:
      "A fast-paced side scroller mining game created in 48 hours for a game jam. Dig, dodge, and survive as you descend into the depths!",
    features: [
      "Procedurally generated levels",
      "Mining and resource collection",
      "Hazards and obstacles",
      "Power-ups and upgrades",
      "Game jam project (48 hours)"
    ],
    demoUrl: "https://blaika.itch.io/downfall",
    screenshot: "/static/images/meltdown.png",
    thumbnail: "/static/images/meltdown.png",
    featured: true
  }
];
