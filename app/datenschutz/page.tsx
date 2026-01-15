export default function Datenschutz() {
  return (
    <div className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">Datenschutzerklärung</h1>

          <div className="card bg-white border-2 border-gray-200 space-y-8">
            <section>
              <h2 className="heading-3 mb-4">1. Datenschutz auf einen Blick</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                    Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                    denen Sie persönlich identifiziert werden können.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-3 mb-4">2. Verantwortliche Stelle</h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p>
                  <strong>bwgt e.V.</strong>
                  <br />
                  (Platzhalter-Adresse)
                  <br />
                  Berlin
                </p>
                <p>
                  E-Mail:{' '}
                  <a
                    href="mailto:info@bwgt.org"
                    className="text-[#7FBF97] hover:text-[#6ba87f] underline transition-colors"
                  >
                    info@bwgt.org
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-3 mb-4">3. Kontaktformular</h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                  Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
                  Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                  Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
                  berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                  Abs. 1 lit. f DSGVO).
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-3 mb-4">4. Ihre Rechte</h2>
              <div className="space-y-2 text-gray-700">
                <p>Sie haben jederzeit das Recht:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)
                  </li>
                  <li>
                    Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)
                  </li>
                  <li>
                    Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO)
                  </li>
                  <li>
                    Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO)
                  </li>
                  <li>
                    Widerspruch gegen die Verarbeitung Ihrer Daten zu erheben (Art. 21 DSGVO)
                  </li>
                  <li>
                    Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen
                    Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="heading-3 mb-4">5. Kontakt</h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                </p>
                <p>
                  E-Mail:{' '}
                  <a
                    href="mailto:guenther@bwgt.org"
                    className="text-[#7FBF97] hover:text-[#6ba87f] underline transition-colors"
                  >
                    guenther@bwgt.org
                  </a>
                </p>
              </div>
            </section>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Hinweis:</strong> Diese Datenschutzerklärung ist ein Platzhalter und muss noch mit den
                vollständigen rechtlichen Angaben ergänzt werden. Bitte konsultieren Sie einen Rechtsanwalt für
                die vollständige und rechtskonforme Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}








