"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function Contact() {
  const { toast } = useToast();

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submitContact: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    toast({
      title: "Berhasil Mengirimkan Pesan",
      description: `${data.name} - ${data.email} - ${data.subject} - ${data.message}`,
    });
  };

  const changeValue: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="w-full mx-auto flex flex-col space-y-5 h-screen items-center justify-center">
        <h1 className="text-center text-5xl">Contact Me</h1>
        <form
          className="grid gap-4 w-full max-w-xl"
          method="POST"
          onSubmit={submitContact}
          // action="mailto:fajarrehan023@gmail.com"
        >
          <div className="w-full max-w-full mx-auto flex items-center space-x-2">
            <div className="w-1/2 mx-auto flex flex-col space-y-3">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={changeValue}
              />
            </div>
            <div className="w-1/2 mx-auto flex flex-col space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={changeValue}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={data.subject}
              onChange={changeValue}
            />
          </div>
          <div className="flex flex-col space-y-3">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={data.message}
              onChange={changeValue}
            />
          </div>
          <Button size={"lg"} type="submit">
            Submit
          </Button>
        </form>
      </section>
    </>
  );
}
