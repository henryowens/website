import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

interface EmailRequestBody {
  email: string;
  name: string;
  message: string;
}

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const { email, name, message } = req.body as EmailRequestBody;

    const text = `Message from ${name}. (${email}) <br/> With the following message: <br/> ${message}`;
    const result = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "Message from www.henryowens.net",
      text,
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
};
