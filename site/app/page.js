/* Home Page Creation */
"use client";
import "./Homepage.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="homepage-container">
      <p className="homepage-welcome">welcome</p>
      <span className="homepage-description">
        <p className="description-text">
          This is the portfolio of Austin Adams! Click the button below to learn more!
        </p>
      </span>
      <button
        className="homepage-button"
        onClick={() => {router.push('/explore')}}
      >explore</button>
    </div>
  );
}
