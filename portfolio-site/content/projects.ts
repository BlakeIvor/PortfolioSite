export const projects = [
  {
    slug: "mixed-reality-headset",
    title: "Mixed Reality Headset Prototype",
    tech: "Python, OpenCV, Raspberry Pi",
    description:
      "Engineered a Raspberry Pi-based MR headset with YOLO detection and UDP networking.",
    screenshot: "/static/images/mixed-reality-headset.png",
    featured: true
  },
  {
    slug: "inventory-management",
    title: "Inventory Management Web App",
    tech: "Python, Django, PostgreSQL, Docker",
    description:
      "Built a CRUD-based web app for managing DnD inventories with persistent storage.",
    screenshot: "/static/images/inventory-app.png",
    featured: true
  },
  {
    slug: "microblog",
    title: "Microblog Platform",
    tech: "Next.js, TypeScript, Tailwind, Prisma, PostgreSQL",
    description:
      "Built a fully-featured microblog platform with real-time posts, user authentication, and responsive design.",
    features: [
      "Create, edit, delete, and comment on posts",
      "User authentication and session management",
      "Responsive design with Tailwind CSS",
      "Deployed on Vercel with PostgreSQL backend"
    ],
    demoUrl: "https://your-microblog-demo.vercel.app",
    repoUrl: "https://github.com/BlakeIvor/FlaskMicroBlog",
    screenshot: "/static/images/microblog-hero.png",
    featured: true
  }
];
