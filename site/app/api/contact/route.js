import nodemailer from "nodemailer";

export async function POST(req) {
  const EMAIL = process.env.EMAIL_USER;
  const PASS = process.env.EMAIL_PASS;
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 },
      );
    }
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL,
        pass: PASS,
      },
    });
    const mailOptions = {
      from: email,
      to: EMAIL,
      subject: "Contact Form Submission",
      html: `
                <h1>Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: "Email Sent" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
