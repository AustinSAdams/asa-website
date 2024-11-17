"use client";

import { useRouter } from 'next/navigation';
import "./Footer.css";
import { House, PersonStanding, FileCode, Contact } from 'lucide-react';

export default function Footer(){
    const router = useRouter();

    const navButtons = [
        { label: 'Home', href: './explore', icon: <House className="nav-icon"/> },
        { label: 'About Me', href: './about', icon: <PersonStanding className="nav-icon"/> },
        { label: 'Projects', href: './projects', icon: <FileCode className="nav-icon"/> },
        { label: 'Contact Me', href: './contact', icon: <Contact className="nav-icon"/> },
    ];

    return (
        <div className="footer">
            <span className='nav-container'>
                {navButtons.map((item) => (
                    <button
                        key={item.label}
                        className='nav-button'
                        onClick={()=>{router.push(item.href)}}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}
            </span>
        </div>
    );
}