"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  message,
  error,
  status,
}: {
  message: string;
  error: Error & { digest?: string };
  status: number;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center px-4">
        <AlertTriangle className="mx-auto h-16 w-16 text-yellow-500 mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Oops! {message}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          {error.message || message} - with {status ? status : 400} status code
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={() => window.location.reload()}
            variant={"outline"}
            size={"lg"}
          >
            <RefreshCcw />
            Try again
          </Button>
        </div>
        {error.digest && (
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
