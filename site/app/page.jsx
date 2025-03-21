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
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full items-center">
            <div className="text-lg text-center mt-3">
                <p>
                    Welcome to my portfolio website! From here, you can get to
                    know me, my experience, my projects, view my resume, and get
                    into contact with me!
                </p>
                <Card className="m-4 justify-items-center w-fit">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold underline">
                            About Me
                        </CardTitle>
                        <CardDescription>
                            <p>
                                Hi, I am Austin! I focus on cybersecurity,
                                digital forensics, and web development.
                                Currently, I am pursuing a Bachelors of Science
                                in Computer Science at Louisiana Tech
                                University, where I am building my skills in
                                these areas.
                                <br /> I enjoy solving complex problems and
                                working on cool projects. Outside of work, I
                                dabble with new technologies, work on personal
                                projects, and listen to the Cyberwire podcast!
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center">
                        <Image
                            src="/images/home-image.JPG"
                            width={500}
                            height={500}
                            alt="Picture of Austin Adams"
                            className="self-center object-cover rounded-full w-56 h-56 border-[1px] my-2"
                        />
                        <Separator className="my-3" />
                        <div className="grid grid-cols-1 sm:grid-cols-2  gap-2 justify-items-center">
                            <div className="flex flex-col items-center text-center">
                                <p className="mb-1">
                                    Here, you can view some details about
                                    projects I have worked on, including their
                                    name, description, and code!
                                </p>
                                <Card className="flex flex-col w-64 mt-auto">
                                    <CardHeader>
                                        <CardTitle className="flex justify-center items-center gap-3">
                                            Projects <FileCode />
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex justify-center mt-auto">
                                        <Button
                                            onClick={() =>
                                                router.push("/projects")
                                            }
                                        >
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <p className="mb-1">
                                    Learn more about the companies I have worked
                                    with, what I did at the company, and tools I
                                    used!
                                </p>
                                <Card className="flex flex-col w-64 mt-auto">
                                    <CardHeader>
                                        <CardTitle className="flex justify-center items-center gap-3">
                                            Experience <Briefcase />
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex justify-center mt-auto">
                                        <Button
                                            onClick={() =>
                                                router.push("/experience")
                                            }
                                        >
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6 px-4 text-white">
                            {[
                                {
                                    title: "Programming Languages",
                                    items: [
                                        "Python",
                                        "Java",
                                        "JavaScript",
                                        "TypeScript",
                                        "SQL",
                                        "Assembly",
                                        "Bash",
                                        "C++",
                                        "C#",
                                        "Prolog",
                                        "Go",
                                        "ML",
                                    ],
                                },
                                {
                                    title: "Tools & Frameworks",
                                    items: [
                                        "Tailwind CSS",
                                        "Firebase",
                                        "AWS",
                                        "React",
                                        "Markdown",
                                        "CSS",
                                        "HTML",
                                        "Docker",
                                        "Next.js",
                                        "Node.js",
                                        "Express.js",
                                        "Canva",
                                        "GitHub",
                                        "Git",
                                    ],
                                },
                                {
                                    title: "Technical & Developing Skillsets",
                                    items: [
                                        "SaaS application development",
                                        "Cybersecurity projects",
                                        "API Development & Integration",
                                        "Networking projects",
                                        "Database Design & Management (MySQL, MariaDB)",
                                        "Technical/Professional documentation",
                                        "Penetration testing",
                                        "Collaboration with Git and GitHub",
                                    ],
                                },
                                {
                                    title: "Specialized Knowledge",
                                    items: [
                                        "Software Engineering",
                                        "Programming & Development",
                                        "Cloud Computing",
                                        "DevOps",
                                        "Project Management",
                                        "Web Development",
                                    ],
                                },
                            ].map((section, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-600 p-5 rounded-xl shadow-md"
                                >
                                    <h2 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-3">
                                        {section.title}
                                    </h2>
                                    <ul className="space-y-2">
                                        {section.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-gray-300"
                                            >
                                                - {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
