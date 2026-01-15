export default function Barrierefreiheit() {
  return (
    <div className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">Erklärung zur Barrierefreiheit</h1>

          <div className="card bg-white border-2 border-gray-200 space-y-8">
            <section>
              <h2 className="heading-3 mb-4">Geltungsbereich</h2>
              <p className="text-gray-700">
                Diese Erklärung zur Barrierefreiheit gilt für die Website des Bewegungskoordinators
                Tempelhof-Schöneberg.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Stand der Vereinbarkeit mit den Anforderungen</h2>
              <p className="text-gray-700 mb-4">
                Diese Website ist teilweise mit der Barrierefreiheitsrichtlinie (EU) 2016/2102 vereinbar. Wir
                arbeiten kontinuierlich daran, die Anforderungen gemäß BITV 2.0 / WCAG 2.1 Level AA zu erfüllen.
              </p>
              <p className="text-gray-700">
                Stand der Erklärung: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Nicht barrierefreie Inhalte</h2>
              <p className="text-gray-700">
                Die nachstehend aufgeführten Inhalte sind derzeit noch nicht vollständig barrierefrei:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                <li>Einige Bilder haben noch keine vollständigen Alternativtexte</li>
                <li>Einige Formulare benötigen noch weitere Verbesserungen</li>
                <li>Videos sind derzeit noch nicht mit Untertiteln versehen</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Feedback und Kontakt</h2>
              <p className="text-gray-700 mb-4">
                Haben Sie festgestellt, dass Inhalte dieser Website nicht barrierefrei sind? Oder haben Sie
                Anregungen zur Verbesserung der Barrierefreiheit? Dann kontaktieren Sie uns bitte:
              </p>
              <div className="bg-[#f0f9f5] border border-[#d4ede0] rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Kontakt:</strong>
                  <br />
                  Max Günther
                  <br />
                  Bewegungskoordinator Tempelhof-Schöneberg
                  <br />
                  E-Mail:{' '}
                  <a
                    href="mailto:guenther@bwgt.org"
                    className="text-[#7FBF97] hover:text-[#6ba87f] underline transition-colors"
                  >
                    guenther@bwgt.org
                  </a>
                  <br />
                  Telefon:{' '}
                  <a
                    href="tel:+4915754762597"
                    className="text-[#7FBF97] hover:text-[#6ba87f] underline transition-colors"
                  >
                    0157/ 54 762 597
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Durchsetzungsverfahren</h2>
              <p className="text-gray-700">
                Wenn Sie mit unserer Antwort auf Ihre Meldung nicht zufrieden sind, können Sie sich an die
                Schlichtungsstelle wenden. Die Schlichtungsstelle hat die Aufgabe, bei Streitigkeiten zwischen
                Menschen mit Behinderungen und öffentlichen Stellen des Bundes eine außergerichtliche Lösung zu
                finden.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}








