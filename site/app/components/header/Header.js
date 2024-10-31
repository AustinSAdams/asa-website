"use client";

import { useRouter } from 'next/navigation';
import "./Header.css";
import { Instagram, Linkedin, Github } from 'lucide-react';

export default function Header(){
    const router = useRouter();

    const socials = [
        { icon: <Github/>, href: "https://github.com/AustinSAdams" },
        { icon: <Linkedin/>, href: "https://www.linkedin.com/in/austin-s-adams/" },
        { icon: <Instagram/>, href: "https://www.instagram.com/austin_sa_2002/" },
    ];

    return (
        <div className="header">
            <button
                className='header-name'
                onClick={()=>{router.push('/')}}
            >Austin Adams</button>
            <div className="social-container">
                {socials.map((item, index) => (
                    <button
                        className='social-icon'
                        onClick={()=>{router.push(item.href)}}
                    >{item.icon}</button>
                ))}
            </div>      
        </div>
    );
}