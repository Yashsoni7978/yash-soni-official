/**
 * app/about/layout.jsx
 *
 * IMPORTANT: This layout was previously exporting metadata that CONFLICTS
 * with the page.tsx metadata in the same route. Next.js merges metadata
 * from layout → page, but when both export the same fields (title, description,
 * alternates.canonical), the page.tsx values WIN — but the layout's values
 * still get processed and can cause unexpected behavior.
 *
 * DECISION: Removed all metadata exports from this layout.
 * All About page metadata now lives exclusively in app/about/page.tsx.
 * This layout exists only to wrap children (currently a passthrough).
 */
export default function AboutLayout({ children }) {
  return <>{children}</>;
}
