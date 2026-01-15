import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        {/* Top section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_0.4fr] gap-20">
          
          {/* Funded by */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">Gefördert von</h3>
            <div className="flex flex-wrap items-center gap-6">
              <div className="relative h-20 md:h-24 w-auto">
                <Image
                  src="/logo/Logo_baTS.png"
                  alt="Bezirksamt Tempelhof-Schöneberg"
                  width={200}
                  height={100}
                  className="object-contain h-full"
                  quality={100}
                  sizes="(max-width: 768px) 160px, 200px"
                />
              </div>
              <div className="relative h-20 md:h-24 w-auto">
                <Image
                  src="/logo/Logo_GSN.jpg"
                  alt="Fördergeber"
                  width={200}
                  height={100}
                  className="object-contain h-full"
                  quality={100}
                  sizes="(max-width: 768px) 160px, 200px"
                />
              </div>
            </div>
          </div>
          {/* Social Media */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">Social Media</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.facebook.com/Bewegungskoordinator/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/bewegungskoordinator_bwgt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/4915754762597"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.51 0-10 4.46-10 9.95 0 1.76.46 3.47 1.34 4.99L2 22l5.18-1.35a10.1 10.1 0 004.86 1.24h.01c5.5 0 9.95-4.49 9.95-10.01C22 6.46 17.55 2 12.04 2zm5.87 14.37c-.25.7-1.48 1.34-2.04 1.42-.52.08-1.19.12-1.93-.12-.44-.14-1-.32-1.73-.63-3.06-1.33-5.06-4.43-5.22-4.64-.15-.2-1.25-1.66-1.25-3.17 0-1.52.8-2.26 1.09-2.57.25-.26.66-.38 1.05-.38.13 0 .25.01.36.02.32.02.48.03.69.53.25.6.87 2.07.95 2.22.08.15.13.33.03.53-.09.2-.14.33-.28.51-.14.17-.3.39-.43.52-.14.14-.29.3-.12.59.18.3.8 1.32 1.72 2.14 1.18 1.05 2.15 1.38 2.48 1.53.25.11.55.08.73-.12.23-.25.51-.67.8-1.09.21-.3.47-.34.75-.23.28.1 1.76.83 2.06.98.3.15.5.23.57.36.07.13.07.74-.17 1.43z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <div className="text-primary-600 font-semibold">#Bewegungskoordinator</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/kontakt" className="text-primary-600 hover:text-primary-700 transition-colors">
                Kontakt
              </Link>
              <Link href="/services" className="text-primary-600 hover:text-primary-700 transition-colors">
                Beratungen & Services
              </Link>
              <Link href="/projektidee" className="text-primary-600 hover:text-primary-700 transition-colors">
                Über das Projekt
              </Link>
              <Link href="/blog#downloads" className="text-primary-600 hover:text-primary-700 transition-colors">
                Downloads
              </Link>
            </div>
          </div>


          {/* Carrier */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">Träger</h3>
            <div className="flex items-center gap-6">
              <div className="relative h-20 md:h-24 w-auto">
                <Image
                  src="/logo/logobwgt.png"
                  alt="bwgt e.V."
                  width={200}
                  height={100}
                  className="object-contain h-full"
                  quality={100}
                  sizes="(max-width: 768px) 160px, 200px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/impressum" className="text-gray-600 hover:text-primary-600 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-gray-600 hover:text-primary-600 transition-colors">
              Datenschutz
            </Link>
            <Link href="/datenschutz#social-media" className="text-gray-600 hover:text-primary-600 transition-colors">
              Datenschutz für Social-Media
            </Link>
            <Link href="/barrierefreiheit" className="text-gray-600 hover:text-primary-600 transition-colors">
              Erklärung zur Barrierefreiheit
            </Link>
          </nav>
          <p className="text-sm text-gray-600">
            © {currentYear} Bewegungskoordinator Tempelhof-Schöneberg | bwgt e.V.
          </p>
        </div>
      </div>
    </footer>
  )
}

