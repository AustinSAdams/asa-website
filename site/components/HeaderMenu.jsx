"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import CMToast from "./ComingSoonToast";
import { Instagram, Menu, Github, Linkedin } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Separator } from "./ui/separator";

export default function Navbar() {
    const router = useRouter();
    const { setTheme } = useTheme();

    const socials = [
        {
            label: "GitHub",
            icon: <Github />,
            link: "https://github.com/AustinSAdams",
        },
        {
            label: "LinkedIn",
            icon: <Linkedin />,
            link: "https://www.linkedin.com/in/austin-s-adams",
        },
        {
            label: "Instagram",
            icon: <Instagram />,
            link: "https://www.instagram.com/austin_sa_2002/",
        },
    ];

    return (
        <>
            <div className="flex flex-row flex-nowrap p-2 border-b-[1px] justify-between">
                <div className="flex flex-row gap-1 flex-nowrap items-center">
                    <Button
                        onClick={() => router.push("/")}
                        variant="ghost"
                        className="text-3xl font-bold hover:underline"
                    >
                        Austin Adams
                    </Button>
                    <div className="hidden sm:flex gap-1">
                        {socials.map((social, index) => (
                            <Button
                                className="w-10 h-10 rounded-full flex items-center justify-center p-2"
                                onClick={() => router.push(social.link)}
                                key={index}
                            >
                                {social.icon}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row gap-1 flex-nowrap items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="sm:hidden">
                                    Socials
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        {socials.map((social, index) => (
                                            <DropdownMenuItem
                                                key={index}
                                                onClick={() =>
                                                    router.push(social.link)
                                                }
                                                className="flex items-center gap-2"
                                            >
                                                {social.icon} {social.label}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuSeparator className="sm:hidden" />
                            <DropdownMenuItem onClick={() => router.push("/")}>
                                Home
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => router.push("/experience")}
                            >
                                Experience
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => CMToast()}>
                                Projects
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => CMToast()}>
                                Contact
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    Appearance
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem
                                            onClick={() => setTheme("light")}
                                        >
                                            Light
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => setTheme("dark")}
                                        >
                                            Dark
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </>
    );
}
