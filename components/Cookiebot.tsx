'use client'

import { useEffect } from 'react'

export default function Cookiebot() {
  useEffect(() => {
    // Check if script is already loaded or if window.Cookiebot exists
    if (document.getElementById('Cookiebot') || (window as any).Cookiebot) {
      return
    }

    // Create and append the script
    const script = document.createElement('script')
    script.id = 'Cookiebot'
    script.src = 'https://consent.cookiebot.com/uc.js'
    script.setAttribute('data-cbid', '37225ced-cc0a-4b8c-b303-372b9be8de75')
    script.setAttribute('data-blockingmode', 'auto')
    script.type = 'text/javascript'
    script.async = false
    script.defer = false
    
    // Insert in head for early loading
    if (document.head) {
      document.head.appendChild(script)
    } else if (document.body) {
      // Fallback to body if head not available
      document.body.insertBefore(script, document.body.firstChild)
    }
  }, [])

  return null
}


