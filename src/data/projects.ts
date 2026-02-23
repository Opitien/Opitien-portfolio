const IMAGES = {
  retro: "https://images.unsplash.com/photo-1669216202494-1fe1d0205ea5?q=80&w=1080",
  portfolio: "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?q=80&w=1080",
  cyberpunk: "https://images.unsplash.com/photo-1627827963179-a8bb14121eb4?q=80&w=1080",
};

export const projects = [
  {
    id: 1,
    title: "RetroWave Music",
    slug: "retrowave-music",
    subtitle: "Streaming Platform",
    description:
      "A nostalgic music streaming app with 80s aesthetics and modern functionality.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: IMAGES.retro,
    featured: true,
    external: "https://opitien.dev/projects/retrowave-music",
    repo: "https://github.com/opitien/retrowave-music",
  },
  {
    id: 2,
    title: "Minimal Portfolio",
    slug: "minimal-portfolio",
    subtitle: "Personal Site",
    description: "Pixel art inspired portfolio with smooth page transitions.",
    tags: ["Next.js", "Framer Motion"],
    image: IMAGES.portfolio,
    featured: false,
    external: "https://opitien.dev/projects/minimal-portfolio",
    repo: "https://github.com/opitien/minimal-portfolio",
  },
  {
    id: 3,
    title: "Neon Analytics",
    slug: "neon-analytics",
    subtitle: "Data Dashboard",
    description: "Cyberpunk-inspired data visualization dashboard.",
    tags: ["React", "D3.js"],
    image: IMAGES.cyberpunk,
    featured: false,
    external: "https://opitien.dev/projects/neon-analytics",
    repo: "https://github.com/opitien/neon-analytics",
  },
];

export type Project = typeof projects[number];

export default projects;
