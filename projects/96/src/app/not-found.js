"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    if (seconds === 0) {
      router.push("/");
    }

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
      <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
      <p>
        Redirecting to <a href="/">Home</a> in {seconds} seconds...
      </p>
    </div>
  );
};
