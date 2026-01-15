import type { Metadata } from 'next'
import { InstagramFeed } from '@/components/InstagramFeed'
import Image from 'next/image'
import { InstagramImageOnly } from '@/components/InstagramImageOnly'
import { InstagramPostFull } from '@/components/InstagramPostFull'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: 'Blog, News & Downloads – Bewegungskoordinator Tempelhof-Schöneberg',
  description:
    'Aktuelle Informationen, News und Download-Materialien zum Bewegungskoordinator Tempelhof-Schöneberg und zu Sport- und Bewegungsangeboten im Bezirk.',
}

// Read Instagram post URLs from text file
function getInstagramPosts(): string[] {
  const filePath = path.join(process.cwd(), 'instagram-posts.txt')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  
  // Filter out comments and empty lines
  const urls = fileContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'))
  
  return urls
}

export default function Blog() {
  const instagramPosts = getInstagramPosts()
  
  // Split posts into two columns (alternating distribution)
  const leftColumnPosts = instagramPosts.filter((_, index) => index % 2 === 0)
  const rightColumnPosts = instagramPosts.filter((_, index) => index % 2 === 1)
  return (
    <div className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 text-center mb-4">Blog / News / Infoblätter</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Aktuelle Informationen, News und Infomaterialien zum Thema Sport und Bewegung im Bezirk
          </p>

          {/* Instagram Section - Design Variante 1: Modern Grid */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <h2 className="heading-2 text-gray-900">Folgen Sie uns auf Instagram</h2>
              </div>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Sehen Sie sich unsere neuesten Posts und Updates direkt hier an oder besuchen Sie uns auf Instagram.
              </p>
            </div>

            {/* Instagram Feed - Full Post Embeds */}
            <div className="mb-8">
              {/* Mobile: Single column, Desktop: 2 independent columns */}
              <div className="flex flex-col md:flex-row gap-6 justify-center mb-8 max-w-7xl mx-auto">
                {/* Left Column */}
                <div className="flex-1 max-w-xl space-y-8 mx-auto md:mx-0">
                  {leftColumnPosts.map((url, index) => (
                    <InstagramPostFull key={`left-${index}`} url={url} />
                  ))}
                </div>
                
                {/* Right Column */}
                <div className="flex-1 max-w-xl space-y-8 mx-auto md:mx-0">
                  {rightColumnPosts.map((url, index) => (
                    <InstagramPostFull key={`right-${index}`} url={url} />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://www.instagram.com/bewegungskoordinator_bwgt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:opacity-90 shadow-md inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram besuchen
                </a>
                <p className="text-[#7FBF97] font-semibold mt-3">#Bewegungskoordinator</p>
              </div>
            </div>
          </section>

          {/* Info Box */}
          <div className="mt-12 card bg-[#f0f9f5] border-2 border-[#d4ede0]">
            <p className="text-gray-700 text-center">
              <strong>Hinweis:</strong> Der Blog wird kontinuierlich mit neuen Inhalten gefüllt. Schauen Sie
              regelmäßig vorbei oder folgen Sie uns auf{' '}
              <a
                href="https://www.instagram.com/bewegungskoordinator_bwgt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7FBF97] font-semibold hover:text-[#6ba87f] transition-colors"
              >
                Instagram
              </a>{' '}
              für aktuelle Updates.
            </p>
          </div>

          {/* Downloads */}
          <section id="downloads" className="mt-12 scroll-mt-20">
            <h2 className="heading-2 text-center mb-8">Downloads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-white border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 p-2 h-[26rem] flex flex-col gap-2">
                  <div className="relative flex-1 min-h-0">
                    <Image
                      src="/flyer/Flyer_Bewegungskoordinator_gesamt_1.png"
                      alt="Flyer Bewegungskoordinator Vorschau Seite 1"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="relative flex-1 min-h-0">
                    <Image
                      src="/flyer/Flyer_Bewegungskoordinator_gesamt_2.png"
                      alt="Flyer Bewegungskoordinator Vorschau Seite 2"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-lg bg-[#f0f9f5] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#7FBF97]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 text-xl mb-1">Flyer Bewegungskoordinator</h3>
                    <p className="text-gray-600 mb-3">Gesamtflyer als PDF</p>
                    <div className="flex gap-3">
                      <a
                        href="/flyer/Flyer_Bewegungskoordinator_gesamt.pdf"
                        download
                        className="btn btn-primary btn-sm"
                      >
                        Download
                      </a>
                      <a
                        href="/flyer/Flyer_Bewegungskoordinator_gesamt.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7FBF97] font-semibold hover:text-[#6ba87f] transition-colors text-sm flex items-center"
                      >
                        Im Browser öffnen →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-white border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 p-2 h-[26rem]">
                  <div className="relative w-full h-full">
                    <Image
                      src="/flyer/Poster_Bewegungskoordinator.png"
                      alt="Poster Bewegungskoordinator Vorschau"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-lg bg-[#f0f9f5] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#7FBF97]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 text-xl mb-1">Poster Bewegungskoordinator</h3>
                    <p className="text-gray-600 mb-3">Poster als PDF</p>
                    <div className="flex gap-3">
                      <a
                        href="/flyer/Poster_Bewegungskoordinator.pdf"
                        download
                        className="btn btn-primary btn-sm"
                      >
                        Download
                      </a>
                      <a
                        href="/flyer/Poster_Bewegungskoordinator.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7FBF97] font-semibold hover:text-[#6ba87f] transition-colors text-sm flex items-center"
                      >
                        Im Browser öffnen →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

