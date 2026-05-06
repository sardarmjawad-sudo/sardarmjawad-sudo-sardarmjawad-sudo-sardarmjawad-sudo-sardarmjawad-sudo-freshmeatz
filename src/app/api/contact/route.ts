import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, type, product, message } = body;

    if (!name || !phone || !email || !type || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      console.error('Missing email environment variables');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: 'New FreshMeatz Website Inquiry',
      text: `
You have received a new inquiry from the FreshMeatz website.

Full Name: ${name}
Phone Number: ${phone}
Email Address: ${email}
Inquiry Type: ${type}
Product Interested In: ${product || 'N/A'}

Message:
${message}
      `,
      html: `
        <h2>New FreshMeatz Website Inquiry</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${type}</p>
        <p><strong>Product Interested In:</strong> ${product || 'N/A'}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Inquiry sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: error.message || 'Failed to send inquiry' },
      { status: 500 }
    );
  }
}
