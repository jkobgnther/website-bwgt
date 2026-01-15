'use client'

import React, { useEffect, useRef } from 'react'

interface InstagramImageOnlyProps {
  url: string
  className?: string
}

export const InstagramImageOnly: React.FC<InstagramImageOnlyProps> = ({ url, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Load Instagram embed script if not already loaded
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.onload = () => {
        // @ts-ignore - Instagram embed script adds window.instgrm
        if (window.instgrm) {
          // @ts-ignore
          window.instgrm.Embeds.process()
        }
      }
      document.body.appendChild(script)
    } else {
      // Script already loaded, just process
      // @ts-ignore
      if (window.instgrm) {
        // @ts-ignore
        window.instgrm.Embeds.process()
      }
    }

    // Hide caption and text elements after embed loads
    const hideText = () => {
      const iframes = containerRef.current?.querySelectorAll('iframe')
      iframes?.forEach((iframe) => {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
          if (iframeDoc) {
            const style = iframeDoc.createElement('style')
            style.textContent = `
              p, ._a9z6, ._a9z7, ._a9z8, ._a9z9, ._a9za, ._a9zb, ._a9zc, ._a9zd, ._a9ze, ._a9zf, ._a9zg, ._a9zh, ._a9zi, ._a9zj, ._a9zk, ._a9zl, ._a9zm, ._a9zn, ._a9zo, ._a9zp, ._a9zq, ._a9zr, ._a9zs, ._a9zt, ._a9zu, ._a9zv, ._a9zw, ._a9zx, ._a9zy, ._a9zz, ._a9-0, ._a9-1, ._a9-2, ._a9-3, ._a9-4, ._a9-5, ._a9-6, ._a9-7, ._a9-8, ._a9-9, ._a9-_ {
                display: none !important;
              }
            `
            iframeDoc.head.appendChild(style)
          }
        } catch (e) {
          // Cross-origin restrictions, can't access iframe content
        }
      })
    }

    // Try to hide text after a delay to allow embed to load
    setTimeout(hideText, 1000)
    setTimeout(hideText, 2000)
  }, [])

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <style jsx global>{`
        .instagram-image-only iframe {
          height: 100% !important;
        }
        .instagram-image-only blockquote {
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
      <div className="instagram-image-only w-full h-full">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '8px',
            margin: '0',
            padding: '0',
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>
    </div>
  )
}

