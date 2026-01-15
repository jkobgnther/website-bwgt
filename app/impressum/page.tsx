import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – Bewegungskoordinator Tempelhof-Schöneberg',
}

export default function Impressum() {
  return (
    <div className="section bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="heading-1 mb-8">Impressum</h1>

        <section className="space-y-6 text-gray-800">
          <div>
            <h2 className="heading-3 mb-2">Angaben gemäß § 5 DDG</h2>
            <p>
              bwgt e.V.<br />
              Brunhildstraße 12<br />
              10829 Berlin
            </p>
            <p className="mt-2">
              Vereinsregister: VR22211<br />
              Registergericht: Amtsgericht Charlottenburg
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Vertreten durch:</h3>
            <p>
              Birgit Funke<br />
              Tim Krüger ?
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Kontakt</h3>
            <p>
              Telefon: 030 / 789 58 550<br />
              Telefax: 030 / 789 58 552<br />
              E-Mail:{' '}
              <a href="mailto:info@bwgt.org" className="text-primary-600 hover:underline">
                info@bwgt.org
              </a>{' '}
              oder{' '}
              <a href="mailto:bewegt@bwgt.org" className="text-primary-600 hover:underline">
                bewegt@bwgt.org
              </a>
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-2">Redaktionell verantwortlich</h2>
            <p>
              bwgt e.V.<br />
              Brunhildstraße 12<br />
              10829 Berlin
            </p>
            <p className="mt-2">
              Redakteur:<br />
              Max Günther – Bewegungskoordinator Tempelhof-Schöneberg
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}