"use client";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { FC, useState } from "react";

import "@/styles/pages/ContactPage.scss";
import AutoForm, {
  AutoFormSubmit,
  createFormConfig,
} from "@/components/ui/auto-form";
import { z } from "zod";
import Link from "next/link";

const ContactPage: FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const formConfig = createFormConfig({
    formSchema: z.object({
      name: z.string({ required_error: "Please enter your name" }),
      email: z
        .string({ required_error: "Please enter your email" })
        .email("Please enter a valid email"),
      message: z.string({
        required_error: "Please enter a message",
      }),
    }),
    fieldConfig: {
      name: {
        inputProps: { type: "text", disabled: submitting },
      },
      email: {
        inputProps: { type: "email", disabled: submitting },
      },
      message: {
        fieldType: "textarea",
        inputProps: { disabled: submitting },
      },
    },
  });

  return (
    <PageWrapper className="contact-page">
      <div className="content-container">
        <div className="w-full">
          <Link href="/" className="hover:cursor hover:underline text-sm">
            Back
          </Link>
          <h1 className="title">Contact</h1>
          <hr className="w-full" />
        </div>
        <div className="w-full" style={{ minHeight: "350px" }}>
          {success ? (
            <p>Message sent successfully</p>
          ) : (
            <div className="w-full flex flex-col gap-4">
              <AutoForm
                onSubmit={async (data) => {
                  try {
                    setSubmitting(true);
                    const response = await fetch("/api/sendEmail", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });

                    if (response.ok) {
                      setSuccess(true);
                    } else {
                      setSuccess(false);
                    }
                  } catch (error) {
                    console.error("Error sending email:", error);
                    alert("An error occurred while sending the email");
                    setSuccess(false);
                  } finally {
                    setSubmitting(false);
                  }
                }}
                {...formConfig}
              >
                <AutoFormSubmit>Send</AutoFormSubmit>
              </AutoForm>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
