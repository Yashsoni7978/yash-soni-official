/**
 * app/blog/layout.jsx
 *
 * NOTE: Metadata has been moved entirely to blog/page.jsx and blog/[slug]/page.jsx
 * to avoid Next.js metadata merge conflicts. This layout is a passthrough only.
 */
export default function BlogLayout({ children }) {
  return <>{children}</>;
}
