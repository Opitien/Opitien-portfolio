const IMAGES = {
  bravax: "",
  bigdev: "https://www.thebigdev.co/thebigdev-socialimage.png",
  atuzor:"https://www.atuzor.com/images/thumbnail.png",
  sight: "https://www.sightstudio.co/_next/image?url=%2Fimages%2Fabout.png&w=3840&q=75",
  energeon: "https://energeon.vercel.app/img/bg.png",
  furnilux: "https://furnilux-store.vercel.app/images/hero-living-room.jpg",
  marion: "https://marion-store.vercel.app/images/asset_1.jpg",
  westbridge: "https://westbridge-university-portal.vercel.app/assets/hero-campus-DBQS9EPb.jpg",
  theironloaf:"https://images.unsplash.com/photo-1572125345941-a0687d65b989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFrZXJ5JTIwd29ya2VycyUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDYzNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  aidera: "https://opitien.vercel.app/images/aidera-frontend.jpeg",
};

export const projects = [
  {
  id: 1,
  title: "Big Dev",
  slug: "big-dev",
  subtitle: "Big Dev",
  description: "Big Dev is a digital execution brand based in Lagos, built for ambitious businesses ready to scale with intent.",
  tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Vite"],
  image: IMAGES.bigdev,
  featured: true,
  external: "https://thebigdev.co",
  repo: "",
},
{
  id: 2,
  title: "Atuzor",
  slug: "atuzor",
  subtitle: "Atuzor",
  description: "Atuzor is an all-in-one platform that helps you start, manage, and grow your business from a single dashboard from registration to compliance and daily operations.",
  tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  image: IMAGES.atuzor,
  featured: false,
  external: "https://atuzor.com",
  repo: "",
},

{
  id: 3,
  title: "Aidera",
  slug: "aidera",
  subtitle: "Aidera AI Health Assistant",
  description: "Aidera is an AI-powered healthcare assistant designed to simplify access to medical information through an intuitive ChatGPT-style interface. The platform combines a modern landing page with an interactive chat experience, providing users with accessible health guidance in a clean, responsive environment.",
  tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "HealthTech"],
  image: IMAGES.aidera,
  featured: false,
  external: "https://aidera-frontend.vercel.app/",
  repo: "https://github.com/opitien/Aidera-frontend",
},

{
  id: 4,
    title: "Westbridge",
  slug: "westbridge",
  subtitle: "Westbridge University Portal",
  description: "Westbridge University Portal is a modern university management system designed to streamline academic operations. The platform provides role-based dashboards for students, lecturers, and administrators to manage course registration, academic records, assignments, results, notifications, and campus communication within a secure and scalable digital environment.",
  tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
  image: IMAGES.westbridge,
  featured: false,
  external: "https://westbridge-university-portal.vercel.app/",
  repo: "https://github.com/opitien/Westbridge-University-Portal",
},


{
  id: 6,
  title: "FurniLux",
  slug: "furnilux",
  subtitle: "Furniture Store",
  description: "FurniLux offers a curated selection of stylish, affordable furniture designed to transform your living space. From modern sofas to elegant bedroom sets, we provide quality pieces that blend comfort and sophistication for every home.",
  tags: ["React", "Tailwind CSS", "Framer Motion", "Typescript"],
  image: IMAGES.furnilux,
  featured: false,
  external: "https://furnilux-store.vercel.app/",
  repo: "https://github.com/Opitien/furnilux-furniture-shop",
},

{
  id: 7,
  title: "Marion",
  slug: "marion",
  subtitle: "Marion Boutique",
  description: "Marion is a boutique store offering high-quality fashion and lifestyle products. The store features curated collections of clothing, accessories, and home goods designed to elevate your everyday style.",
  tags: ["Vite", "Tailwind CSS", "Framer Motion", "Typescript"],
  image: IMAGES.marion,
  featured: false,
  external: "https://marion-store.vercel.app/",
  repo: "https://github.com/opitien/marion",
},

{
  id: 8,
  title: "Iron Loaf",
  slug: "iron-loaf",
  subtitle: "The Iron Loaf",
  description: "The Iron Loaf is a vintage-inspired industrial bakery website concept designed with a 1905 newspaper aesthetic. The project recreates the feel of early print media while delivering a modern responsive web experience.",
  tags: ["React", "Vite", "Tailwind CSS", "TypeScript"],
  image: IMAGES.theironloaf,
  featured: false,
  external: "https://the-iron-loaf.vercel.app/",
  repo: "https://github.com/opitien/The-Iron-Loaf",
},
/*
{
  id: 8,
  title: "Energeon",
  slug: "energeon",
  subtitle: "Energy Products Landing Page",
  description: "Energeon is an online store offering high-quality nutritional products and supplements designed to support health and wellness goals.",
  tags: ["HTML/CSS 3", "JavaScript", "Bootstrap"],
  image: IMAGES.energeon,
  featured: false,
  external: "https://energeon.vercel.app/",
  repo: "https://github.com/Opitien/Energeon",
},

{
  id: 10,
  title: "Bravax Technology Limited",
  slug: "bravax",
  subtitle: "Technology Company",
  description: "Bravax is a next generation creative agency built to empower brands and creators to shape bold digital experiences by combining design, storytelling, and technology.",
  tags: ["HTML/CSS 3", "JavaScript", "WordPress"],
  image: IMAGES.bravax,
  video: "https://www.bravaxltd.com/assets/bravaxproduct.mp4",
  featured: false,
  external: "https://www.bravaxltd.com/",
  repo: "",
}, */
{
  id: 10,
  title: "Sight Studio",
  slug: "sight-studio",
  subtitle: "Studio Portfolio",
  description: "Sight Studio is a boutique design studio based in Warri, crafting brand identities for startups and global brands that are impossible to ignore. The studio bridges strategy and storytelling—helping small businesses connect with the right audience and grow through purpose-driven design.",
  tags: ["Next.js","React","Bootstrap","Framer Motion","Typescript"],
  image: IMAGES.sight,
  featured: false,
  external: "https://sightstudio.co/",
  repo: "",
},
];


export type Project = typeof projects[number];

export default projects;
