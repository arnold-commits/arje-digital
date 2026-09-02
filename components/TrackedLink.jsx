'use client'

import Link from 'next/link'
import { track } from '@vercel/analytics'

// A link that fires a Vercel Analytics custom event on click.
// Internal hrefs (starting with "/") render through next/link; everything else is a plain <a>.
// Event names in use: diagnosis_cta_click, get_help_cta_click. Keep them stable — the
// Promotion Plan's outcome metrics read them by name.
export default function TrackedLink({ href, event, data, children, ...rest }) {
  const onClick = () => {
    try {
      track(event, data)
    } catch {
      // analytics must never block navigation
    }
  }
  if (href.startsWith('/')) {
    return (
      <Link href={href} onClick={onClick} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} onClick={onClick} {...rest}>
      {children}
    </a>
  )
}
