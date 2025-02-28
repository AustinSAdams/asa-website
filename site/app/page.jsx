/* Home Page Creation */
"use client";
import { useRouter } from "next/navigation";
import { FileCode, Briefcase } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
    const router = useRouter();

    const cardList = [
        {
            name: "Projects",
            icon: <FileCode />,
            href: "/projects",
            description:
                "Here, you can view some details about projects I've worked on, including their name, description, and code!",
        },
        {
            name: "Experience",
            icon: <Briefcase />,
            href: "/experience",
            description:
                "Learn more about the companies I've worked with, what I did at the company, and tools I used!",
        },
    ];

    return (
        <div className="flex flex-col h-full w-full">
            <div className="text-lg text-center">
                <p>
                    Welcome to my portfolio website! From here, you can get to
                    know me, my experience, my projects, and you can get into
                    contact with me!
                </p>
                <h2 className="text-2xl font-bold underline">About Me</h2>
                <span></span>
            </div>
            <div className="grid grid-cols-2 mt-auto justify-items-center">
                {cardList.map((card, index) => (
                    <Card className="flex flex-col w-64" key={index}>
                        <CardHeader>
                            <CardTitle className="flex justify-center items-center gap-3">
                                {card.name}
                                {card.icon}
                            </CardTitle>
                            <CardDescription className="flex justify-center text-center">
                                {card.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center mt-auto">
                            <Button onClick={() => router.push(card.href)}>
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
