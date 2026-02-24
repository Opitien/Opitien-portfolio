import { Link, useParams } from "react-router";
import { ArrowLeft, CalendarDays } from "lucide-react";
import blogPosts, { BlogPost as BlogPostType } from "../../../data/blog";
import { useSEO } from "../../../utils/useSEO";

export function BlogPost() {
  const params = useParams();
  const slug = params.slug;
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
      <div className="min-h-screen py-20 px-6 lg:px-12 bg-[#F5F3ED]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="retro-heading text-5xl md:text-6xl text-[#2C2C2C] tracking-tighter leading-none">
            Article Not Found
          </h1>
          <p className="font-mono text-sm md:text-base text-[#2C2C2C]/70">
            The article you are looking for does not exist or has been archived.
          </p>
          <Link to="/blog" className="retro-button inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const paragraphs = post.content.split("\n\n");

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 bg-[#F5F3ED]">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#2C2C2C]/60 hover:text-[#5D9B99]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="space-y-4">
            <h1 className="retro-heading text-4xl md:text-6xl text-[#2C2C2C] tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-[#2C2C2C]/60">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-[#5D9B99]" />
                {formattedDate}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D17654]" />
              <span>Field Notes</span>
            </div>
          </div>
        </header>

        <div className="relative border-2 border-[#2C2C2C] rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[260px] md:h-[360px] object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.45)_50%)] bg-[length:100%_4px] mix-blend-multiply pointer-events-none" />
        </div>

        <article className="bg-white border-2 border-[#2C2C2C] shadow-[4px_4px_0px_#2C2C2C] p-6 md:p-8">
          <div className="font-mono text-sm uppercase tracking-[0.2em] text-[#2C2C2C]/50 mb-4">
            // article.log
          </div>
          <div className="space-y-6 text-[#2C2C2C]/85 leading-relaxed text-base md:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

