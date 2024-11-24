/* Home Page Creation */
"use client";
import "./Homepage.css";
import { useRouter } from "next/navigation";
import { PersonStanding, FileCode, Briefcase, Contact } from 'lucide-react';

export default function Home() {
  const router = useRouter();

    const cardList = [
        { 
            name:"About", 
            icon:<PersonStanding className="card-icon" />, 
            href:'/about', 
            description:"Through the about me page, you can gain a glimpse into my personal life!",
        },
        { 
            name:"Projects", 
            icon:<FileCode className="card-icon" />, 
            href:'/projects', 
            description:"Here, you can view some details about projects I've worked on, including their name, description, and code!",
        },
        { 
            name:"Experience", 
            icon:<Briefcase className="card-icon" />, 
            href:'/experience', 
            description:"Learn more about the companies I've worked with, what I did at the company, and tools I used!",
        },
        { 
            name:"Contact Me", 
            icon:<Contact className="card-icon" />, 
            href:'/contact', 
            description:"In the contact page, you can see my socials, and send me an email!",
        },
    ];

    return (
      <div className="homepage-container">
        <div className="homepage-greeting">
          <h1>Welcome</h1>
          <p>This is the portfolio of Austin Adams!<br/> To learn more about me, use the buttons below to navigate through the site!</p>
        </div>
        <div className="homepage-nav">
            {cardList.map((card, index) => (
                <button key={index} className="card" onClick={() => {router.push(card.href)}}>
                    <div>{card.icon}</div>
                    <div className="card-name">{card.name}</div>
                    <div className="card-description">{card.description}</div>
                </button>
            ))}
        </div>
      </div>
    );
}
