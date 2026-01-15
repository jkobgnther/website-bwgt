'use client'

import React from 'react'
import { InstagramPost } from './InstagramPost'

interface InstagramFeedProps {
  postUrls?: string[]
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ postUrls = [] }) => {
  // Default posts - you can replace these with actual post URLs from the account
  const defaultPosts = [
    // Add Instagram post URLs here
    // Example: 'https://www.instagram.com/p/ABC123xyz/'
    "https://www.instagram.com/p/CyVRGFfsSZ-/",
    "https://www.instagram.com/p/DRSkOggCOd5/",
    "https://www.instagram.com/p/DQBwgUqjF3y/",

  ]

  const posts = postUrls.length > 0 ? postUrls : defaultPosts

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 mb-4">
          Um Instagram-Posts anzuzeigen, fügen Sie bitte Post-URLs hinzu.
        </p>
        <p className="text-sm text-gray-500">
          Sie können Post-URLs in der Komponente <code>InstagramFeed</code> hinzufügen oder als Props übergeben.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((url, index) => (
        <div key={index} className="w-full">
          <InstagramPost url={url} />
        </div>
      ))}
    </div>
  )
}

