'use client'

import React, { useEffect, useRef } from 'react'

interface InstagramPostProps {
  url: string
  className?: string
}

export const InstagramPost: React.FC<InstagramPostProps> = ({ url, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Load Instagram embed script
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

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // Extract post ID from URL
  const getPostId = (url: string) => {
    const match = url.match(/\/p\/([A-Za-z0-9_-]+)/)
    return match ? match[1] : null
  }

  const postId = getPostId(url)

  if (!postId) {
    return (
      <div className={`bg-gray-100 rounded-lg p-4 text-center ${className}`}>
        <p className="text-gray-500">Ungültige Instagram-URL</p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <div className="w-full aspect-square rounded-lg bg-white shadow-md overflow-hidden">
        <div className="w-full h-full" style={{ minHeight: '400px' }}>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '8px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '0',
              padding: '0',
              width: '100%',
              maxWidth: '100%',
              height: '100%',
              display: 'block',
            }}
          >
        <div style={{ padding: '16px' }}>
          <a
            href={url}
            style={{
              background: '#FFFFFF',
              lineHeight: '0',
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  flexGrow: '0',
                  height: '40px',
                  marginRight: '14px',
                  width: '40px',
                }}
              ></div>
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', justifyContent: 'center' }}>
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: '0',
                    height: '14px',
                    marginBottom: '6px',
                    width: '100px',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: '0',
                    height: '14px',
                    width: '60px',
                  }}
                ></div>
              </div>
            </div>
            <div style={{ padding: '19% 0' }}></div>
            <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}></div>
            <div style={{ paddingTop: '8px' }}>
              <div
                style={{
                  color: '#3897f0',
                  fontFamily: 'Arial,sans-serif',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '550',
                  lineHeight: '18px',
                }}
              >
                View this post on Instagram
              </div>
            </div>
            <div style={{ padding: '12.5% 0' }}></div>
          </a>
          <p
            style={{
              color: '#c9c8cd',
              fontFamily: 'Arial,sans-serif',
              fontSize: '14px',
              lineHeight: '17px',
              marginBottom: '0',
              marginTop: '8px',
              overflow: 'hidden',
              padding: '8px 0 7px',
              textAlign: 'center',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <a
              href={url}
              style={{
                color: '#c9c8cd',
                fontFamily: 'Arial,sans-serif',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '17px',
                textDecoration: 'none',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ein Beitrag geteilt von bewegungskoordinator_bwgt
            </a>
          </p>
        </div>
      </blockquote>
        </div>
      </div>
    </div>
  )
}

