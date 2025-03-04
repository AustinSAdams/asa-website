"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Custom404() {
  const router = useRouter();

  const [countdown, setCountdown] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    if (countdown === 0) {
      router.push("./");
    }
    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <div className="flex flex-col h-full items-center ">
      <h1 className="text-7xl text-red-600">404</h1>
      <h3 className="text-4xl text-red-600">Page Not Found</h3>
      <p className="mt-5">
        You will be redirected to the home page in {countdown} seconds...
      </p>
      <Button
        className="mt-5"
        variant="destructive"
        onClick={() => {
          router.push("./");
        }}
      >
        Go To Homepage
      </Button>
    </div>
  );
}
