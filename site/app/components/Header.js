"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Header(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const menuButtons = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ];  

    const socials = [
        { icon: <FaGithub/>, href: "https://github.com/AustinSAdams" },
        { icon: <FaLinkedin/>, href: "https://www.linkedin.com/in/austin-s-adams/" },
        { icon: <FaInstagram/>, href: "https://www.instagram.com/austin_sa_2002/" },
    ];


    return (
        <div className="header">
            <Link
                href="/"
                style={{
                    textAlign: 'left',
                    marginRight: 'auto',
                    paddingLeft: '20px',
                    fontSize: '36px',
                }}
            >
                <button>Austin Adams</button>
            </Link>
            <div className="social-icons">
                {socials.map((item, index) => (
                    <Link 
                        key={index}
                        href={item.href}
                        target="_blank" 
                        aria-label={item.ariaLabel} 
                        className="social-icon"
                    >
                        {item.icon}
                    </Link>
                ))}
            </div>      
            <nav className={"nav-container"}>
                {menuButtons.map((item,index) => (
                    <Link 
                        key={index} 
                        href={item.href}
                        className="nav-button"
                        onClick={() => setIsMenuOpen(false)} 
                    >
                        <button>{item.label}</button>
                    </Link>
                ))}
            </nav>
            <div className="dropdown-menu">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
                <div className="dropdown-content">
                    {menuButtons.map((item,index) => (
                        <Link 
                            key={index} 
                            href={item.href}
                            className="dropbtn"
                        >
                            <button>{item.label}</button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}