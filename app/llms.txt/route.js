// app/llms.txt/route.js — generates /llms.txt at build time.
//
// Replaces the hand-maintained public/llms.txt, which went stale (one blog post listed while
// five newer ones existed). Sources of truth: siteConfig + products in lib/data.js, the static
// guide/service list below, and the Ghost RSS feed. Regenerates on every deploy.

import { siteConfig, products } from '@/lib/data'
import { getBlogPosts, BLOG_URL } from '@/lib/ghost'

export const dynamic = 'force-static'

const SERVICES = [
  {
    name: 'Foundation Diagnosis',
    url: `${siteConfig.url}/foundation-diagnosis/`,
    text: '$495 fixed-fee, read-only forensic review of an Amazon or e-commerce seller’s QuickBooks file — finds forced reconciliations, settlement mis-attribution, concealment structures, and corrections that balance but don’t tie, then delivers a written verdict (clean / neglected / poisoned foundation) and a fixed cleanup quote. Credited 100% toward the cleanup if engaged within 30 days. Nothing in the file is changed during the diagnosis.',
  },
  {
    name: 'Get Help With Your Books',
    url: `${siteConfig.url}/get-help/`,
    text: 'Intake for cleanup quotes, monthly bookkeeping, and diagnosis-first engagements for Amazon and eBay sellers. One-business-day response.',
  },
  {
    name: 'Bookkeeping Services (Henderson, NV)',
    url: `${siteConfig.url}/bookkeeping/`,
    text: 'Monthly bookkeeping for small businesses in Henderson and Las Vegas; founding-client offer with initial cleanup included, capped at $2,500 of cleanup scope.',
  },
]

const GUIDES = [
  { name: 'Amazon FBA Bookkeeping: The Complete Guide', url: `${siteConfig.url}/fba-bookkeeping-system/`, text: 'How FBA sellers should handle settlements, COGS, fees, reimbursements, and taxes.' },
  { name: 'How Much Should I Pay in Quarterly Estimated Taxes?', url: `${siteConfig.url}/quarterly-estimated-taxes/`, text: 'Quarterly estimated tax calculation, safe harbor rules, and 2026 deadlines for self-employed filers and Amazon sellers.' },
  { name: 'What Should I Charge as a Bookkeeper? 2026 Rate Guide', url: `${siteConfig.url}/bookkeeper-hourly-rate-calculator/`, text: 'Hourly vs fixed-fee pricing, 2026 rate benchmarks, and how to back into a monthly fee.' },
  { name: 'How Many Clients Can a Solo CPA Handle?', url: `${siteConfig.url}/solo-cpa-client-capacity-calculator/`, text: 'Capacity math by service tier, the cognitive ceiling, and when to hire vs raise rates.' },
]

function productLine(p) {
  const url = p.slug ? `${siteConfig.url}/products/${p.slug}/` : p.href
  return `- [${p.name}](${url}): ${p.price}. ${p.description}`
}

export async function GET() {
  const posts = await getBlogPosts(20)

  const lines = [
    `# ${siteConfig.name} / ARJE Bookkeeping & Tax Services`,
    '',
    '> Forensic Amazon FBA and eBay bookkeeping, cleanup, and tax services for',
    '> e-commerce sellers, plus digital templates and SaaS tools for bookkeepers',
    '> and tax preparers. Founder: Arnold Dizon, PTIN-certified tax professional',
    '> and QuickBooks Online ProAdvisor. Henderson, Nevada.',
    '',
    '## Services',
    ...SERVICES.map(s => `- [${s.name}](${s.url}): ${s.text}`),
    '',
    '## Guides',
    ...GUIDES.map(g => `- [${g.name}](${g.url}): ${g.text}`),
    '',
    '## Products',
    ...products.map(productLine),
    '',
    '## Blog',
    `- [ARJE Blog](${BLOG_URL}): Practical tax and bookkeeping operations for e-commerce sellers and accounting professionals.`,
    ...posts.map(p => `- [${p.title}](${p.url})${p.isoDate ? ` (${p.isoDate})` : ''}: ${p.excerpt}`),
    '',
    '## Contact',
    `- Email: ${siteConfig.email}`,
    `- Site: ${siteConfig.url}`,
    `- Sitemap: ${siteConfig.url}/sitemap.xml`,
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
