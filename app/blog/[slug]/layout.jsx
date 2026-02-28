import { BLOG_POSTS } from "../../../data/blogs"; 

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found", 
    };
  }

  return {
    title: post.title, // <--- FIXED: Removed the extra text here!
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      images: [post.image],
      type: "article",
      publishedTime: post.fullDate,
      authors: ["Yash Soni"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.desc,
      images: [post.image],
    },
  };
}

export default function BlogPostLayout({ children }) {
  return <>{children}</>;
}
