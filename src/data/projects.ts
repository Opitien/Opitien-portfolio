const IMAGES = {
  bravax: "",
  sight: "https://www.sightstudio.co/_next/image?url=%2Fimages%2Fabout.png&w=3840&q=75",
  energeon: "https://energeon.vercel.app/img/bg.png",
  furnilux: "https://furnilux-store.vercel.app/images/hero-living-room.jpg",
  marion: "https://marion-store.vercel.app/images/asset_1.jpg",
};

export const projects = [
  {
    id: 1,
    title: "Bravax Technology Limited",
    slug: "bravax",
    subtitle: "Technology Company",
    description:
      "Bravax is a next generation creative agency built to empower brands and creators to shape bold digital experiences. The agency was founded for modern businesses and visionaries seeking to connect design, storytelling, and technology into a cohesive brand presence.",
    tags: ["HTML/CSS 3", "JavaScript", "WordPress"],
    image: IMAGES.bravax,
    video: "https://www.bravaxltd.com/assets/bravaxproduct.mp4", // Added video property
    featured: true,
    external: "https://www.bravaxltd.com/",
    repo: "https://github.com/pascal-tombere/Bravax",
  },
  {
    id: 2,
    title: "Sight Studio",
    slug: "sight-studio",
    subtitle: "Studio Portfolio",
    description: "Sight Studio is a boutique design studio based in Warri, crafting brand identities for startups and global brands that are impossible to ignore. The studio was built to bridge strategy and storytelling—helping small businesses connect with the right audience, tell compelling stories, and grow through purpose-driven design.",
    tags: ["Next.js","React","Bootstrap","Framer Motion","Typescript"],
    image: IMAGES.sight,
    featured: false,
    external: "https://sightstudio.co/",
    repo: "https://github.com/southcircl/sightstudio",
  },
  {
    id: 3,
    title: "Energeon",
    slug: "energeon",
    subtitle: "Energy Products Landing Page",
    description: "Energeon is an online store offering high-quality nutritional products and supplements. From vitamins and minerals to superfoods and protein powders, we provide a variety of products to support your health and wellness goals.",
    tags: ["HTML/CSS 3", "JavaScript", "Bootstrap"],
    image: IMAGES.energeon,
    featured: false,
    external: "https://energeon.vercel.app/",
    repo: "https://github.com/Opitien/Energeon",
  },
    {
    id: 4,
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
    id: 5,
    title: "Marion",
    slug: "marion",
    subtitle: "Marion Boutique",
    description: "Marion is a boutique store offering high-quality fashion and lifestyle products. The store features curated collections of clothing, accessories, and home goods designed to elevate your everyday style.",
    tags: ["vite", "Tailwind CSS", "Framer Motion", "Typescript"],
    image: IMAGES.marion,
    featured: false,
    external: "https://marion-store.vercel.app/",
    repo: "https://github.com/opitien/marion",
  },
];

export type Project = typeof projects[number];

export default projects;
