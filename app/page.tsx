import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { TrophyIcon } from '@heroicons/react/24/outline'
import { StartPageHeader } from '@/components/StartPageHeader'
import ContactBanner from '@/components/ContactBanner'

export const metadata: Metadata = {
  title: 'Bewegungskoordinator Tempelhof-Schöneberg – Startseite',
  description:
    'Offizielle Seite des Bewegungskoordinators Tempelhof-Schöneberg: Informationen zum Projekt, Beratungen & Services, Netzwerk der Bewegungslotsen und Kontakt.',
}

export default function Home() {
  return (
    <>
      <StartPageHeader />
      {/* What does der Bewegungskoordinator do? */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2">Was macht der Bewegungskoordinator?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Der Bewegungskoordinator informiert Anwohner*innen{' '}
              <strong className="text-[#7FBF97]">KOSTENLOS</strong> über die im Bezirk vorhandenen und
              wohnortnahen Sport- und Bewegungsangebote, steht beratend zur Seite und vermittelt. Er unterstützt
              bei der Suche nach kostenlosen und kostenpflichtigen Bewegungsmöglichkeiten, dem passenden
              Sportkurs, dem richtigen Bewegungsangebot in der Nähe und nach dem richtigen Verein oder Anbieter
              für Sport und Bewegung.
            </p>
          </div>
        </div>
      </section>

      {/* Who can contact? */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2">Wer kann sich an den Bewegungskoordinator wenden?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Bürger*innen */}
            <div className="card bg-white text-center border-t-4 border-[#9C849E]">
              <div className="w-16 h-16 bg-[#f5f3f6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#9C849E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="heading-3 text-xl">Alle Anwohner*innen des Bezirks Tempelhof-Schöneberg</h3>
              <p className="text-gray-600 mb-4">
                Unabhängig von Alter, Geschlecht, Glaubensrichtung und Herkunft können Sie sich vom
                Bewegungskoordinator beraten lassen und gemeinsam das für Sie passende Angebot finden.
              </p>
            </div>

            {/* Card 2: Einrichtungen */}
            <div className="card bg-white text-center border-t-4 border-[#7FBF97]">
              <div className="w-16 h-16 bg-[#f0f9f5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7FBF97]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="heading-3 text-xl">Einrichtungen, Schulen und andere Organisationen im Bezirk</h3>
              <p className="text-gray-600 mb-4">
                Stellen Sie Anfragen für Besucher*innen Ihrer Einrichtung. Informieren Sie sich über Sport und
                Bewegung im Kiez. Lassen Sie sich beim Aufbau neuer Angebote unterstützen.
              </p>
            </div>

            {/* Card 3: Sportvereine */}
            <div className="card bg-white text-center border-t-4 border-[#EEEA63]">
              <div className="w-16 h-16 bg-[#fefef0] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="w-8 h-8 text-[#EEEA63]" />
              </div>
              <h3 className="heading-3 text-xl">Sportvereine & Anbieter von Sport und Bewegung</h3>
              <p className="text-gray-600 mb-4">
                Aufnahme von neuen Sport- und Bewegungsangeboten oder Gruppen und gezielte Vermittlung und
                Empfehlung von Interessierten. Lassen Sie sich bei der Gewinnung von neuen Mitgliedern und
                Teilnehmern unterstützen.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-[#7FBF97] font-semibold hover:text-[#6ba87f] transition-colors">
              Mehr zu Beratungen & Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Who is the Bewegungskoordinator? */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <div className="relative flex-shrink-0 p-2 pointer-events-none select-none" style={{ width: '120px', height: '120px', top: '-30px'}}>
                <Image
                  src="/logo/bluearrowsquare.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="120px"
                  quality={100}
                />
              </div>
              <h2 className="heading-2 mb-0">
                Wer ist der <span className="hidden sm:inline">Bewegungskoordinator?</span>
                <span className="sm:hidden">Bewegungs-<br />koordinator?</span>
              </h2>
            </div>

            {/* Concept */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Konzept</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mit dem Konzept des Bewegungskoordinators soll zu mehr Bewegung und sportlicher Aktivität im
                Bezirk Tempelhof-Schöneberg beigetragen werden. Hierzu gehört die Einbindung von Sport und
                Bewegung in den Alltag der Bewohner*innen in allen Altersgruppen.
              </p>
              <Link
                href="/projektidee"
                className="text-[#7FBF97] font-semibold hover:text-[#6ba87f] transition-colors"
              >
                Mehr zum Konzept →
              </Link>
            </div>

            {/* Person */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Die Person dahinter – Max Günther</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/fotos/20240601_7497-Max-Guenther-1.jpg"
                      alt="Max Günther - Bewegungskoordinator"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Max Günther hat an der Universität Potsdam Sportmanagement studiert und arbeitet seit 2023
                    bei dem gemeinnützigen Verein bwgt e.V. als Projektkoordinator. Neben dem Projekt des
                    Bewegungskoordinators betreut er weitere Projekt zur Bewegungsförderung in Berlin und hat
                    daher auch Erfahrung im Aufbau von neuen Bewegungsangeboten und kennt die Strukturen in
                    Berlin, im Bezirk und im Kiez.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mit dem Projekt des Bewegungskoordinator, will Max all jene unterstützen, die diese
                    benötigen, um sich im Alltag mehr zu bewegen.
                  </p>
                  <Link
                    href="/projektidee#person"
                    className="inline-block mt-4 text-[#7FBF97] font-semibold hover:text-[#6ba87f] transition-colors"
                  >
                    Mehr zur Person dahinter →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Districts Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Gibt es das Projekt auch in anderen Bezirken?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ja! Derzeit gibt es das Konzept des Bewegungskoordinators oder auch Bewegungslotsen in drei
              weiteren Berliner Bezirken. Vertreten sind neben Tempelhof-Schöneberg die Bezirke Mitte,
              Charlottenburg-Wilmersdorf und Lichtenberg.
            </p>
            <Link
              href="/netzwerk"
              className="inline-block text-[#7FBF97] font-semibold hover:text-[#6ba87f] transition-colors"
            >
              Mehr zu anderen Bezirken →
            </Link>
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  )
}

