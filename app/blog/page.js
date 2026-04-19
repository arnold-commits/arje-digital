'use client'

import { useEffect } from 'react'

export default function BlogIndexRedirect() {
  useEffect(() => {
    window.location.replace('https://blog.arjebookkeeping.com/')
  }, [])

  return (
    <>
      <meta httpEquiv="refresh" content="0; url=https://blog.arjebookkeeping.com/" />
      <div style={{ padding: '4rem 1rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
        <p>Redirecting to the ARJE Blog...</p>
        <p>
          If you aren't redirected,{' '}
          <a href="https://blog.arjebookkeeping.com/">click here</a>.
        </p>
      </div>
    </>
  )
}
