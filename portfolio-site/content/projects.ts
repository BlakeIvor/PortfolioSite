export const projects = [
  {
    slug: "mixed-reality-headset",
    title: "Mixed Reality Headset",
    tech: "Python, OpenCV, Raspberry Pi",
    description:
      "Raspberry Pi-based MR headset with YOLO detection, real-time server-side analysis, and UDP networking.",
    screenshot: "/static/images/mixed-reality-headset.png",
    thumbnail: "/static/images/mixed-reality-headset.png",
    featured: true
  },
  {
    slug: "inventory-management",
    title: "Inventory Management App",
    tech: "Python, Django, PostgreSQL, Docker",
    description:
      "CRUD-based web app for managing DnD character inventories with easily viewable persistent storage.",
    screenshot: "/static/images/inventory-app.png",
    thumbnail: "/static/images/inventory-app.png",
    featured: true
  },
  {
    slug: "Microblog",
    title: "Flask Microblog Platform",
    tech: "Flask, SQLAlchemy, Bootstrap, SQLite",
    description:
      "Fully-featured microblog platform with real-time posts, user authentication, and responsive design.",
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
      "Atmospheric side scroller mining game created in 48 hours. Dig, dodge, and survive as you descend into the depths!",
    features: [
      "Procedurally generated levels",
      "Mining and resource collection",
      "Hazards and obstacles",
      "Power-ups and upgrades",
      "Game jam project (48 hours)"
    ],
    demoUrl: "https://blaika.itch.io/downfall",
    screenshot: "/static/images/meltdown-gameplay.png",
    thumbnail: "/static/images/meltdown.png",
    featured: true
  }
  ,{
    slug: "starbound-wanderers",
    title: "Starbound Wanderers",
    tech: "C#, Unity, PlasticSCM",
    description:
      "Top-down isometric narrative adventure game made in Unity. Worked on combat, UI, pathing algorithms, and optimization.",
    features: [
      "A* pathfinding for NPCs",
      "Queue, lock, and thread systems for optimizing performance (decreasing per-frame impact and utilizing n-frame operation technique)",
      "Enemy AI state systems",
      "Inventory and UI systems",
      "Demo'd at PAX East 2023"
    ],
    demoUrl: "https://kyaneos.itch.io/starbound-wanderers",
    screenshot: "/static/images/starbound.png",
    thumbnail: "/static/images/starbound.png",
    featured: true
  },
  {
    slug: "bellicose",
    title: "Bellicose Fighting",
    tech: "C#, Unity, Git",
    description:
      "2D fighting game using new Unity Input System with local multiplayer and multiple characters. Developed character state machines and multi-device input buffering.",
    features: [
      "Character state machines",
      "Input buffering",
      "Attack system",
    ],
    demoUrl: "https://blaika.itch.io/bellicose-ultimate-fighting",
    screenshot: "/static/images/bellicose.png",
    thumbnail: "/static/images/bellicose.png",
    featured: true
  }
];
