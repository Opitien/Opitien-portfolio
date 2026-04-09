import { Link } from "react-router";
import { CalendarDays, ArrowRight, Terminal, Clock } from "lucide-react";
import blogPosts from "../../../data/blog";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";
import { motion } from "motion/react";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function readingTime(text: string) {
  const words = text.split(" ").length;
  return Math.ceil(words / 200);
}

export function Blog() {
  useSEO(getSEOConfig("blog"));

  if (!blogPosts.length) {
    return (
      <div className="min-h-screen py-24 px-6 lg:px-24 bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">No Articles Yet</h1>
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
            Fresh insights are being drafted.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brand-teal"></span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-teal">
              Blog & Insights
            </span>
          </div>
          
          <h1 className="text-foreground leading-tight tracking-tighter">
            Digital <span className="text-brand-teal">Journal</span>. <br />
            Thoughts on code & design.
          </h1>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col space-y-6"
            >
              {/* Image Container */}
              <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-muted border border-border">
                <img
                  src={post.image || "/images/blog-placeholder.jpg"}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-md text-[10px] font-mono border border-border rounded-full">
                    {readingTime(post.content)}m read
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest font-bold">
                    {formatDate(post.date)}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    Perspective
                  </span>
                </div>

                <Link to={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-2xl font-bold tracking-tight group-hover:text-brand-teal transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground line-clamp-2 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-foreground/10 pb-1 hover:border-brand-teal transition-all"
                >
                  Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
