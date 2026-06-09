import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import { BLOG_POSTS } from "../../../data/blogs";

// ── DYNAMIC SEO METADATA ───────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) return { title: "Post Not Found | Anchor Yash Soni" };

  return {
    title: `${post.title} | Anchor Yash Soni`,
    description:
      post.desc ||
      `Read the latest insights on ${post.title} by Anchor Yash Soni — Jaipur's premier event host.`,
    alternates: {
      canonical: `https://yashsoni.in/blog/${post.slug}`,
    },
    keywords: [post.category, "Event Anchoring", "Anchor Yash Soni Blog", "Jaipur Events"],
    openGraph: {
      title: `${post.title} | Anchor Yash Soni`,
      description:
        post.desc ||
        `Expert insights on ${post.category} by Anchor Yash Soni.`,
      url: `https://yashsoni.in/blog/${post.slug}`,
      siteName: "Anchor Yash Soni",
      locale: "en_IN",
      type: "article",
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [
            {
              url: "/og-image.webp",
              width: 1200,
              height: 630,
              alt: "Anchor Yash Soni Blog",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Anchor Yash Soni`,
      description: post.desc || `Expert insights from Anchor Yash Soni.`,
      images: [post.image || "/og-image.webp"],
    },
  };
}

// ── STATIC PARAMS (SSG) ────────────────────────────────────────────────────
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

// ── SERVER COMPONENT ───────────────────────────────────────────────────────
export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) return notFound();

  // Article schema — per-post structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.desc || `${post.title} by Anchor Yash Soni`,
    image: post.image || "https://yashsoni.in/og-image.webp",
    // Use post.fullDate if available, fallback to post.date
    datePublished: post.fullDate || post.date,
    dateModified: post.fullDate || post.date,
    author: {
      "@type": "Person",
      name: "Yash Soni",
      url: "https://yashsoni.in/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Anchor Yash Soni",
      url: "https://yashsoni.in",
      logo: {
        "@type": "ImageObject",
        url: "https://yashsoni.in/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yashsoni.in/blog/${post.slug}`,
    },
  };

  // Breadcrumb for this blog post
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://yashsoni.in/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://yashsoni.in/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Editorial Header Image */}
      <div className="h-[75vh] w-full relative overflow-hidden bg-[#0a0a0a]">
        {post.image && (
          <Image
            src={post.image}
            alt={`${post.title} — blog post by Anchor Yash Soni`}
            fill
            priority
            // FIXED: removed unoptimized={true} — was bypassing Next.js image
            // optimization (WebP conversion, size adaptation, lazy loading).
            // Images are now served optimally for LCP performance.
            className="object-cover opacity-50 grayscale-[20%]"
            sizes="100vw"
            quality={80}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex items-end p-6 md:p-20 z-10">
          <div className="max-w-5xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase text-zinc-400 mb-8 hover:text-[#B5952F] transition-colors tracking-widest"
              aria-label="Back to the blog listing page"
            >
              <ArrowLeft size={16} aria-hidden="true" /> Back to Journal
            </Link>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.95] tracking-tighter drop-shadow-2xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article
        className="max-w-3xl mx-auto py-24 px-6 prose prose-lg md:prose-xl prose-invert prose-headings:font-black prose-headings:uppercase prose-p:font-light prose-a:text-[#B5952F]"
        aria-label={`Article: ${post.title}`}
      >
        {/* Meta Data Strip */}
        <div className="flex flex-wrap gap-4 md:gap-6 mb-12 text-zinc-400 font-bold uppercase text-[10px] tracking-widest border-b border-white/10 pb-8 not-prose">
          <span className="bg-[#D4AF37] text-black px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            {post.category}
          </span>
          <span className="flex items-center gap-2 mt-1">
            <Calendar size={14} className="text-[#B5952F]" aria-hidden="true" />{" "}
            <time dateTime={post.fullDate || post.date}>{post.fullDate}</time>
          </span>
          <span className="flex items-center gap-2 mt-1">
            <Clock size={14} className="text-[#B5952F]" aria-hidden="true" />{" "}
            {post.readTime} Read
          </span>
        </div>

        {/* Markdown Content */}
        <div className="text-zinc-300 leading-relaxed max-w-none">
          <ReactMarkdown
            components={{
              img: ({ ...props }) => (
                <span className="block relative w-full aspect-[16/9] my-12 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-white/10">
                  <Image
                    src={props.src || ""}
                    alt={props.alt || "Anchor Yash Soni Luxury Event"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    quality={80}
                  />
                </span>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Back to blog CTA */}
        <div className="not-prose mt-16 pt-8 border-t border-white/10">
          <Link href="/blog">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4AF37]/30 text-[#B5952F] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all"
              aria-label="Browse more articles on the blog"
            >
              <ArrowLeft size={14} aria-hidden="true" /> More Articles
            </button>
          </Link>
        </div>
      </article>
    </>
  );
}