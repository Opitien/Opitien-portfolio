import { useEffect } from "react";
import { updateMetaTags, SEOConfig } from "./seo";

/**
 * Custom hook to update SEO meta tags for a page
 * Call this hook at the top level of any page component
 *
 * @example
 * function MyPage() {
 *   useSEO({
 *     title: "My Page Title",
 *     description: "My page description"
 *   });
 *   return <div>...</div>;
 * }
 */
export function useSEO(config: SEOConfig) {
  useEffect(() => {
    updateMetaTags(config);

    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [config]);
}
