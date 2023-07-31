import { Input, Label, Textarea } from "@/components/ui";
import { FC, HTMLInputTypeAttribute } from "react";

type FormConfig = {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute | "textarea";
  label: string;
}[];

const formConfig: FormConfig = [
  {
    name: "name",
    placeholder: "Name",
    type: "text",
    label: "Name",
  },
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    label: "Email",
  },
  {
    name: "message",
    placeholder: "Message",
    type: "textarea",
    label: "Message",
  },
];

const ContactPage: FC = () => (
  <main>
    <h1 className="title">Contact</h1>
    <div>
      {formConfig.map(({ label, name, ...config }, key) => (
        <div className="grid w-full max-w-sm items-center gap-1.5" key={key}>
          <Label htmlFor={name}>{label}</Label>
          {config.type === "textarea" ? (
            <Textarea {...config} name={name} />
          ) : (
            <Input {...config} name={name} />
          )}
        </div>
      ))}
    </div>
  </main>
);

export default ContactPage;
