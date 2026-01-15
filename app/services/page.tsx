import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ExpandableFAQ from '@/components/ExpandableFAQ'
import ContactBanner from '@/components/ContactBanner'

export const metadata: Metadata = {
  title: 'Beratungen & Services – Bewegungskoordinator Tempelhof-Schöneberg',
  description:
    'Beratungen & Services des Bewegungskoordinators Tempelhof-Schöneberg für Anwohner*innen, Einrichtungen und Sportanbieter im Bezirk.',
}

export default function Services() {
  const anwohnerFAQs = [
    {
      question: 'Wer kann Anfragen stellen?',
      answer:
        'Alle Anwohner*innen die im Bezirk auf der Suche nach einem Sport- und Bewegungsangebot sind, von Jung bis Alt, mit und ohne Sporterfahrung. Es können auch Anfragen für Andere, wie Familienangehörige, Freunde und Bekannte gestellt werden.',
    },
    {
      question: 'Wie erreiche ich den Bewegungskoordinator?',
      answer:
        'Sie können den Bewegungskoordinator anrufen, eine E-Mail oder WhatsApp schreiben, über die Sozialen Medien (Facebook, Instagram) Kontakt aufnehmen oder auf Veranstaltungen und Festen einfach ansprechen.',
    },
    {
      question: 'Welche Informationen werden benötigt?',
      answer: (
        <div>
          <p className="mb-2">
            Damit der Bewegungskoordinator bestmöglich bei der Suche unterstützen kann sind folgende Informationen hilfreich:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>gewünschte Sport-/ Bewegungsarten</li>
            <li>Alter</li>
            <li>Geschlecht</li>
            <li>Wohnort (Bezirksregion, Straße, S-/U-Bahnhof)</li>
          </ul>
          <p className="mt-2">
            Je mehr Informationen Sie dem Bewegungskoordinator geben, desto besser kann er nach einem passgenauen Angebot für Sie suchen. Geben Sie daher auch gerne an, wie Ihre zeitliche Verfügbarkeit aussieht und was Sie von einem Angebot erwarten oder auch nicht wünschen.
          </p>
        </div>
      ),
    },
    {
      question: 'Sind Beratungsgespräche möglich?',
      answer:
        'Ja, ein persönliches Beratungsgespräch ist möglich und wird bevorzugt telefonisch oder als Videokonferenz durchgeführt. Ein persönliches Treffen ist in Ausnahmefällen auch möglich. Der Bewegungskoordinator stellt Nachfragen zu Ihrem Sportwunsch und versucht, dazu passende Empfehlungen zu geben.',
    },
    {
      question: 'Wie erhalte ich die Informationen?',
      answer: (
        <div>
          <p className="mb-2">
            Sie bekommen schriftliche Informationen und Hinweise für die Kontaktaufnahme zu den jeweiligen Anbieter*innen. Für besonders häufig nachgefragte Sportarten (z.B. Fußball oder Schwimmen) wurden Übersichten mit Anbieter*innen erstellt. Hier finden Sie allgemeine Informationen (Kontaktdaten, Homepage, Kosten, Art des Angebots und Ziel-/Altersgruppen).
          </p>
          <p>
            Der Bewegungskoordinator ist bemüht Ihnen mehrere Empfehlungen für Anbieter*innen, die gut passen könnten, zukommen zu lassen. Sie müssen dann „nur" entscheiden, welche Anbieter Sie ausprobieren möchten, und Kontakt zur Vereinbarung einer Schnuppereinheit aufnehmen.
          </p>
        </div>
      ),
    },
    {
      question: 'Welche Angebote werden empfohlen?',
      answer: (
        <div>
          <p className="mb-2">
            Der Bewegungskoordinator gibt Ihnen Informationen zu Gruppen vor allem in Sportvereinen oder öffentlichen Einrichtungen, dazu gehören auch Kurse und Angebote in der Volkshochschule, der Musikschule oder den Berliner Bäder Betrieben. Der Bewegungskoordinator versucht, alle Sportanbieter im Blick zu haben, dazu gehören auch gewerbliche Anbieter (z.B. Tanzschulen, Kampfkunstschulen, Schwimmschulen) oder nachbarschaftliche Gruppen.
          </p>
          <p>
            Der Bewegungskoordinator informiert auch über kostenlose Angebote, z.B. in öffentlichen Einrichtungen (Familienzentren, Kinder- und Jugendfreizeiteinrichtungen, Seniorenbegegnungsstätten, Nachbarschaftshäusern) und kennt auch Bewegungsprojekte in Berlin und in Tempelhof-Schöneberg. Dies sind kieznahe kostenlose Angebote der Quartiersmanagements sowie berlinweite Programme wie „Sport im Park" und „Berlin bewegt sich".
          </p>
        </div>
      ),
    },
    {
      question: 'Feedback und Rückmeldung',
      answer: (
        <div>
          <p className="mb-2">
            Der Bewegungskoordinator freut sich besonders dann über eine Rückmeldung, wenn Sie durch die Beratung ein Angebot gefunden haben.
          </p>
          <p className="mb-2">
            Berichten Sie gerne von Ihren Erfahrungen. Ihre Informationen helfen auch dabei, anderen Sportinteressierten gute Sportangebote weiterzuempfehlen.
          </p>
          <p>
            Wenn Sie nicht das richtige Angebot gefunden haben und weiter auf der Suche sind, kommen Sie gerne erneut auf den Bewegungskoordinator zu! Berichten Sie ihm bitte, was nicht gepasst hat, woran es gescheitert ist. Der Bewegungskoordinator recherchiert dann erneut für Sie.
          </p>
        </div>
      ),
    },
  ]

  const multiplikatorFAQs = [
    {
      question: 'Kann ich Anfragen für Besucher*innen meiner Einrichtung stellen?',
      answer: (
        <div>
          <p className="mb-2">
            Für manche Familien oder Interessierte kann es eine zu große Hürde sein, selbst eine Anfrage zu stellen. Sehr gern können Sie den Bewegungskoordinator kontaktieren und die Empfehlungen für die jeweiligen Angebote entgegennehmen. Damit der Bewegungskoordinator bestmöglich bei der Suche unterstützen kann sind folgende Informationen hilfreich:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Gewünschte Sport-/Bewegungsarten</li>
            <li>Alter</li>
            <li>Geschlecht</li>
            <li>Wohnort (Bezirksregion, Straße, S-/U-Bahnhof)</li>
          </ul>
          <p className="mb-2">
            Je mehr Informationen sie dem Bewegungskoordinator geben, desto besser kann er nach einem passgenauen Angebot für die betreffende Person suchen. Geben Sie daher auch gerne an wie die zeitliche Verfügbarkeit aussieht und was von einem Angebot erwarten oder auch nicht gewünscht wird.
          </p>
          <p>
            Sie erhalten häufiger Anfragen zum Thema Sport und Bewegung, dann nehmen Sie gerne Kontakt auf und der Bewegungskoordinator sendet ein Formular, mit dem Sie alle relevanten Informationen über den jeweiligen Sportwunsch erfassen und zusenden können.
          </p>
        </div>
      ),
    },
    {
      question: 'Ist es möglich eine Beratung in meiner Einrichtung durchzuführen?',
      answer: (
        <div>
          <p className="mb-2">
            Ja, der Bewegungskoordinator kommt gerne zu Ihnen, z.B. wenn mehrere Personen Sportanfragen stellen möchten. Er informiert auch interessierte Gruppen Ihrer Einrichtung über Sport und Bewegung in Ihrem Kiez und gibt allgemeine Hinweise, wo Anbieter und Gruppen zu finden sind. Vereinbaren Sie dafür gerne einen Termin.
          </p>
          <p>
            Wenn Mitarbeiter*innen Ihrer Einrichtung von dem Projekt erfahren sollen, kommt der Bewegungskoordinator auch gern zu Ihnen und stellt das Konzept bzw. seine Tätigkeitsfelder vor. Das kann im Rahmen einer regelmäßigen Teamsitzung oder an einem extra Termin stattfinden.
          </p>
        </div>
      ),
    },
    {
      question: 'Wir suchen eine/n Übungsleiter*in für ein Bewegungsangebot.',
      answer:
        'Durch das große Netzwerk mit Akteuren des Sports kann der Bewegungskoordinator bei der Suche nach Übungsleiter*innen unterstützen. Es können Hinweise zu entsprechenden Ansprechpartnern gegeben werden und Gesuche über das Netzwerk des Bewegungskoordinators geteilt werden.',
    },
    {
      question: 'Kennt der Bewegungskoordinator unsere Einrichtung/Angebote?',
      answer: (
        <div>
          <p className="mb-2">
            Melden Sie sich gerne, wenn Sie an einer Vernetzung mit dem Bewegungskoordinator interessiert sind oder teilen Sie wichtige Informationen zu Ihrer Einrichtung und den Angeboten.
          </p>
          <p className="mb-2">Beispiele:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Es gibt ein neues Angebot in meiner Einrichtung.</li>
            <li>Folgende Gruppen sind bereits voll und können keine weiteren TN aufnehmen: …</li>
            <li>Zeiten oder der Ort des Angebots haben sich geändert</li>
            <li>Sie planen ein Fest oder eine Veranstaltung.</li>
          </ul>
        </div>
      ),
    },
    {
      question: 'Ist es möglich Flyer/Poster für meine Einrichtung zu bekommen?',
      answer: (
        <div>
          <p className="mb-2">
            Ja. Teilen Sie dem Bewegungskoordinator gerne mit, wenn Sie Flyer benötigen. Es ist möglich Ihnen die Flyer digital per Mail oder auch in gedruckter Version zukommen zu lassen.
          </p>
          <p>
            Verfügbar sind auch Plakate in verschiedenen Größen (DIN A5 – A4 – A3), die Sie in Ihrer Einrichtung aushängen können.
          </p>
          <p className="mt-2">
            Sollten Sie spontan einen Flyer/Poster benötigen, finden Sie im Downloadbereich die entsprechenden Dateien.
          </p>
          <div className="mt-3">
            <Link
              href="/blog#downloads"
              className="btn bg-[#7FBF97] text-gray-900 hover:bg-[#6ba87f] shadow-md inline-block rounded-none"
            >
              Zum Downloadbereich
            </Link>
          </div>
        </div>
      ),
    },
    {
      question: 'Kann ich den Bewegungskoordinator zu einer Netzwerkrunden einladen?',
      answer: (
        <div>
          <p className="mb-2">
            Der Bewegungskoordinator ist immer interessiert, sich an bestehenden Netzwerkrunden zu beteiligen, die sich mit Bewegungsförderung im weitesten Sinne beschäftigen. Je nach verfügbaren Ressourcen und sofern das den eigenen Projektzielen dienlich ist, kann der Bewegungskoordinator auch regelmäßige Teilnahmen und eine fortlaufende Mitarbeit ermöglichen, z.B. in Bildungsverbünden.
          </p>
          <p>
            Der Bewegungskoordinator kommt gern auf Anfrage in bestehende Netzwerk- oder AG-Treffen im Bezirk, um über Sport- und Bewegung zu informieren oder um Impulse für neue Angebote zur Bewegungsförderungen zu geben. Dies kann z.B. ein Treffen des Jugendamts nach AG §78, eine Kiezwerkstatt im Rahmen des Quartiersmanagements, ein Stadtteilplenum oder der eine oder andere „Runde Tisch" sein.
          </p>
        </div>
      ),
    },
    {
      question: 'Meine Organisation ist neu im Bezirk. Wie kann mich der Bewegungskoordinator unterstützen?',
      answer: (
        <div>
          <p className="mb-2">
            Neue potenzielle Multiplikator*innen im Bezirk möchte der Bewegungskoordinator immer kennen lernen! Großes Interesse hat der Bewegungskoordinator natürlich, wenn Sie selbst Bewegungsangebote durchführen.
          </p>
          <p>
            Nehmen Sie gerne Kontakt für ein Kennerlerntreffen auf. Der Bewegungskoordinator informiert Sie gern über andere bereits bestehende Netzwerke oder andere Akteure, die für Sie relevant sein könnten. Kooperationen sind immer willkommen.
          </p>
        </div>
      ),
    },
  ]

  const sportanbieterFAQs = [
    {
      question: 'Wir haben ein neues Sportangebot.',
      answer: (
        <div>
          <p className="mb-2">
            Sportanbieter jeglicher Art können sich an den Bewegungskoordinator wenden, dazu gehören Sportvereine oder gewerbliche Anbieter, einzelne selbständige oder ehrenamtlich tätige Trainer*innen usw.
          </p>
          <p className="mb-2">
            Schicken Sie dem Bewegungskoordinator Informationen oder Flyer (digital oder in Papierform) zu, welche an Interessierte weitergeben werden können. Jede zusätzliche Information über die Zielgruppe und/oder Ausrichtung eines neuen Sportangebots ist hilfreich, damit möglichst passende Personen zu Ihnen vermittelt werden können.
          </p>
          <p>
            Die Weiterverbreitung dieser Information erfolgt über die Sozialen Medien (Facebook, Instagram), das Netzwerk des Bewegungskoordinators, Verteiler im Bezirk und die Öffentlichkeitsarbeit des Bewegungskoordinators vor Ort auf Veranstaltungen und Feste. Veröffentlicht werden vor allem niedrigschwellige, breitensportliche, gesundheitsorientierte Angebote von eher gemeinnützigen Trägern, die entweder kostenlos sind oder wenig kosten.
          </p>
        </div>
      ),
    },
    {
      question: 'Wir suchen nach Mitgliedern/Teilnehmer*innen.',
      answer: (
        <div>
          <p className="mb-2">
            Teilen Sie dem Bewegungskoordinator gern mit, für welche Sportart Sie Sportler*innen suchen. Daneben sind Altersklassen (Aussage zu Jahrgängen oder Alter), Leistungsklasse, Spiel-/Wettkampferfahrung und mögliche weitere Anforderungen an potenzielle Teilnehmende für Ihre Gruppe relevant, damit gezielt Interessierte auf Ihre Gruppe(n) hingewiesen werden können. Je detaillierter die Beschreibung ist, desto zielgenauer kann so bei Sportanfragen Ihre Gruppe bzw. Ihr Verein empfohlen werden.
          </p>
          <p>
            Leiten Sie gern rechtzeitig Ankündigungen für besondere Schnupperangebote, Sportfeste, Tage der Offenen Tür oder andere Maßnahmen weiter, mit denen Sie Sportinteressierte auf Ihre Organisation aufmerksam machen möchten.
          </p>
          <p className="mt-2">
            Die Weiterverbreitung dieser Information erfolgt über die Sozialen Medien (Facebook, Instagram), das Netzwerk des Bewegungskoordinators, Verteiler im Bezirk und die Öffentlichkeitsarbeit des Bewegungskoordinators vor Ort auf Veranstaltungen und Festen.
          </p>
        </div>
      ),
    },
    {
      question: 'Wir sind neu im Bezirk.',
      answer: (
        <div>
          <p className="mb-2">
            Neue Sportvereine und Bewegungsakteure im Bezirk möchte der Bewegungskoordinator gern kennen lernen! Je besser der Bewegungskoordinator Ihre Angebote und Zielgruppen kennt, umso besser kann er möglichst passende Sportinteressierte auf Ihre Gruppen hinweisen.
          </p>
          <p>
            Nehmen Sie gerne Kontakt für ein Kennerlerntreffen auf. Der Bewegungskoordinator informiert Sie auch über bereits bestehende Netzwerke oder andere Akteure, die für Sie relevant sein könnten. Kooperationen sind immer willkommen.
          </p>
        </div>
      ),
    },
    {
      question: 'Wir suchen Kooperationspartner*innen.',
      answer:
        'Nehmen Sie gern Kontakt mit dem Bewegungskoordinator auf und beschreiben Sie das Vorhaben oder die Idee, wofür Sie Partner suchen. Der Bewegungskoordinator kann vor allem dabei helfen, öffentliche Einrichtungen (Träger von Nachbarschaftshäusern, Kinder- und Jugendfreizeiteinrichtungen, Familienzentren, Seniorenbegegnungsstätten oder ähnliche), Schulen, Quartiersmanagements oder auch andere Sportvereine als Kooperationspartner zu nennen.',
    },
    {
      question: 'Wir benötigen Nutzungszeiten für öffentliche Sportanlagen/Turnhallen',
      answer: (
        <div>
          <p className="mb-2">
            Zuständig ist der Fachbereich Sport des Schul- und Sportamts Tempelhof-Schöneberg. Informationen gibt es auf der Homepage des Bezirksamts Tempelhof-Schöneberg (
            <a
              href="https://www.berlin.de/ba-tempelhof-schoeneberg/politik-und-verwaltung/aemter/schul-und-sportamt/sportamt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7FBF97] hover:text-[#6ba87f] underline"
            >
              https://www.berlin.de/ba-tempelhof-schoeneberg/politik-und-verwaltung/aemter/schul-und-sportamt/sportamt/
            </a>
            ). Der Bewegungskoordinator erklärt Ihnen gerne, wie die Beantragung von Hallenzeiten funktioniert.
          </p>
        </div>
      ),
    },
    {
      question: 'Wir suchen nach Räumen für unsere Angebote.',
      answer:
        'Der Bewegungskoordinator hilft gerne bei der Suche nach geeigneten Räumen für Ihre Angebote und gibt Hinweise sowie Kontaktdaten weiter.',
    },
  ]

  return (
    <>
    <div className="section bg-white relative overflow-x-hidden">
      <div className="container-custom overflow-x-hidden">
        <h1 className="heading-1 text-center mb-8">Beratungen & Services</h1>
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
          <div className="flex-1 max-w-4xl relative overflow-x-hidden min-w-0">

          {/* Anwohner*innen Section */}
          <section className="mb-16">
            <div>
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h2 className="heading-3 mb-0 flex-1 min-w-0">
                  Anwohner*innen des Bezirkes Tempelhof-Schöneberg
                  <br />
                  <span className="text-lg font-normal">- unabhängig von Alter, Geschlecht, Herkunft, Religion</span>
                </h2>
                  <div className="hidden min-[358px]:block relative flex-shrink-0 p-2 pointer-events-none select-none w-[70px] h-[70px] min-[391px]:w-[120px] min-[391px]:h-[120px]" style={{ top: '-30px'}}>
                    <Image
                      src="/logo/purplearrowsquare.png"
                      alt=""
                      fill
                      className="object-contain"
                      style={{ transform: 'scaleX(-1)' }}
                      sizes="(max-width: 390px) 70px, 120px"
                      quality={100}
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-justify leading-relaxed mb-4">
                  Der Bewegungskoordinator Max Günther informiert Anwohner*innen{' '}
                  <strong className="text-gray-900">KOSTENLOS</strong> über die im Bezirk vorhandenen und
                  wohnortnahen Sport- und Bewegungsangebote, steht beratend zur Seite und vermittelt. Er
                  unterstützt bei der Suche nach kostenlosen und kostenpflichtigen Bewegungsmöglichkeiten, dem
                  passenden Sportkurs, dem richtigen Bewegungsangebot in der Nähe und nach dem richtigen Verein
                  oder Anbieter für Sport und Bewegung.
                </p>
                <p className="text-gray-700 text-justify leading-relaxed mb-4">
                  Für eine Beratung rufen Sie den Bewegungskoordinator einfach an oder schreiben ihm eine
                  Nachricht. Bitte geben Sie bei Interesse folgende Informationen an:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>gewünschte Sport- oder Bewegungsart</li>
                  <li>Alter, Geschlecht</li>
                  <li>Ihren Wohnort (nächste Hauptstraße oder S-/U-Bahnhof) an.</li>
                </ul>
                <p className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  Im Nachgang erhalten Sie die entsprechenden Informationen, Tipps oder Empfehlungen. Den
                  Kontakt zum Anbieter müssen Sie eigenständig aufnehmen.
                </p>
                <p className="text-gray-700 text-center leading-relaxed mb-4">
                  Das Angebot ist für Sie <strong className="text-gray-900">kostenlos</strong>.
                </p>
                <p className="text-gray-800 text-center leading-relaxed mb-4 bg-amber-50 border border-amber-200 rounded-lg shadow-md p-4">
                  Die Beratung erfolgt auf <strong className="text-gray-900">Deutsch</strong> und auf <strong className="text-gray-900">Englisch</strong>. Dem
                  Bewegungskoordinator stehen leider keine Sprachmittler*innen bzw. Dolmetscher*innen für andere
                  Sprachen zur Verfügung.
                </p>
                <Link
                  href="/kontakt"
                  className="btn bg-[#9C849E] text-gray-900 hover:bg-[#8c768e] shadow-md inline-block rounded-none"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
              <ExpandableFAQ items={anwohnerFAQs} />
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
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h2 className="heading-3 mb-0 flex-1 min-w-0">
                  Multiplikator*innen
                  <br />
                  <span className="text-lg font-normal">- Einrichtungen, Träger, Projekte, Netzwerke im Bezirk</span>
                </h2>
                  <div className="hidden min-[358px]:block relative flex-shrink-0 p-2 pointer-events-none select-none w-[70px] h-[70px] min-[391px]:w-[120px] min-[391px]:h-[120px]" style={{ top: '-30px'}}>
                    <Image
                      src="/logo/greenarrowsquare.png"
                      alt=""
                      fill
                      className="object-contain"
                      style={{ transform: 'scaleX(-1)' }}
                      sizes="(max-width: 390px) 70px, 120px"
                      quality={100}
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-justify leading-relaxed mb-6">
                  Der Bewegungskoordinator unterstützt Sie bei allen „sportlichen" Fragen oder Themen, die Ihnen
                  im Alltag begegnen entsprechend seiner Möglichkeiten. Wenn Sie Anbieter*innen oder Trainer*innen für neue Sportangebote suchen, kann der Bewegungskoordinator Sie ggf. unterstützen.
                </p>
                <p className="text-gray-700 text-justify leading-relaxed mb-6">
                  Werden Sie gern Multiplikator*in und stellen Sie Anfragen für Ihre Besucher*innen.
                </p>
                <p className="text-gray-700 text-justify leading-relaxed mb-6">
                  Der Bewegungskoordinator kann auch in Ihre Einrichtung kommen, sich vorzustellen, um
                  interessierte Gruppen oder Mitarbeitende über Sport und Bewegung zu informieren, sich zu
                  vernetzen und nach Kooperationsmöglichkeiten zu suchen.
                </p>
                <Link
                  href="/kontakt"
                  className="btn bg-[#7FBF97] text-gray-900 hover:bg-[#6ba87f] shadow-md inline-block rounded-none"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
              <ExpandableFAQ items={multiplikatorFAQs} />
            </div>
          </section>

          {/* Sportanbieter Section */}
          <section className="mb-16 relative">
            {/* Sidebanner 3 - aligned with this section heading */}
            <div className="hide-sidebanners-below-1028 absolute -left-[220px] xl:-left-[280px] top-0 pointer-events-none select-none">
              <div className="relative w-[200px] xl:w-[250px]">
                <Image
                  src="/logo/sidebanner_3.png"
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
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h2 className="heading-3 mb-0 flex-1 min-w-0">
                  Anbieter von Sport und Bewegung
                  <br />
                  <span className="text-lg font-normal">- Sportvereine, Projekte, Träger und weitere Sportanbieter</span>
                </h2>
                  <div className="hidden min-[358px]:block relative flex-shrink-0 p-2 pointer-events-none select-none w-[70px] h-[70px] min-[391px]:w-[120px] min-[391px]:h-[120px]" style={{ top: '-30px'}}>
                    <Image
                      src="/logo/yellowarrowsquare.png"
                      alt=""
                      fill
                      className="object-contain"
                      style={{ transform: 'scaleX(-1)' }}
                      sizes="(max-width: 390px) 70px, 120px"
                      quality={100}
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-justify leading-relaxed mb-6">
                  Der Bewegungskoordinator recherchiert Informationen über Sport- und Bewegungsangebote im Bezirk
                  Tempelhof-Schöneberg hauptsächlich über die Webseiten und Social-Media-Kanäle der Anbieter,
                  hält aber auch nach Aushängen oder ausgelegten Flyern im öffentlichen Raum und Informationen in
                  Broschüren und Zeitungen Ausschau. Sehr gern können Sie den Bewegungskoordinator direkt
                  kontaktieren und ihm aktuelle Informationen über Ihre Gruppe(n) geben. Willkommen, sind
                  insbesondere Informationen über neue Angebote und Gruppen. Je besser der Bewegungskoordinator
                  Ihre Angebote kennt, umso besser kann er gezielt möglichst passende Bewegungs- und Sportinteressierte auf Ihre Gruppe(n) hinweisen. Sportanbieter jeglicher Art können sich melden, das umfasst Sportvereine, freie Träger, kommerzielle Anbieter, einzelne selbstständige oder ehrenamtlich tätige Trainer*innen und vieles mehr. Der Bewegungskoordinator ist immer an einem Austausch und an Kooperationen interessiert.
                </p>
                <Link
                  href="/kontakt"
                  className="btn bg-[#EEEA63] text-gray-900 hover:bg-[#d4d059] shadow-md inline-block rounded-none"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
              <ExpandableFAQ items={sportanbieterFAQs} />
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
