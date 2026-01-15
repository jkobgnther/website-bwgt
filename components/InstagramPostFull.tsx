'use client'

import React, { useEffect, useRef } from 'react'

interface InstagramPostFullProps {
  url: string
}

export const InstagramPostFull: React.FC<InstagramPostFullProps> = ({ url }) => {
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
  }, [url])

  return (
    <div ref={containerRef} className="w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '0 auto',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: 'calc(100% - 2px)',
        }}
      />
    </div>
  )
}
