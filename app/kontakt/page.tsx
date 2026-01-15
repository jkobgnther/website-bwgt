'use client'

import { useState } from 'react'

export default function Kontakt() {
  const [formType, setFormType] = useState<'general' | 'beratung'>('general')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSubmitted(false)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Convert FormData to object
    const data: Record<string, string> = {
      formType: formType,
    }
    
    formData.forEach((value, key) => {
      if (value) {
        data[key] = value.toString()
      }
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      // Check if response is JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        console.error('Non-JSON response:', text)
        throw new Error('Ungültige Antwort vom Server. Bitte versuchen Sie es später erneut.')
      }

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Fehler beim Senden der Nachricht')
      }

      setSubmitted(true)
      form.reset()
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 text-center mb-4">Kontakt</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Nehmen Sie Kontakt auf – Der Bewegungskoordinator hilft Ihnen gerne weiter!
          </p>

          {/* Contact Info Banner */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-[#7FBF97] to-[#6ba87f] rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="heading-3 text-white text-center mb-8">Direkter Kontakt</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Email Card */}
                <a
                  href="mailto:guenther@bwgt.org"
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-[#f0f9f5] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#7FBF97] transition-colors">
                    <svg
                      className="w-8 h-8 text-[#7FBF97] group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">E-Mail</h3>
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-[#7FBF97] transition-colors">
                    guenther@bwgt.org
                  </p>
                </a>

                {/* Social Card */}
                <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-[#f0f4ff] rounded-full flex items-center justify-center mb-4 transition-colors group-hover:bg-[#7FBF97]">
                    <svg className="w-8 h-8 text-[#7FBF97] transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Social Media</h3>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="https://www.instagram.com/bewegungskoordinator_bwgt/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-gray-900 hover:text-[#7FBF97] transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/Bewegungskoordinator/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-gray-900 hover:text-[#7FBF97] transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-[#f0f9f5] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#7FBF97] transition-colors">
                    <svg
                      className="w-8 h-8 text-[#7FBF97] group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Telefon</h3>
                  <div className="text-lg font-semibold text-gray-900 space-y-2">
                    <a
                      href="tel:+4915754762597"
                      className="block transition-colors hover:text-[#7FBF97]"
                    >
                    0157/ 54 762 597
                    </a>
                    <a
                      href="tel:+493078958550"
                      className="block transition-colors hover:text-[#7FBF97]"
                    >
                      030/ 78 95 85 50
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Type Selector */}
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setFormType('general')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                formType === 'general'
                  ? 'bg-[#7FBF97] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Allgemeine Anfrage
            </button>
            <button
              onClick={() => setFormType('beratung')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                formType === 'beratung'
                  ? 'bg-[#7FBF97] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Beratungsanfrage
            </button>
          </div>

          {/* General Form */}
          {formType === 'general' && (
            <div className="card bg-white border-2 border-gray-200">
              <h2 className="heading-3 mb-6">Allgemeine Anfrage</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="gen-anrede" className="block text-sm font-medium text-gray-700 mb-2">
                      Anrede
                    </label>
                    <select
                      id="gen-anrede"
                      name="anrede"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                    >
                      <option value="">Bitte wählen</option>
                      <option>Herr</option>
                      <option>Frau</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="gen-vorname" className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname
                    </label>
                    <input
                      type="text"
                      id="gen-vorname"
                      name="vorname"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                      autoComplete="given-name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="gen-nachname" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="gen-nachname"
                      name="nachname"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                      autoComplete="family-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="gen-telefon" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="gen-telefon"
                      name="telefon"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="gen-email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="gen-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="gen-nachricht" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="gen-nachricht"
                    name="nachricht"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                  />
                </div>
                <div className="md:flex md:items-center md:justify-between md:space-y-0 space-y-2">
                  <div className="space-y-1 text-sm text-gray-600 md:max-w-xl">
                    <p>
                      Mit dem Ausfüllen und Abschicken des Formulars erklären Sie sich mit der Verarbeitung Ihrer
                      Daten einverstanden.{' '}
                      <a href="/datenschutz" className="underline text-[#7FBF97] hover:text-[#6ba87f]">
                        Datenschutzerklärung
                      </a>
                    </p>
                    <p>
                    Pflichtfelder sind mit <span className="text-red-600">*</span> markiert.
                  </p>
                  </div>
                  <div className="pt-1 md:pt-0">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
                  </button>
                  </div>
                </div>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}
                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. 
                  </div>
                )}
              </form>
            </div>
          )}

          {/* Beratungsanfrage Form */}
          {formType === 'beratung' && (
            <div className="card bg-white border-2 border-gray-200">
              <h2 className="heading-3 mb-6">Beratungsanfrage</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ber-anrede" className="block text-sm font-medium text-gray-700 mb-2">
                      Anrede
                    </label>
                    <select
                      id="ber-anrede"
                      name="anrede"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                    >
                      <option value="">Bitte wählen</option>
                      <option>Herr</option>
                      <option>Frau</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ber-vorname" className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname
                    </label>
                    <input
                      type="text"
                      id="ber-vorname"
                      name="vorname"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                      autoComplete="given-name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ber-nachname" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="ber-nachname"
                      name="nachname"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                      autoComplete="family-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="ber-telefon" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="ber-telefon"
                      name="telefon"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ber-email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="ber-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="ber-geschlecht" className="block text-sm font-medium text-gray-700 mb-2">
                      Geschlecht
                    </label>
                    <select
                      id="ber-geschlecht"
                      name="geschlecht"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                    >
                      <option value="">Bitte wählen</option>
                      <option>männlich</option>
                      <option>weiblich</option>
                      <option>divers</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ber-wohnort" className="block text-sm font-medium text-gray-700 mb-2">
                      Wohnort
                    </label>
                    <select
                      id="ber-wohnort"
                      name="wohnort"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                    >
                      <option value="">Bitte wählen</option>
                      <option>Friedenau</option>
                      <option>Schöneberg</option>
                      <option>Tempelhof</option>
                      <option>Mariendorf</option>
                      <option>Marienfelde</option>
                      <option>Lichtenrade</option>
                      <option>Anderer Bezirk</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ber-alter" className="block text-sm font-medium text-gray-700 mb-2">
                      Alter
                    </label>
                    <input
                      type="number"
                      id="ber-alter"
                      name="alter"
                      min={0}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="ber-art" className="block text-sm font-medium text-gray-700 mb-2">
                    Gewünschte Sport-/Bewegungsart
                  </label>
                  <input
                    type="text"
                    id="ber-art"
                    name="art"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                    placeholder="z.B. Schwimmen, Fußball, Yoga..."
                  />
                </div>
                <div>
                  <label htmlFor="ber-nachricht" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="ber-nachricht"
                    name="nachricht"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FBF97] focus:border-[#7FBF97]"
                    placeholder="Beschreiben Sie kurz Ihren Bedarf oder Ihre Fragen..."
                  />
                </div>
                <div className="md:flex md:items-center md:justify-between md:space-y-0 space-y-2">
                  <div className="space-y-1 text-sm text-gray-600 md:max-w-xl">
                    <p>
                      Mit dem Ausfüllen und Abschicken des Formulars erklären Sie sich mit der Verarbeitung Ihrer
                      Daten einverstanden.{' '}
                      <a href="/datenschutz" className="underline text-[#7FBF97] hover:text-[#6ba87f]">
                        Datenschutzerklärung
                      </a>
                    </p>
                    <p>
                    Pflichtfelder sind mit <span className="text-red-600">*</span> markiert.
                  </p>
                  </div>
                  <div className="pt-1 md:pt-0">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Beratung anfragen'}
                  </button>
                  </div>
                </div>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}
                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Vielen Dank! Ihre Beratungsanfrage wurde erfolgreich gesendet.
                  </div>
                )}
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}