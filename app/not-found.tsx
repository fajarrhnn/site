"use client";
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function NotFound({ message }: { message: string }) {
  const { reload } = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-600 dark:text-gray-400 mb-6">
          {message}
        </h2>
        <p className="text-xl text-gray-500 dark:text-gray-500 mb-8">
          Silahkan buat kutipan untuk pertama kalinya!
        </p>
        <Button onClick={() => reload()} variant={"outline"} size={"lg"}>
          <RefreshCcw />
          Try again
        </Button>
      </div>
    </div>
  );
}
