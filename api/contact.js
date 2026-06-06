import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, bikeType, serviceRequired, message } = req.body;

    await resend.emails.send({
      from: 'Canny Cycle Services <Lechatellier.cal@gmail.com',
      to: 'callum.lechat@gmail.com',
      subject: `New bike service enquiry from ${name}`,
      html: `
        <h2>New Canny Cycle Services enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Bike type:</strong> ${bikeType}</p>
        <p><strong>Service required:</strong> ${serviceRequired}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    await resend.emails.send({
      from: 'Canny Cycle Services <Lechatellier.cal@gmail.com>',
      to: email,
      subject: 'We’ve received your bike service enquiry',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting Canny Cycle Services.</p>
        <p>I’ve received your enquiry and will get back to you shortly to confirm the next step.</p>
        <p>Cheers,<br/>Callum<br/>Canny Cycle Services</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Email failed to send' });
  }
}