import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ContactBanner from '@/components/ContactBanner'

export const metadata: Metadata = {
  title: 'Konzept & Projektidee – Bewegungskoordinator Tempelhof-Schöneberg',
  description:
    'Konzept und Projektidee des Bewegungskoordinators Tempelhof-Schöneberg: Ziele, Aufgaben, Netzwerk und die Person Max Günther.',
}

export default function Projektidee() {
  return (
    <>
    <div className="section bg-white relative overflow-hidden">
      <div className="container-custom">
        <h1 className="heading-1 text-center mb-8">Konzept / Projektidee</h1>
        <br />
        {/* Two-column layout: sidebanner on left, Q&As on right */}
        <div className="flex flex-col lg:flex-row gap-4 items-start relative">
          {/* Left side: sidebanner images positioned to align with section headings */}
          <div className="w-full lg:w-[200px] xl:w-[250px] lg:flex-shrink-0 lg:sticky lg:top-8 lg:self-start hide-sidebanners-below-1028">
            <div className="relative w-full lg:w-[200px] xl:w-[250px]">
              {/* Sidebanner 1 - aligned with first section heading */}
              <div className="relative w-full lg:w-[200px] xl:w-[250px] mb-1 lg:mb-0 pointer-events-none select-none">
                <Image
                  src="/logo/sidebanner_1.png"
                  alt="Dekoratives Seitenbanner"
                  width={250}
                  height={400}
                  className="object-contain w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 250px"
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Right side: Q&A content */}
          <div className="flex-1 max-w-4xl relative">

          {/* Anwohner*innen Section */}
          <section className="mb-16">
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-0 mb-0">
                  <h2 className="heading-3 mb-0">
                  Konzept „<span className="hidden sm:inline">Bewegungskoordinator"</span>
                  <span className="sm:hidden">Bewegungs-<br />koordinator"</span>
                </h2>
                  <div className="relative flex-shrink-0 p-0 pointer-events-none select-none" style={{ width: '120px', height: '60px', top: '-20px', left: '20px'}}>
                    <Image
                      src="/logo/bluearrowsquare.png"
                      alt=""
                      fill
                      className="object-contain"
                      style={{ transform: 'scaleX(-1)' }}
                      sizes="120px"
                      quality={100}
                    />
                  </div>
                </div>
                <div className="space-y-4 text-gray-700">
                <p className="text-justify leading-relaxed">
                  <strong>Gesundheitsförderung</strong> und in diesem Zusammenhang natürlich auch die <strong>Bewegungsförderung</strong> ist eine
                  wesentliche Zielsetzung im Bezirk <strong>Tempelhof-Schöneberg</strong>. Mit dem Konzept des
                  „Bewegungskoordinator" soll zu mehr Bewegung und sportlicher Betätigung im Bezirk
                  Tempelhof-Schöneberg beigetragen werden. Hierzu gehört die Einbindung von Sport und Bewegung in
                  den Alltag der Bewohner*innen in allen Altersgruppen. Der Bewegungskoordinator informiert
                  niedrigschwellig und persönlich zum Thema Sport und Bewegung mittels Öffentlichkeitsarbeit und
                  vor allem durch die persönliche Beratung und Vermittlung von bedarfsgerechten und passgenauen
                  Sport- und Bewegungsangeboten.
                </p>
                <p className="text-justify leading-relaxed">
                  Die Idee zu dem Konzept stammt von dem Projekt <strong>„Kiezsportlotsin"</strong> aus dem Bezirk Mitte, welches
                  bereits seit <strong>2013</strong> im Quartiersmanagement-Gebiet Brunnenstraße startete und in den folgenden
                  Jahren auf den gesamten Bezirk Mitte ausgebaut wurde. Die Erfahrung zeigt, dass
                  Bürger*innen oftmals die Bewegungsangebote nicht kennen oder nicht wissen, wo man sich hierzu
                  einen Überblick verschaffen kann. Der Bewegungskoordinator setzt mit seiner Tätigkeit genau an
                  diesem Punkt an. Besonders <strong>bewegungsferne und sozial benachteiligte Menschen</strong> weisen
                  Informationsdefizite auf.
                </p>
                <p className="text-justify leading-relaxed">
                  Der Bewegungskoordinator informiert Anwohner*innen <strong>kostenlos</strong> über die im Bezirk vorhandenen und
                  wohnortnahen Sport- und Bewegungsangebote, steht beratend zur Seite und vermittelt. Er
                  unterstützt bei der Suche nach kostenlosen und kostenpflichtigen Bewegungsmöglichkeiten, dem
                  passenden Sportkurs, dem richtigen Bewegungsangebot in der Nähe und nach dem richtigen Verein
                  oder Anbieter. Dafür wurde eine umfassende Recherche durchgeführt, die regelmäßig aktualisiert
                  wird. Es wird versucht, möglichst viele Sportanbieter im Blick zu haben. Dazu gehören vor
                  allem Sportvereine und Einrichtungen (wie Kinder- und Jugendfreizeiteinrichtungen,
                  Seniorenbegegnungsstätten), die Volkshochschule und Musikschule, die Berliner Bäder Betriebe
                  sowie gewerbliche Anbieter (z.B. Tanzschulen, Kampfkunstschulen, Schwimmschulen) oder
                  nachbarschaftliche Gruppen.
                </p>
                <p className="text-justify leading-relaxed">
                  Weitere Aufgaben des Bewegungskoordinators sind die Einbindung von Einrichtungen und
                  Akteuren als <strong>Multiplikator*innen</strong> sowie deren <strong>Vernetzung</strong> vor allem mit dem Ziel, zusätzliche
                  Sport- und Bewegungsangeboten zu initiieren. Der Bewegungskoordinator soll bei
                  Multiplikator*innen bekannt sein und bei Sportfragen angesprochen werden. Dafür ist der
                  Bewegungskoordinator im regelmäßigen Austausch mit Anbieter*innen von Sport- und
                  Bewegungsangeboten und Akteuren im Bezirk in Bezug auf das Thema Sport und
                  Bewegung. Er unterstützt beim Aufbau neuer Angebote und bei der Vernetzung der
                  entsprechenden Akteure.
                </p>
                <p className="text-justify leading-relaxed">
                  Ein weiterer Arbeitsschwerpunkt ist die <strong>Öffentlichkeitsarbeit</strong>, bei der es zum einen darum
                  geht, die Informationen zu Sport- und Bewegungsangebote des Bezirkes an die
                  Anwohnenden und Akteure zu vermitteln und zum anderen das Projekt des
                  Bewegungskoordinators im Bezirk bekannt zu machen. Hierfür werden bereits vorhandene
                  <strong> Online- und Printmedien</strong> genutzt, z.B. Kiezzeitungen, Padlets Newsletter, Flyer u.a..
                  Außerdem wurden Accounts für den Bewegungskoordinator in Sozialen Medien (Facebook;
                  Instagram) eingerichtet, über die regelmäßig Informationen geteilt werden.
                </p>
                <p className="text-justify leading-relaxed">
                  Das Bezirksamt Tempelhof-Schöneberg fördert das Projekt "Bewegungskoordinator" seit September 2023 aus eigenen Mitteln. Die Tätigkeit des Bewegungskoordinators ist inhaltlich mit den Grundgedanken des{' '}
                  <a
                    href="https://www.berlin.de/ba-tempelhof-schoeneberg/politik-und-verwaltung/service-und-organisationseinheiten/planungs-und-koordinierungsstelle-gesundheit/artikel.379652.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline transition-colors"
                  >
                    Gesunde-Städte-Netzwerks
                  </a> (GSN) eng verknüpft und ergänzt bestehende gesundheitsbezogene Aktivitäten auf Bezirksebene.
                </p>
              </div>
              </div>
            </div>
          </section>

          {/* Multiplikator*innen Section */}
          <section className="mb-16 relative">
            {/* Sidebanner 2 - aligned with this section heading */}
            <div className="hide-sidebanners-below-1028 absolute -left-[220px] xl:-left-[280px] top-0 pointer-events-none select-none">
              <div className="relative w-[200px] xl:w-[250px]">
                <Image
                  src="/logo/sidebanner_2.png"
                  alt="Dekoratives Seitenbanner"
                  width={250}
                  height={400}
                  className="object-contain w-full h-auto"
                  sizes="250px"
                  quality={100}
                />
              </div>
            </div>
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-0 mb-0">
                  <h2 className="heading-3 mb-0">
                  Wer ist der <span className="hidden sm:inline">Bewegungskoordinator?</span>
                  <span className="sm:hidden">Bewegungs-<br />koordinator?</span>
                  <br />
                </h2>
                  <div className="relative flex-shrink-0 p-4 pointer-events-none select-none" style={{ width: '120px', height: '60px', top: '-15px', left: '20px'}}>
                    <Image
                      src="/logo/yellowarrowsquare.png"
                      alt=""
                      fill
                      className="object-contain"
                      style={{ transform: 'scaleX(-1)' }}
                      sizes="120px"
                      quality={100}
                    />
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 mb-8">
                  <p className="text-justify leading-relaxed">
                      Max Günther hat an der <strong>Universität Potsdam</strong> Sportmanagement studiert und arbeitet seit <strong>2023 </strong>
                      bei dem gemeinnützigen Verein <strong>bwgt e.V.</strong> als Projektkoordinator. Neben dem Projekt des
                    Bewegungskoordinators betreut er weitere Projekt zur Bewegungsförderung in Berlin und hat
                      daher auch Erfahrung im Aufbau von neuen Bewegungsangeboten und kennt die Strukturen in
                    Berlin, im Bezirk und im Kiez.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Vor seiner Tätigkeit als Bewegungskoordinator war Max im <strong>Veranstaltungsbereich</strong> aktiv und
                    hat bei der Planung und Umsetzung von Sportveranstaltungen mitgearbeitet. Schon seit der
                    frühsten Kindheit ist Max sportbegeistert und aktiv in unterschiedlichsten Sportvereinen aktiv
                    gewesen. In seiner Freizeit und auch in Zuge des Studiums hat schon die
                    unterschiedlichsten Sportarten ausprobiert (Fußball, Schwimmen, Kanurennsport, Handball,
                    Ski, Golf, Bouldern, Judo u.a.).
                  </p>
                  <p className="text-justify leading-relaxed">
                    Mit dem Projekt des Bewegungskoordinator, will Max all jene unterstützen, die diese
                    benötigen, um sich im Alltag mehr zu bewegen.
                  </p>
                  <div className="relative">
                {/* Swirl image - positioned over Steckbrief */}
                <div 
                  className="absolute pointer-events-none select-none show-swirl-above-928"
                  style={{
                    // Adjust positioning relative to Steckbrief
                    top: '-20px',
                    left: '510px',
                    rotate: '120deg',
                    // Adjust size
                    width: '500px',
                    height: '269px',
                    
                    zIndex: 10, // Higher z-index to be above Steckbrief
                  }}
                >
                  <Image
                    src="/logo/swirl.png"
                    alt="Dekoratives Swirl-Element"
                    fill
                    className="object-contain"
                    style={{ transform: 'scaleX(-1)' }}
                    sizes="500px"
                    quality={100}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Name Card - Large */}
                  <div className="md:col-span-4">
                    <div className="relative h-64 rounded-none overflow-hidden mb-4">
                      <Image
                        src="/fotos/20240601_7497-Max-Guenther-1.jpg"
                        alt="Max Günther"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 text-center">Max Günther</h4>
                    {/* Green arrow square below image */}
                    <div className="hidden md:flex relative justify-center mb-4 pointer-events-none select-none">
                      <div className="relative" style={{ width: '120px', height: '120px', left: '20px'}}>
                        <Image
                          src="/logo/greenarrowsquare.png"
                          alt=""
                          fill
                          className="object-contain"
                          sizes="120px"
                          quality={100}
                        />
                      </div>
                    </div>
                    
                  </div>

                  {/* Info Cards */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="bg-[#9C849E] rounded-none p-6 text-gray-900">
                      <h5 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Ausbildung
                      </h5>
                      <p className="text-lg">Bachelor of Arts: Sportmanagement</p>
                    </div>

                    <div className="bg-[#B2DFDA] rounded-none p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Berufspraxis
                      </h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">Brandenburgische Sportjugend</p>
                          <p className="text-gray-600 text-xs">Veranstaltungsmanagement</p>
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">SCC Berlin</p>
                          <p className="text-gray-600 text-xs">Sportgroßveranstaltungen</p>
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">VfL Potsdam</p>
                          <p className="text-gray-600 text-xs">Marketing, Übungsleiter</p>
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">bwgt e.V.</p>
                          <p className="text-gray-600 text-xs">Projektkoordinator</p>
                        </div>
                      </div>
                </div>

                    <div className="bg-[#EEEA63] rounded-none p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Sportarten
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {['Handball', 'Fußball', 'Schwimmen', 'Ski', 'Golf' ,'Wasserrennsport (Kanurennsport)', 'Bouldern', 'und mehr'].map((sport, index) => (
                          <span key={index} className="px-3 py-1.5 rounded-none text-sm font-medium bg-white text-gray-900 border border-gray-900 shadow-sm">
                            {sport}
                          </span>
                        ))}
                </div>
                </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </section>
          </div>
        </div>
      </div>
    </div>
    <ContactBanner />
    </>
  )
}