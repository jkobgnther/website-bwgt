import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import BerlinMapInteractive from '@/components/BerlinMapInteractive'

export const metadata: Metadata = {
  title: 'Netzwerk der Bewegungslotsen – Bezirke Tempelhof-Schöneberg, Mitte, Charlottenburg-Wilmersdorf & Lichtenberg',
  description:
    'Informationen zum Netzwerk der Bewegungslotsen in Berlin: KiezSportLotsin in Mitte, Bewegungslotsen in Charlottenburg-Wilmersdorf und Lichtenberg sowie Bewegungskoordinator Tempelhof-Schöneberg.',
}

export default function Netzwerk() {
  const lotsen = [
    {
      name: 'KiezSportLotsin',
      bezirk: 'Berlin-Mitte',
      person: 'Susanne Bürger',
      description: 'Seit 2013 aktiv',
      funding: 'Gefördert durch Bezirksamt Mitte',
      carrier: 'Träger bwgt e.V.',
      image: '/fotos/susanne_buerger.png',
    },
    {
      name: 'Bewegungslotse',
      bezirk: 'Charlottenburg-Wilmersdorf',
      person: 'Adrian Löscher',
      description: 'Seit 2024 aktiv',
      funding: 'Gefördert durch Techniker Krankenkasse in Zusammenarbeit mit Bezirksamt Charlottenburg-Wilmersdorf',
      carrier: 'Träger bwgt e.V.',
      image: '/fotos/adrian_loescher.png',
    },
  ]

  return (
    <>
      {/* Header with Green Background */}
      <section className="bg-white pt-8 pb-0">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="relative min-h-[500px]">
              {/* Mobile: Content first, then map */}
              <div className="md:hidden">
                {/* Header - 2 lines */}
                <div className="flex items-center gap-0 mb-6">
                  <h1 className="heading-1 text-gray-900 mb-0">
                    Netzwerk der<br />
                    Bewegungslotsen
                  </h1>
                </div>
                
                {/* Text content */}
                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                  <p className="mb-6">
                    Neben dem Bewegungskoordinator für Tempelhof-Schöneberg gibt es derzeit in drei weiteren Berliner
                    Bezirken vergleichbare Projekte unter anderen Namen, aber mit dem gleichen Aufgabenfeld. Hierbei handelt es sich um die KiezSportLotsin für den Bezirk Mitte, den Bewegungslotsen für Charlottenburg-Wilmersdorf und die Bewegungslotsin für Lichtenberg. Zusammen mit dem Bewegungskoordinator für Tempelhof-Schöneberg bilden sie das „Netzwerk der Bewegungslotsen".
                  </p>
                  <a
                    href="https://www.bewegungslotsen-berlin.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-[#B2DFDA] text-gray-900 hover:bg-[#9fd0ca] shadow-md inline-block rounded-none"
                  >
                    Website der Bewegungslotsen
                  </a>
                </div>
                
                {/* Map */}
                <div className="w-full mb-6">
                  <BerlinMapInteractive />
                </div>
              </div>

              {/* Desktop: Map floats on the right */}
              <div className="hidden md:block">
                <div className="float-right ml-8 mb-6 w-full md:w-[50%] lg:w-[45%] max-w-xl -mt-12 md:-mt-8">
                  <BerlinMapInteractive />
                </div>
                
                {/* Header - 2 lines */}
                <div className="flex items-center gap-0 mb-6">
                  <h1 className="heading-1 text-gray-900 mb-0">
                    Netzwerk der<br />
                    Bewegungslotsen
                  </h1>
                  <div className="relative flex-shrink-0 p-0 pointer-events-none select-none" style={{ width: '120px', height: '60px', top: '-20px', left: '20px'}}>
                    <Image
                      src="/logo/yellowarrowsquare.png"
                      alt=""
                      fill
                      className="object-contain"
                      sizes="120px"
                      quality={100}
                    />
                  </div>
                </div>
                
                {/* Text content */}
                <div className="text-lg text-gray-700 leading-relaxed mb-6">
                  <p className="mb-6">
                  Neben dem Bewegungskoordinator für Tempelhof-Schöneberg gibt es derzeit in zwei weiteren Berliner Bezirken vergleichbare Projekte unter anderen Namen, aber mit dem gleichen Aufgabenfeld. Hierbei handelt es sich um die KiezSportLotsin für den Bezirk Mitte und den Bewegungslotsen für Charlottenburg-Wilmersdorf. Zusammen mit dem Bewegungskoordinator für Tempelhof-Schöneberg bilden sie das „Netzwerk der Bewegungslotsen“.
                  </p>
                  <a
                    href="https://www.bewegungslotsen-berlin.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-[#B2DFDA] text-gray-900 hover:bg-[#9fd0ca] shadow-md inline-block rounded-none"
                  >
                    Website der Bewegungslotsen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-4 items-start relative">
          {/* Left side: sidebanner images positioned to align with section headings */}
          <div className="w-full lg:w-[200px] xl:w-[250px] lg:flex-shrink-0 lg:self-start hide-sidebanners-below-1028">
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
                  Das Netzwerk
                </h2>
                  <div className="relative flex-shrink-0 p-0 pointer-events-none select-none" style={{ width: '120px', height: '60px', top: '-20px', left: '20px'}}>
                    <Image
                      src="/logo/greenarrowsquare.png"
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
                  {/* Image floated to the right on desktop */}
                  <div className="float-right ml-6 mb-4 w-full md:w-auto md:max-w-lg lg:max-w-xl pointer-events-none select-none">
                    <Image
                      src="/fotos/Team_Bewegungslotsen.JPG"
                      alt="Team Bewegungslotsen"
                      width={500}
                      height={700}
                      className="object-contain w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 500px"
                      quality={100}
                    />
                  </div>
                  
                <p className="text-justify leading-relaxed">
                Im August 2013 startete die KiezSportLotsin im Quartiersmanagement-Gebiet Brunnenstraße im Bezirk Mitte als Projekt von bwgt e.V. ihre Arbeit. In den folgenden Jahren kamen immer mehr Bezirksregionen hinzu. Seit 2016 ist die KiezSportLotsin für den gesamten Bezirk zuständig, wird von diesem auch finanziert und ist nach wie vor bei dem Träger bwgt e.V. angebunden. Aufgrund der Erfolge im Bezirk Mitte und der positiven Resonanzen entschied sich auch der Bezirk Tempelhof-Schöneberg im Jahr 2023 die Stelle des Bewegungskoordinators für den Bezirk bei dem Träger bwgt e.V. anzubinden und zu finanzieren. Im Jahr 2024 wurde das Team durch den Bewegungslotse für Charlottenburg-Wilmersdorf (bwgt e.V.) erweitert.
                </p>
                <p className="leading-relaxed font-semibold">
                So können sich mittlerweile Anwohner*innen und Akteure aus drei Bezirken an die „Bewegungslotsen“ wenden und von ihrer Arbeit profitieren.
                </p>
                {/* Steckbriefe */}
          <section>
            <br />
            <div className="flex items-center gap-0 mb-6">
              <h2 className="heading-3 mb-0">
                Steckbriefe der Bewegungslotsen
              </h2>
              <div className="relative flex-shrink-0 p-0 pointer-events-none select-none" style={{ width: '120px', height: '60px', top: '-20px', left: '0px'}}>
                <Image
                  src="/logo/purplearrowsquare.png"
                  alt=""
                  fill
                  className="object-contain"
                  style={{ transform: 'scaleX(-1)' }}
                  sizes="120px"
                  quality={100}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {lotsen.map((lotse, index) => {
                const bgColors = ['#DE5655', '#0A74BB']
                const textColors = ['#FFFFFF', '#FFFFFF']
                return (
                  <div 
                    key={index} 
                    className="rounded-none p-6 flex flex-col justify-between relative"
                    style={{ 
                      backgroundColor: bgColors[index],
                      color: textColors[index],
                      minHeight: '260px'
                    }}
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{lotse.name}</h3>
                      <p className="text-lg font-semibold mb-4 opacity-90">{lotse.bezirk}</p>
                      <p className="text-base mb-3 font-medium">{lotse.person}</p>
                      <p className="text-sm opacity-80">{lotse.description}</p>
                      {lotse.funding && (
                        <p className="text-sm opacity-90 mt-2 font-semibold">
                          {lotse.funding}
                        </p>
                      )}
                      {lotse.carrier && (
                        <p className="text-sm opacity-90 font-semibold">
                          {lotse.carrier}
                        </p>
                      )}
                    </div>
                    <div className="flex items-end justify-between mt-auto">
                      {index === 0 && (
                        <div className="mt-6">
                          <a
                            href="https://kiezsportlotsin.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-white text-gray-900 font-semibold rounded-none hover:opacity-90 transition-opacity text-sm"
                          >
                            Zur Webseite →
                          </a>
                        </div>
                      )}
                      {lotse.image && (
                        <div className="relative ml-auto" style={{ width: '140px', height: '140px' }}>
                          <Image
                            src={lotse.image}
                            alt={lotse.person}
                            fill
                            className="object-cover rounded-none"
                            sizes="140px"
                            quality={100}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

              </div>
              </div>
            </div>
          </section>
          </div>
        </div>
          </div>
        </div>
      </div>
    </>
  )
}

