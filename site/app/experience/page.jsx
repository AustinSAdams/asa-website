"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Experience() {
    const experienceList = [
        {
            employer: "QMS2GO",
            position: "Software Engineer",
            href: "https://qms2go.com/",
            description:
                "As a Software Engineer at QMS2GO, I was responsible for maintaining and updating the company’s website using WordPress, ensuring it remained functional and user-friendly. I utilized Next.js, a React framework, to develop and implement features for their AI model powered by OpenAI, leveraging programming languages such as JavaScript, TypeScript, and Python. My work included designing and integrating APIs to enhance the AI model's functionality and improve user experience. Additionally, I worked with the company’s Firebase database, tinkering with its structure to support feature development and data management. Tools like Postman were integral to my workflow, allowing me to test API endpoints and ensure seamless integration and reliable performance.",
            traits: [
                "React",
                "WordPress",
                "JavaScript",
                "CSS",
                "HTML",
                "TypeScript",
                "Python",
                "NextJS",
                "NodeJS",
                "Firebase",
                "API integrations",
                "Postman",
            ],
        },
        {
            employer: "Office Depot",
            position: "Key Holder",
            href: "https://www.officedepot.com/",
            description:
                "As a Key Holder at Office Depot, I was responsible for achieving daily sales quotas, managing the team to ensure efficient workflows, and addressing customer complaints or issues in a managerial capacity. I also headed the store's IT services, which involved performing PC speed-ups, data transfers, new computer setups, and other related technical support tasks. Additionally, I actively contributed on the sales floor, assisting customers with purchases, and spent significant time in the print department, providing specialized services. My role required strong leadership, technical expertise, and excellent customer service skills to maintain a productive and customer-focused environment.",
            traits: [
                "Leadership",
                "IT Services",
                "Sales Management",
                "Customer Service",
                "Team Management",
                "Technical Support",
                "PC Optimization",
                "Data Transfer",
                "Print services",
            ],
        },
    ];
    const handleEmployerClick = (url) => {
        window.open(url, "_blank");
    };
    return (
        <div className="flex flex-col">
            {experienceList.map((job, index) => (
                <Card
                    className="flex flex-col m-2 border rounded-lg"
                    key={index}
                >
                    <CardHeader className="flex flex-row">
                        <CardTitle className="flex items-center">
                            <Button
                                variant="ghost"
                                className="font-bold text-2xl hover:underline"
                                onClick={() => handleEmployerClick(job.href)}
                            >
                                {job.employer}
                            </Button>
                            <p className="text-lg">{job.position}</p>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">{job.description}</p>
                        <Separator className="border my-1" />
                        {job.traits.length > 0 && (
                            <div className="flex flex-row mt-1 gap-4 max-w-full overflow-x-auto whitespace-nowrap py-1">
                                {job.traits.map((trait, traitIndex) => (
                                    <p
                                        className="inline-block border-2 px-3 py-1 rounded-full"
                                        key={traitIndex}
                                    >
                                        {trait}
                                    </p>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
