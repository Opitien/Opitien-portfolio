export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-retro-futuristic-interfaces",
    title: "Designing Retro-Futuristic Interfaces",
    excerpt:
      "How I blend CRT nostalgia, analog textures, and modern UX patterns into production-ready interfaces.",
    content: [
      "I have always been fascinated by the tension between old and new interfaces: CRT monitors, blinking LEDs, and chunky plastic bezels sitting beside ultra-thin displays and high-density typography.",
      "When designing retro-futuristic interfaces for the web, the goal is not to cosplay the past—it is to borrow its character while still shipping a fast, accessible, and maintainable UI.",
      "In practice, this means isolating the \"retro\" layer into visuals: grain overlays, scanlines, chunky borders, and playful microcopy. Underneath, the layout still follows a sensible grid, typography scales cleanly across breakpoints, and the component API remains predictable.",
      "This portfolio is built with that philosophy: a modern React stack wrapped in a layer of intentional nostalgia.",
    ].join("\n\n"),
    image: "https://opitien.dev/og-image.svg",
    date: "2025-10-01",
  },
  {
    slug: "building-delightful-frontend-experiences",
    title: "Building Delightful Frontend Experiences",
    excerpt:
      "Small details compound into a feeling of quality—here is how I approach animations, interactions, and feedback loops.",
    content: [
      "Delight in interfaces rarely comes from one huge animation or a single clever trick. It is the accumulation of dozens of tiny decisions: easing curves, hover delays, sound design, and how fast the UI recovers from errors.",
      "I like to design these experiences as \"loops\". Every user action should produce a clear reaction from the system: a visual state change, a motion hint, or a subtle sound. When those loops are consistent, the interface feels alive but still reliable.",
      "From a technical perspective, this often means leaning on composable primitives—utility components for buttons, cards, and overlays that can express multiple states without rewriting styles each time.",
      "The end result is a UI that feels expressive without sacrificing performance, readability, or accessibility.",
    ].join("\n\n"),
    image: "https://opitien.dev/og-image.svg",
    date: "2025-09-12",
  },
  {
    slug: "shipping-portfolios-that-feel-like-products",
    title: "Shipping Portfolios That Feel Like Products",
    excerpt:
      "A portfolio should behave like a real product: robust routing, SEO, performance budgets, and maintainable content structures.",
    content: [
      "I treat portfolio sites as real products. They deserve proper routing, error boundaries, analytics, and an information architecture that can grow over time.",
      "Instead of hard-coding content directly into components, I prefer defining a simple data layer—like a typed blog collection—so that UI and content evolve independently.",
      "SEO is not an afterthought either. Each page and article gets dedicated meta tags, human-readable URLs, and predictable content structure so search engines and humans can both understand the site.",
      "This approach makes it much easier to extend the site with new pages, experiments, or case studies without rewriting the entire codebase.",
    ].join("\n\n"),
    image: "https://opitien.dev/og-image.svg",
    date: "2025-08-03",
  },
];

export type Blog = (typeof blogPosts)[number];

export default blogPosts;

