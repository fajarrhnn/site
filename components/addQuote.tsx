"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function AddQuote() {
  console.log("API URL:", process.env.NEXT_PUBLIC_URL);
  const { toast } = useToast();
  const [data, setData] = useState({
    quote: "",
    author: "",
    ig_user: "",
  });

  const changeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setData((data) => ({
      ...data,
      [id]: value,
    }));
  };

  // const submit: FormEventHandler<HTMLFormElement> = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/quote`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(() => {
  //       alert(res);
  //     })
  //     .catch(() => {
  //       alert(res);
  //     });

  //   console.log(res);
  // };

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(res);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const responseData = await res.json();
      console.log(responseData);
      alert("Quote added successfully!");
    } catch (error: any) {
      console.error(error);
      alert("Error adding quote: " + error?.message);
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="right-5 bottom-5 fixed z-50">
          <Button size={"icon"}>
            <PlusIcon />
          </Button>
        </DialogTrigger>
        <form onSubmit={submit}>
          <DialogContent className="max-w-sm text-black">
            <DialogHeader>
              <DialogTitle>Tambah Kutipan</DialogTitle>
              <DialogDescription>
                Silahkan lengkapi form di bawah ini untuk membuat kutipan baru.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="flex flex-col justify-start items-start gap-4">
                <Label htmlFor="author" className="text-right">
                  Nama
                </Label>
                <Input
                  id="author"
                  value={data.author}
                  onChange={changeValue}
                  required
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4">
                <Label htmlFor="quote" className="text-right">
                  Pesan
                </Label>
                <Input
                  id="quote"
                  value={data.quote}
                  onChange={changeValue}
                  required
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4">
                <Label htmlFor="ig_user" className="text-right">
                  Username Instagram (Opsional)
                </Label>
                <Input
                  id="ig_user"
                  value={data.ig_user}
                  onChange={changeValue}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter className="flex items-center">
              <DialogDescription>
                <strong>Catatan:</strong> Kutipan tidak dapat dihapus kecuali
                oleh Pengembang, gunakanlah dengan bijak!
              </DialogDescription>
              <DialogClose asChild>
                <Button type="submit">Tambahkan</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
