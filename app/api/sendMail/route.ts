import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { email, name, message } = await request.json();
    const resend = new Resend(process.env.RESEND_API);

    await resend.emails.send({
      from: "Naofumi <onboarding@resend.dev>",
      to: "Naofumi <onboarding@resend.dev>",
      subject: "OTP for login",
      html: `
      <h1>${name} - ${email} sent a Mail from your PortFolio-Website</h1>
      <h3 style="color: #333;">${message}</h3>
    `,
    });

    return NextResponse.json({ message: "Mail Sent" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
