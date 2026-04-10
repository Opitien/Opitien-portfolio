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
    image: "https://i.pinimg.com/1200x/cc/e7/38/cce7385fae5899e7016985d87b482c15.jpg",
    date: "2026-04-01",
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
    image: "https://i.pinimg.com/736x/9d/75/b3/9d75b350dd0802836cb1b5a1fb7fdc1f.jpg",
    date: "2026-02-25",
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
    image: "https://i.pinimg.com/1200x/d8/fa/79/d8fa791dbd9bbfe936ae8302f770dcc4.jpg",
    date: "2026-02-25",
  },
  {
  slug: "designing-accessible-web-interfaces",
  title: "Designing Accessible Web Interfaces",
  excerpt:
    "How I ensure every interface is usable, readable, and enjoyable for all users, regardless of ability.",
  content: [
    "Accessibility isn’t just a checklist—it’s a mindset. Every color choice, keyboard interaction, and semantic element contributes to a better experience for everyone.",
    "I prioritize readable typography, sufficient color contrast, and predictable navigation patterns so that users with varying abilities can interact seamlessly with the UI.",
    "Form validation, focus states, and ARIA attributes are baked into the design system, making accessibility a first-class concern rather than an afterthought.",
    "By integrating accessibility from the start, the interfaces are not only compliant but also more usable, consistent, and delightful for all users.",
  ].join("\n\n"),
  image: "https://i.pinimg.com/1200x/bd/0b/bf/bd0bbf74f1f7f49b75fdda9a54b11c4b.jpg",
  date: "2026-02-25",
},
{
  slug: "websites-as-high-performance-instruments",
  title: "Websites as High-Performance Instruments",
  excerpt:
    "Moving beyond pure aesthetics to build digital tools that prioritize utility, friction-less flow, and technical precision.",
  content: [
    "Too many websites are designed merely to be looked at—I prefer to build sites that are meant to be used. A website should function as a high-performance instrument: an interface that empowers the user to achieve their objective with zero wasted motion.",
    "I approach digital ergonomics by stripping away the ornamental noise. Whether it's a documentation hub or a complex dashboard, the design must prioritize the 'user-as-operator'. This means every button, input, and transition is tuned for tactile feedback and cognitive ease.",
    "In my workflow, this results in layouts that feel intentional rather than trendy. We prioritize predictable navigation, purposeful typography, and a hierarchy that respects the user's intent. The goal is an interface that disappears, leaving only the task at hand.",
    "A tool-centric website is an asset that scales. It doesn't just look premium—it delivers measurable value by reducing friction and building deep technical trust with every interaction.",
  ].join("\n\n"),
  image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  date: "2026-04-10",
},
{
  slug: "architecting-living-design-systems",
  title: "Architecting Living Design Systems",
  excerpt:
    "How I build scalable foundations that balance rigid technical constraints with creative flexibility.",
  content: [
    "A design system is not a static library; it is the heartbeat of a product. Without a robust architectural foundation, digital products inevitably succumb to visual debt and technical fragmentation as they grow.",
    "I focus on engineering systems that are both resilient and adaptable. This starts with a shared language of design tokens—atomic values for spacing, color, and rhythm—that serve as the single source of truth for both designers and engineers.",
    "This methodology transforms the development process from a series of 'one-offs' into a cohesive manufacturing floor. By standardizing the primitive layer, we free up creative energy to solve complex problems rather than debating border-radii.",
    "Ultimately, a living design system ensures that the product remains coherent even as it evolves. It provides a framework for multi-generational design, ensuring every new feature feels like a natural extension of the original vision.",
  ].join("\n\n"),
  image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
  date: "2026-04-10",
},
{
  slug: "how-to-use-a-modern-interface",
  title: "A User's Guide to High-End Interfaces",
  excerpt:
    "How to navigate, interact with, and derive maximum value from modern, tool-centric web experiences.",
  content: [
    "Navigating a modern web application should feel less like reading a document and more like operating a precision instrument. As interfaces become more dynamic and reactive, understanding the language of interaction is key to a seamless experience.",
    "The first step is identifying the feedback loops. Every hover, click, and scroll in a high-end interface is designed to provide 'ambient data'—subtle hints about where you are and what you can do next. Pay attention to the micro-interactions; they are the signposts of the digital space.",
    "Command palettes, keyboard shortcuts, and gestural navigation are no longer just for 'power users'—they are the standard for efficient operation. I design these patterns to be discoverable yet unobtrusive, allowing you to move at the speed of thought.",
    "Ultimately, using a website effectively is about rhythmic flow. Once you understand the underlying system—the design language and the technical logic—the interface becomes an extension of your intent, rather than a barrier to it.",
  ].join("\n\n"),
  image: "/images/blog/how-to-use-a-website.png",
  date: "2026-04-10",
}

];

export type Blog = (typeof blogPosts)[number];

export default blogPosts;

