/**
 * SEO Meta Tags Management
 * Handles dynamic meta tag updates for different pages
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Opitien Ejiroghene - Creative Developer & Designer",
  description: "Portfolio of Opitien Ejiroghene, a creative developer and designer specializing in modern web experiences.",
  keywords: [
    "developer",
    "designer",
    "portfolio",
    "creative",
    "web development",
    "React",
    "TypeScript",
    "UI/UX",
  ],
  ogTitle: "Opitien Ejiroghene - Creative Developer & Designer",
  ogDescription:
    "Portfolio of Opitien Ejiroghene, a creative developer and designer specializing in modern web experiences.",
  ogImage: "https://opitien.work/og-image.svg",
  ogUrl: "https://opitien.work/",
  twitterCard: "summary_large_image",
  twitterTitle: "Opitien Ejiroghene - Creative Developer & Designer",
  twitterDescription:
    "Portfolio of Opitien Ejiroghene, a creative developer and designer specializing in modern web experiences.",
  twitterImage: "https://opitien.work/og-image.svg",
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: "Opitien Ejiroghene - Creative Developer & Designer | Home",
    description:
      "Welcome to my portfolio. Discover my work, experience, and passion for creating exceptional digital experiences.",
    keywords: [
      "portfolio",
      "creative developer",
      "designer",
      "web developer",
      "React developer",
    ],
    ogTitle: "Opitien Ejiroghene - Creative Developer & Designer",
    ogDescription:
      "Welcome to my portfolio. Discover my work, experience, and passion for creating exceptional digital experiences.",
    twitterCard: "summary_large_image",
    twitterTitle: "Opitien Ejiroghene - Creative Developer & Designer",
    twitterDescription:
      "Welcome to my portfolio. Discover my work, experience, and passion for creating exceptional digital experiences.",
  },
  works: {
    title: "My Works - Opitien Ejiroghene",
    description:
      "Explore my portfolio of projects showcasing my expertise in web development, design, and creative solutions.",
    keywords: [
      "projects",
      "portfolio",
      "web development",
      "design",
      "case studies",
      "creative work",
    ],
    ogTitle: "My Works - Opitien Ejiroghene",
    ogDescription:
      "Explore my portfolio of projects showcasing my expertise in web development, design, and creative solutions.",
    twitterCard: "summary_large_image",
    twitterTitle: "My Works - Opitien Ejiroghene",
    twitterDescription:
      "Explore my portfolio of projects showcasing my expertise in web development, design, and creative solutions.",
  },
  experience: {
    title: "Experience & Skills - Opitien Ejiroghene",
    description:
      "Learn about my professional experience, technical skills, and career journey as a creative developer.",
    keywords: [
      "experience",
      "skills",
      "career",
      "technical skills",
      "professional experience",
      "developer",
    ],
    ogTitle: "Experience & Skills - Opitien Ejiroghene",
    ogDescription:
      "Learn about my professional experience, technical skills, and career journey as a creative developer.",
    twitterCard: "summary",
    twitterTitle: "Experience & Skills - Opitien Ejiroghene",
    twitterDescription:
      "Learn about my professional experience, technical skills, and career journey as a creative developer.",
  },
  about: {
    title: "About Me - Opitien Ejiroghene",
    description:
      "Get to know me better. Discover my background, interests, and what drives my passion for creative development.",
    keywords: [
      "about",
      "bio",
      "background",
      "interests",
      "personal",
      "creative developer",
    ],
    ogTitle: "About Me - Opitien Ejiroghene",
    ogDescription:
      "Get to know me better. Discover my background, interests, and what drives my passion for creative development.",
    twitterCard: "summary",
    twitterTitle: "About Me - Opitien Ejiroghene",
    twitterDescription:
      "Get to know me better. Discover my background, interests, and what drives my passion for creative development.",
  },
  blog: {
    title: "Blog - Opitien Ejiroghene",
    description:
      "Articles, field notes, and thoughts on frontend development, design, and retro-futuristic interfaces.",
    keywords: [
      "blog",
      "articles",
      "frontend",
      "design",
      "interfaces",
      "development",
    ],
    ogTitle: "Blog - Opitien Ejiroghene",
    ogDescription:
      "Articles, field notes, and thoughts on frontend development, design, and retro-futuristic interfaces.",
    twitterCard: "summary_large_image",
    twitterTitle: "Blog - Opitien Ejiroghene",
    twitterDescription:
      "Articles, field notes, and thoughts on frontend development, design, and retro-futuristic interfaces.",
  },
  contact: {
    title: "Contact - Opitien Ejiroghene",
    description:
      "Get in touch to discuss projects, collaborations, or opportunities in design and frontend engineering.",
    keywords: [
      "contact",
      "hire",
      "freelance",
      "email",
      "frontend developer",
      "designer",
    ],
    ogTitle: "Contact - Opitien Ejiroghene",
    ogDescription:
      "Get in touch to discuss projects, collaborations, or opportunities in design and frontend engineering.",
    twitterCard: "summary",
    twitterTitle: "Contact - Opitien Ejiroghene",
    twitterDescription:
      "Get in touch to discuss projects, collaborations, or opportunities in design and frontend engineering.",
  },
};

/**
 * Update meta tags dynamically
 * Call this in a useEffect hook on page components
 */
export function updateMetaTags(config: SEOConfig) {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  updateMetaTag("name", "description", config.description);
  updateMetaTag("name", "keywords", config.keywords?.join(", ") || "");

  // Open Graph tags
  updateMetaTag("property", "og:title", config.ogTitle || config.title);
  updateMetaTag(
    "property",
    "og:description",
    config.ogDescription || config.description
  );
  updateMetaTag("property", "og:type", "website");
  if (config.ogImage) {
    updateMetaTag("property", "og:image", config.ogImage);
  }
  if (config.ogUrl) {
    updateMetaTag("property", "og:url", config.ogUrl);
  }

  // Twitter tags
  updateMetaTag("name", "twitter:card", config.twitterCard || "summary");
  updateMetaTag("name", "twitter:title", config.twitterTitle || config.title);
  updateMetaTag(
    "name",
    "twitter:description",
    config.twitterDescription || config.description
  );
  if (config.twitterImage) {
    updateMetaTag("name", "twitter:image", config.twitterImage);
  }

  // Canonical URL
  if (config.canonicalUrl) {
    updateCanonicalTag(config.canonicalUrl);
  }
}

/**
 * Helper function to update or create a meta tag
 */
function updateMetaTag(
  attribute: "name" | "property",
  value: string,
  content: string
) {
  let tag = document.querySelector(`meta[${attribute}="${value}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

/**
 * Helper function to update canonical URL
 */
function updateCanonicalTag(url: string) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

/**
 * Get SEO config for a specific page
 */
export function getSEOConfig(page: keyof typeof pageSEO): SEOConfig {
  return pageSEO[page] || defaultSEO;
}
