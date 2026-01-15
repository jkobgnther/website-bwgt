import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// TypeScript interfaces for form data
interface BaseFormData {
  email: string
  nachname: string
  nachricht: string
  vorname?: string
  anrede?: string
  telefon?: string
}

interface BeratungFormData extends BaseFormData {
  geschlecht?: string
  wohnort?: string
  alter?: string
  art?: string
}

interface ContactFormRequest {
  formType: 'beratung' | 'contact'
  [key: string]: any
}

// Simple HTML escaping to prevent injection
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'E-Mail-Service ist nicht konfiguriert. Bitte kontaktieren Sie den Administrator.' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Parse request body
    let body: ContactFormRequest
    try {
      body = await request.json()
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Ungültige Anfrage. Bitte versuchen Sie es erneut.' },
        { status: 400 }
      )
    }

    const { formType, ...formData } = body

    // Validate required fields
    if (!formData.email || !formData.nachname || !formData.nachricht) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      )
    }

    // Determine email subject and recipient
    const subject = formType === 'beratung'
      ? `Beratungsanfrage von ${formData.vorname || ''} ${formData.nachname}`.trim()
      : `Kontaktanfrage von ${formData.vorname || ''} ${formData.nachname}`.trim()

    const recipientEmail = process.env.CONTACT_EMAIL || 'guenther@bwgt.org'

    // Format email content
    const emailContent = formatEmailContent(formType, formData as BeratungFormData)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Kontaktformular <onboarding@resend.dev>', // You'll need to verify your domain with Resend
      to: recipientEmail,
      replyTo: formData.email,
      subject: subject,
      html: emailContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Ihre Nachricht wurde erfolgreich gesendet!', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

function formatEmailContent(formType: string, data: BeratungFormData): string {
  const isBeratung = formType === 'beratung'

  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #7FBF97; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 8px; background-color: white; border-radius: 4px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>${isBeratung ? 'Neue Beratungsanfrage' : 'Neue Kontaktanfrage'}</h2>
        </div>
        <div class="content">
  `

  // Add form fields with HTML escaping
  if (data.anrede) {
    html += `<div class="field"><div class="label">Anrede:</div><div class="value">${escapeHtml(data.anrede)}</div></div>`
  }
  if (data.vorname) {
    html += `<div class="field"><div class="label">Vorname:</div><div class="value">${escapeHtml(data.vorname)}</div></div>`
  }
  html += `<div class="field"><div class="label">Nachname:</div><div class="value">${escapeHtml(data.nachname)}</div></div>`

  if (data.telefon) {
    html += `<div class="field"><div class="label">Telefon:</div><div class="value">${escapeHtml(data.telefon)}</div></div>`
  }
  html += `<div class="field"><div class="label">E-Mail:</div><div class="value">${escapeHtml(data.email)}</div></div>`

  // Beratung-specific fields
  if (isBeratung) {
    if (data.geschlecht) {
      html += `<div class="field"><div class="label">Geschlecht:</div><div class="value">${escapeHtml(data.geschlecht)}</div></div>`
    }
    if (data.wohnort) {
      html += `<div class="field"><div class="label">Wohnort:</div><div class="value">${escapeHtml(data.wohnort)}</div></div>`
    }
    if (data.alter) {
      html += `<div class="field"><div class="label">Alter:</div><div class="value">${escapeHtml(data.alter)}</div></div>`
    }
    if (data.art) {
      html += `<div class="field"><div class="label">Gewünschte Sport-/Bewegungsart:</div><div class="value">${escapeHtml(data.art)}</div></div>`
    }
  }

  html += `<div class="field"><div class="label">Nachricht:</div><div class="value">${escapeHtml(data.nachricht).replace(/\n/g, '<br>')}</div></div>`

  html += `
          <div class="footer">
            <p>Diese E-Mail wurde über das Kontaktformular auf der Website gesendet.</p>
            <p>Sie können direkt auf diese E-Mail antworten, um dem Absender zu antworten.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  return html
}
