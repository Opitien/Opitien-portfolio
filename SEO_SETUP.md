# SEO Setup Documentation

## Overview
This document explains the SEO configuration for your portfolio website.

## What's Been Added

### 1. **Public Folder** (`/public`)
Contains static assets served directly:
- `favicon.svg` - Website icon displayed in browser tabs
- `robots.txt` - Instructions for search engines on which pages to crawl
- `sitemap.xml` - XML sitemap for search engine indexing

### 2. **Enhanced Meta Tags** (`index.html`)
Added comprehensive SEO meta tags including:
- Primary meta tags (title, description, keywords)
- Open Graph tags (for social media sharing)
- Twitter Card tags (for Twitter/X sharing)
- Canonical URL
- Additional tags for robots and language

### 3. **SEO Utilities** (`src/utils/`)

#### `seo.ts`
Contains:
- `SEOConfig` interface - Type-safe SEO configuration
- `defaultSEO` - Default SEO configuration
- `pageSEO` - Pre-configured SEO for each page (Home, Works, Experience, About)
- `updateMetaTags()` - Function to dynamically update meta tags
- `getSEOConfig()` - Helper to retrieve page-specific SEO config

#### `useSEO.ts`
Custom React hook that:
- Takes a `SEOConfig` object
- Automatically updates page title and meta tags
- Scrolls to top when page changes

### 4. **Page Integration**
All page components now use the `useSEO` hook:
- `Home.tsx`
- `Works.tsx`
- `Experience.tsx`
- `About.tsx`

## How to Use

### For Existing Pages
Each page component automatically handles SEO via the hook:
```tsx
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";

export function MyPage() {
  useSEO(getSEOConfig("pageName"));
  // ... rest of component
}
```

### For New Pages
1. Create your page component
2. Import the hook and config helper
3. Call `useSEO(getSEOConfig("pageName"))` at the top of the component
4. Add the page to `pageSEO` in `src/utils/seo.ts`

### Custom SEO for a Page
```tsx
import { useSEO } from "../../../utils/useSEO";

export function CustomPage() {
  useSEO({
    title: "Custom Page Title",
    description: "Custom description for this page",
    keywords: ["keyword1", "keyword2"],
    ogTitle: "Shared on Social Media",
    ogDescription: "How it looks when shared",
    twitterCard: "summary_large_image"
  });
  
  return <div>...</div>;
}
```

## Next Steps

### Important: Update URLs
Replace `https://opitien.com/` with your actual domain in:
- `index.html` - Open Graph og:url
- `public/sitemap.xml` - All URLs
- `public/robots.txt` - Sitemap location
- `src/utils/seo.ts` - Any hardcoded URLs

### Add Open Graph Image
1. Create an attractive social media card image (1200x630px recommended)
2. Place it in the `public` folder
3. Update the OG image URLs in `index.html` and `seo.ts`:
   ```
   /og-image.png
   ```

### Customize Favicon
Replace `public/favicon.svg` with your own SVG or PNG favicon.

### Additional Optimization
- Use descriptive H1 tags (main heading per page)
- Keep paragraphs well-structured for readability
- Add alt text to images (especially in Works section)
- Ensure mobile responsiveness (already done!)
- Keep content fresh and update lastmod dates in sitemap

## Search Engine Checklist
- ✅ Meta tags configured
- ✅ Favicon setup
- ✅ Robots.txt setup
- ✅ Sitemap.xml created
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ⏳ Custom OG image (replace placeholder)
- ⏳ Update domain-specific URLs
- ⏳ Google Search Console setup
- ⏳ Deploy and submit sitemap to search engines

## Files Modified/Created

### Created:
- `/public/favicon.svg`
- `/public/robots.txt`
- `/public/sitemap.xml`
- `/src/utils/seo.ts`
- `/src/utils/useSEO.ts`

### Modified:
- `index.html` - Enhanced with comprehensive meta tags
- `src/app/components/pages/Home.tsx`
- `src/app/components/pages/Works.tsx`
- `src/app/components/pages/Experience.tsx`
- `src/app/components/pages/About.tsx`
