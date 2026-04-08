import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { nombre, email, asunto, mensaje } = await req.json()

    // Validación básica
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json({ message: 'Todos los campos son obligatorios.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT) || 587,
      secure: false, // STARTTLS en 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email que llega a Jorge
    await transporter.sendMail({
      from:    `"JMS Valoraciones Web" <${process.env.SMTP_USER}>`,
      to:      process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `[JMS Web] ${asunto}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px">
          <h2 style="color:#166534;margin-bottom:4px">Nuevo mensaje desde jms Valoraciones</h2>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
          <table style="width:100%;font-size:14px;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#6b7280;width:80px">Nombre</td><td style="padding:6px 0;font-weight:600">${nombre}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Asunto</td><td style="padding:6px 0">${asunto}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
          <p style="font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap">${mensaje}</p>
        </div>
      `,
    })

    // Auto-respuesta al cliente
    await transporter.sendMail({
      from:    `"Jorge Martínez Soler | JMS Valoraciones" <${process.env.SMTP_USER}>`,
      to:      email,
      subject: `Hemos recibido su consulta – JMS Valoraciones`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px">
          <h2 style="color:#166534">Gracias por contactar con JMS Valoraciones</h2>
          <p style="color:#374151;font-size:15px;line-height:1.7">Estimado/a <strong>${nombre}</strong>,</p>
          <p style="color:#374151;font-size:15px;line-height:1.7">
            Hemos recibido su mensaje y nos pondremos en contacto con usted a la mayor brevedad posible.
          </p>
          <p style="color:#374151;font-size:15px;line-height:1.7">
            Si necesita atención urgente, no dude en llamarnos al <a href="tel:+34653350031" style="color:#166534;font-weight:600">653 35 00 31</a>.
          </p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
          <p style="color:#6b7280;font-size:13px">
            Jorge Martínez Soler · Ingeniero Agrícola<br/>
            JMS Valoraciones · Murcia y Almería<br/>
            <a href="https://www.geotasalia.es" style="color:#166534">www.geotasalia.es</a>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('SMTP error:', err)
    return NextResponse.json({ message: 'Error interno al enviar el email.' }, { status: 500 })
  }
}
