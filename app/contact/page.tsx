"use client";
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

  const submitContact: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    toast({
      title: "Berhasil Mengirimkan Pesan",
    });
  };

  return (
    <>
      <section className="grid gap-4 w-full max-w-3xl mx-auto">
        <h1 className="text-center text-5xl">Contact Me</h1>
        <form className="grid gap-4" onSubmit={submitContact}>
          <div className="w-full max-w-full mx-auto flex items-center space-x-2">
            <div className="w-1/2 mx-auto flex flex-col space-y-3">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="w-1/2 mx-auto flex flex-col space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={(e) => {
                  setData((prev) => ({ ...prev, email: e.target.value }));
                }}
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
              onChange={(e) => {
                setData((prev) => ({ ...prev, subject: e.target.value }));
              }}
            />
          </div>
          <div className="flex flex-col space-y-3">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={data.message}
              onChange={(e) => {
                setData((prev) => ({ ...prev, message: e.target.value }));
              }}
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
