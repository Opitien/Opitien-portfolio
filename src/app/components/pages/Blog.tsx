import { Link } from "react-router";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import blogPosts from "../../../data/blog";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";

export function Blog() {
  useSEO(getSEOConfig("blog"));

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 bg-[#F5F3ED]">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="border-b-4 border-[#2C2C2C] pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="retro-heading text-6xl md:text-8xl text-[#2C2C2C] tracking-tighter leading-none">
              BLOG
            </h1>
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#2C2C2C]/60 mt-4">
              // Field notes on design, code, and interfaces
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#2C2C2C]/60">
            <CalendarDays className="w-4 h-4 text-[#5D9B99]" />
            <span>Latest entries listed first</span>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <Card
              key={post.slug}
              className="group bg-white border-2 border-[#2C2C2C] rounded-xl overflow-hidden shadow-[0_16px_30px_-12px_rgba(0,0,0,0.25)] transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-video bg-[#2C2C2C] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] mix-blend-multiply pointer-events-none" />
              </div>

              <CardContent className="px-6 py-6 flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#2C2C2C]/60">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </p>
                  <span className="font-mono text-[10px] px-2 py-1 border border-[#2C2C2C]/20 text-[#2C2C2C]/60">
                    0{index + 1}
                  </span>
                </div>

                <Link to={`/blog/${post.slug}`} className="group/link block">
                  <h2 className="retro-heading text-2xl text-[#2C2C2C] tracking-tight mb-1 group-hover/link:text-[#5D9B99] transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-sm text-[#2C2C2C]/75 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <Link to={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="retro-button px-3 py-1.5 bg-transparent border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-[#F5F3ED] shadow-[3px_3px_0px_#5D9B99]"
                    >
                      <span className="text-xs font-mono uppercase tracking-[0.2em]">
                        Read More
                      </span>
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}

