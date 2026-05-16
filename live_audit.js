/**
 * LIVE SITE AUDIT — yashsoni.in
 * Checks every page for: HTTP status, redirect chains, canonical tag, robots meta, title
 */

const https = require('https');
const http = require('http');

const BASE = 'https://yashsoni.in';

const ROUTES = [
  '/',
  '/about',
  '/contact',
  '/portfolio',
  '/locations',
  '/blog',
  '/best-anchor-in-jaipur',
  '/anchor-in-jaipur',
  '/anchor-in-rajasthan',
  '/wedding-anchor-jaipur',
  '/sangeet-anchor-jaipur',
  '/corporate-event-anchor-jaipur',
  '/haldi-anchor-jaipur',
  '/mehendi-anchor-jaipur',
  '/engagement-roka-ceremony-anchor',
  '/anchor-for-birthday-party-jaipur',
  '/award-night-anchor-jaipur',
  '/celebrity-public-events-host',
  '/team-building-host',
  '/destination-wedding-anchor',
  '/destination-wedding-planner-jaipur',
  '/event-management-jaipur',
  '/event-planning-jaipur',
  '/event-designing',
  '/corporate-event-management-company',
  '/artist-management-jaipur',
  '/gala-dinner-event-planner',
  '/luxury-wedding-planner-rajasthan',
  '/theme-wedding-organizer-india',
  '/wedding-planning-jaipur',
  '/wedding-decoration-jaipur',
  '/wedding-venue-jaipur',
  '/wedding-catering-jaipur',
  '/haldi-decoration-jaipur',
  '/sangeet-decoration-jaipur',
  '/anchor-in-agra',
  '/anchor-in-ajmer',
  '/anchor-in-alibaug',
  '/anchor-in-alwar',
  '/anchor-in-andaman',
  '/anchor-in-bangalore',
  '/anchor-in-bharatpur',
  '/anchor-in-bikaner',
  '/anchor-in-chennai',
  '/anchor-in-chittorgarh',
  '/anchor-in-coorg',
  '/anchor-in-delhi',
  '/anchor-in-dharamshala',
  '/anchor-in-goa',
  '/anchor-in-haridwar',
  '/anchor-in-hyderabad',
  '/anchor-in-jaisalmer',
  '/anchor-in-jodhpur',
  '/anchor-in-kolkata',
  '/anchor-in-kota',
  '/anchor-in-kumbhalgarh',
  '/anchor-in-manali',
  '/anchor-in-mandawa',
  '/anchor-in-mount-abu',
  '/anchor-in-mumbai',
  '/anchor-in-mussoorie',
  '/anchor-in-nainital',
  '/anchor-in-neemrana',
  '/anchor-in-ooty',
  '/anchor-in-pushkar',
  '/anchor-in-ranthambore',
  '/anchor-in-rishikesh',
  '/anchor-in-shimla',
  '/anchor-in-udaipur',
  '/anchor-in-varanasi',
  // Old routes that should redirect
  '/corporate-emcee-jaipur',
  '/wedding-emcee-jaipur',
  // Sitemap & robots
  '/sitemap.xml',
  '/robots.txt',
];

function fetchPage(url, redirectCount = 0) {
  return new Promise((resolve) => {
    if (redirectCount > 5) {
      resolve({ status: 'REDIRECT_LOOP', finalUrl: url, redirectChain: [], body: '' });
      return;
    }

    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, { timeout: 10000, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AuditBot/1.0)' } }, (res) => {
      const status = res.statusCode;
      const location = res.headers['location'];

      if ([301, 302, 307, 308].includes(status) && location) {
        const nextUrl = location.startsWith('http') ? location : `${new URL(url).origin}${location}`;
        fetchPage(nextUrl, redirectCount + 1).then((result) => {
          result.redirectChain = result.redirectChain || [];
          result.redirectChain.unshift({ from: url, to: nextUrl, status });
          resolve(result);
        });
        return;
      }

      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { if (body.length < 50000) body += chunk; });
      res.on('end', () => {
        resolve({ status, finalUrl: url, redirectChain: [], body });
      });
    });

    req.on('error', (err) => {
      resolve({ status: 'ERROR', finalUrl: url, redirectChain: [], body: '', error: err.message });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 'TIMEOUT', finalUrl: url, redirectChain: [], body: '' });
    });
  });
}

function extractMeta(body) {
  const canonical = (body.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
                     body.match(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i) || [])[1] || null;
  const robots    = (body.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i) || [])[1] || null;
  const title     = (body.match(/<title>([^<]+)<\/title>/i) || [])[1] || null;
  const h1        = (body.match(/<h1[^>]*>([^<]+)<\/h1>/i) || [])[1] || null;
  return { canonical, robots, title, h1 };
}

function statusEmoji(status) {
  if (status === 200) return '✅';
  if (status === 301 || status === 302 || status === 307 || status === 308) return '↩️';
  if (status === 404) return '❌';
  if (status === 500) return '💥';
  if (status === 'TIMEOUT') return '⏱️';
  if (status === 'ERROR') return '🔌';
  if (status === 'REDIRECT_LOOP') return '🔁';
  return '❓';
}

async function runAudit() {
  console.log(`\n${'═'.repeat(100)}`);
  console.log(`  LIVE SITE AUDIT — ${BASE}   [${new Date().toISOString()}]`);
  console.log(`${'═'.repeat(100)}\n`);

  const results = [];
  const issues  = [];

  // Process in batches of 5 to avoid overwhelming the server
  for (let i = 0; i < ROUTES.length; i += 5) {
    const batch = ROUTES.slice(i, i + 5);
    const settled = await Promise.all(batch.map(route => fetchPage(`${BASE}${route}`)));
    
    for (let j = 0; j < batch.length; j++) {
      const route  = batch[j];
      const result = settled[j];
      const meta   = result.status === 200 ? extractMeta(result.body) : { canonical: null, robots: null, title: null, h1: null };
      const hasRedirectChain = result.redirectChain && result.redirectChain.length > 0;
      const chainLen = hasRedirectChain ? result.redirectChain.length : 0;

      const row = { route, ...result, ...meta, chainLen };
      results.push(row);

      // Detect issues
      const pageIssues = [];

      if (result.status !== 200 && !hasRedirectChain) {
        pageIssues.push(`STATUS_${result.status}`);
      }
      if (hasRedirectChain && chainLen > 1) {
        pageIssues.push(`REDIRECT_CHAIN(${chainLen} hops)`);
      }
      if (result.status === 200 && !meta.canonical) {
        pageIssues.push('MISSING_CANONICAL');
      }
      if (result.status === 200 && meta.canonical) {
        // canonical should match the route (with base)
        const expected = `${BASE}${route === '/' ? '' : route}`;
        const canon = meta.canonical.replace(/\/$/, '');
        const exp   = expected.replace(/\/$/, '');
        if (canon !== exp) {
          pageIssues.push(`CANONICAL_MISMATCH(expected: ${exp}, got: ${canon})`);
        }
      }
      if (result.status === 200 && meta.robots && meta.robots.toLowerCase().includes('noindex')) {
        pageIssues.push('NOINDEX_SET');
      }
      if (result.status === 200 && !meta.title) {
        pageIssues.push('MISSING_TITLE');
      }

      if (pageIssues.length > 0) {
        issues.push({ route, status: result.status, issues: pageIssues });
      }

      // Print row
      const em     = statusEmoji(result.status);
      const chain  = hasRedirectChain ? ` → [${result.redirectChain.map(r => `${r.status}→${r.to.replace(BASE,'')}`).join(' → ')}]` : '';
      const cLabel = meta.canonical ? (meta.canonical === result.finalUrl ? '✅ canonical ok' : `⚠️  ${meta.canonical}`) : (result.status === 200 ? '❌ NO CANONICAL' : '');
      const robLbl = meta.robots ? (meta.robots.toLowerCase().includes('noindex') ? `🚫 ${meta.robots}` : `🤖 ${meta.robots}`) : '';
      
      console.log(`${em}  [${String(result.status).padEnd(4)}]  ${route.padEnd(48)}${chain}`);
      if (meta.title)     console.log(`        TITLE: ${meta.title.substring(0, 80)}`);
      if (cLabel)         console.log(`        CANONICAL: ${cLabel}`);
      if (robLbl)         console.log(`        ROBOTS: ${robLbl}`);
      if (meta.h1)        console.log(`        H1: ${meta.h1.substring(0, 80)}`);
      if (pageIssues.length > 0) console.log(`        ⚠️  ISSUES: ${pageIssues.join(' | ')}`);
      console.log('');
    }
  }

  // Summary
  console.log(`\n${'═'.repeat(100)}`);
  console.log('  AUDIT SUMMARY');
  console.log(`${'═'.repeat(100)}\n`);

  const ok      = results.filter(r => r.status === 200 && r.chainLen === 0);
  const redirects = results.filter(r => r.chainLen > 0);
  const errors  = results.filter(r => !([200,'redirect'].includes(r.status)) && r.chainLen === 0 && r.status !== 200);

  console.log(`  Total routes checked  : ${results.length}`);
  console.log(`  ✅ 200 OK             : ${ok.length}`);
  console.log(`  ↩️  Redirects          : ${redirects.length}`);
  console.log(`  ❌ Errors/404/etc     : ${errors.length}`);
  console.log(`  ⚠️  Pages with issues  : ${issues.length}`);

  if (issues.length > 0) {
    console.log(`\n${'─'.repeat(100)}`);
    console.log('  🔍 ALL ISSUES FOUND');
    console.log(`${'─'.repeat(100)}\n`);
    issues.forEach(({ route, status, issues: iss }) => {
      console.log(`  [${status}] ${route}`);
      iss.forEach(i => console.log(`         ⚠️  ${i}`));
    });
  }

  console.log(`\n${'═'.repeat(100)}\n`);
}

runAudit().catch(console.error);
