// lib/ghost.js — read the public Ghost RSS feed at build time.
//
// The blog lives on Ghost at blog.arjebookkeeping.com. This site is a static export, so the
// feed is fetched once per build and rendered into /blog/ and /llms.txt. No Ghost API key is
// needed; RSS is public. Every consumer must tolerate an empty array — a Ghost outage must
// never fail the site build.

export const BLOG_URL = 'https://blog.arjebookkeeping.com/'
const RSS_URL = `${BLOG_URL}rss/`

function pick(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`))
  if (!m) return ''
  return m[1].replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim()
}

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * @returns {Promise<Array<{title:string, url:string, date:string, isoDate:string, excerpt:string}>>}
 */
export async function getBlogPosts(limit = 10) {
  try {
    const res = await fetch(RSS_URL, { cache: 'force-cache' })
    if (!res.ok) return []
    const xml = await res.text()
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) || []
    return items
      .map(block => {
        const title = stripTags(pick(block, 'title'))
        const url = pick(block, 'link')
        const pub = pick(block, 'pubDate')
        const d = pub ? new Date(pub) : null
        const excerpt = stripTags(pick(block, 'description')).slice(0, 220)
        return {
          title,
          url,
          isoDate: d && !isNaN(d) ? d.toISOString().slice(0, 10) : '',
          date: d && !isNaN(d) ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }) : '',
          excerpt,
        }
      })
      .filter(p => p.title && p.url)
      .slice(0, limit)
  } catch {
    return []
  }
}
