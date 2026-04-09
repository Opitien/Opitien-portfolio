import { Link, useParams } from "react-router";
import { ArrowLeft, CalendarDays, Clock, Share2 } from "lucide-react";
import blogPosts, { BlogPost as BlogPostType } from "../../../data/blog";
import { useSEO } from "../../../utils/useSEO";
import { motion } from "motion/react";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

function readingTime(text: string) {
  const words = text.split(" ").length;
  return Math.ceil(words / 200);
}

export function BlogPost() {
  const { slug } = useParams();

  const post: BlogPostType | undefined = blogPosts.find(
    (entry) => entry.slug === slug,
  );

  useSEO(
    post
      ? {
          title: `${post.title} — Blog — Opitien Ejiroghene`,
          description: post.excerpt,
          ogTitle: post.title,
          ogDescription: post.excerpt,
          ogImage: post.image,
          ogUrl: `https://opitien.dev/blog/${post.slug}`,
          twitterCard: "summary_large_image",
          twitterTitle: post.title,
          twitterDescription: post.excerpt,
          twitterImage: post.image,
          canonicalUrl: `https://opitien.dev/blog/${post.slug}`,
        }
      : {
          title: "Blog — Opitien Ejiroghene",
          description: "Articles on design, development, and interfaces.",
        },
  );

  if (!post) {
    return (
      <div className="min-h-screen py-24 px-6 lg:px-24 bg-background flex items-center justify-center">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tighter">Article Not Found</h2>
          <Link to="/blog">
            <button className="px-8 py-4 bg-foreground text-background font-medium hover:bg-brand-teal transition-all">
              Return to Journal
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.split("\n\n");

  return (
    <div className="min-h-screen py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Navigation */}
        <Link to="/blog" className="inline-flex items-center gap-2 group text-muted-foreground hover:text-foreground transition-all">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-mono text-xs uppercase tracking-widest font-medium">Back to Journal</span>
        </Link>

        {/* Header */}
        <header className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-bold">
                {formatDate(post.date)}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                {readingTime(post.content)}m read
              </span>
            </div>
            <h1 className="text-foreground leading-tight tracking-tighter max-w-3xl">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-[16/7] bg-muted border border-border overflow-hidden"
        >
          <img
            src={post.image || "/images/blog-placeholder.jpg"}
            alt={post.title}
            className="w-full h-full object-cover grayscale brightness-90"
          />
        </motion.div>

        {/* Article Content */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-8 pt-4">
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Share</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.excerpt,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }
                  }}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                  title="Share Article"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </aside>

          {/* Body */}
          <article className="lg:col-span-9 prose prose-lg dark:prose-invert">
            <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="first-letter:text-4xl first-letter:font-bold first-letter:text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>

        {/* Footer */}
        <div className="pt-24 border-t border-border flex flex-col items-center justify-center text-center space-y-8">
          <h3 className="text-3xl font-bold tracking-tighter">More from the journal</h3>
          <Link to="/blog">
            <button className="px-12 py-5 bg-foreground text-background font-bold text-lg hover:bg-brand-teal transition-all">
              Explore All Articles
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
