const https = require('https');

const SITEMAP_URL = 'https://yashsoni.in/sitemap.xml';

async function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
          return fetchUrl(res.headers.location).then(resolve);
      }
      resolve(res.statusCode);
    }).on('error', () => {
      resolve(500);
    });
  });
}

function getSitemap(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
                console.log(`↪️ Redirecting to: ${res.headers.location}`);
                return getSitemap(res.headers.location).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                return reject(new Error(`Failed to fetch sitemap. Status: ${res.statusCode}`));
            }
            let data = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function pingLiveSite() {
  console.log(`\n🔍 Fetching sitemap from: ${SITEMAP_URL}\n`);

  try {
    const data = await getSitemap(SITEMAP_URL);
    const locMatches = data.match(/<loc>([\s\S]*?)<\/loc>/gi);
    const urls = locMatches ? locMatches.map(val => val.replace(/<\/?loc>/gi, '').trim()) : [];
    
    if (urls.length === 0) {
      console.log('\x1b[31m%s\x1b[0m', '❌ Error: No URLs found in sitemap.');
      return;
    }

    console.log(`🚀 Found ${urls.length} routes. Starting health check...\n`);

    for (const url of urls) {
      const status = await fetchUrl(url);
      if (status === 200 || status === 301) {
        console.log(`\x1b[32m✅ ${status} OK\x1b[0m - ${url}`);
      } else {
        console.log('\x1b[31m%s\x1b[0m', `❌ ${status} ERROR - ${url}`);
      }
    }

    console.log('\n🏁 Health check complete.');
  } catch (err) {
    console.error('\x1b[31m%s\x1b[0m', `❌ Error: ${err.message}`);
  }
}

pingLiveSite();
