'use client'

import React, { useEffect, useRef } from 'react'

interface InstagramProps {
    url: string
    className?: string
}

// Track script loading state globally
let isScriptLoaded = false
let isScriptLoading = false

/**
 * Unified Instagram component for embedding Instagram posts
 * Handles script loading and renders Instagram embeds using the official API
 */
export const Instagram: React.FC<InstagramProps> = ({ url, className = '' }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Load Instagram embed script
        const loadScript = () => {
            // If already loaded, process embeds immediately
            if (isScriptLoaded) {
                // @ts-ignore - Instagram embed script adds window.instgrm
                if (window.instgrm) {
                    // @ts-ignore
                    window.instgrm.Embeds.process()
                }
                return
            }

            // If currently loading, skip
            if (isScriptLoading) {
                return
            }

            // Check if script already exists in DOM
            if (document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
                isScriptLoaded = true
                // @ts-ignore
                if (window.instgrm) {
                    // @ts-ignore
                    window.instgrm.Embeds.process()
                }
                return
            }

            // Load the script
            isScriptLoading = true
            const script = document.createElement('script')
            script.src = 'https://www.instagram.com/embed.js'
            script.async = true
            script.onload = () => {
                isScriptLoaded = true
                isScriptLoading = false

                // @ts-ignore
                if (window.instgrm) {
                    // @ts-ignore
                    window.instgrm.Embeds.process()
                }
            }
            script.onerror = () => {
                isScriptLoading = false
                console.error('Failed to load Instagram embed script')
            }
            document.body.appendChild(script)
        }

        loadScript()
    }, [url])

    // Extract post ID from URL for validation (supports both /p/ and /reel/)
    const getPostId = (url: string) => {
        const match = url.match(/\/(p|reel)\/([A-Za-z0-9_-]+)/)
        return match ? match[2] : null
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
