"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./404-styles.css";
import { userAgent } from "next/server";

export default function Page() {
    const router = useRouter();

    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      if (countdown === 0){
        router.push("./");
      }
    return () => clearInterval(timer);
    }, [countdown, router])

    return (
      <div className="container-404">
        <h1 className="errorCode">404</h1>
        <p className="errorMessage">Oops! The page you are looking for does not exist.</p>
        <p>You will be redirected to the home page in {countdown} seconds...</p>
        <button 
          className="homeButton-404"
          onClick={() => {router.push("./")}}
        >Go To Homepage</button>
      </div>
    );
  }
  