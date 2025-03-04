"use client";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

export default function Projects() {
  const router = useRouter();
  const projects = [
    {
      name: "QuietMap",
      imageURL: "/images/projects-page/quietmap.jpg",
      wip: true,
      description:
        "Tool for automated reconaissance on a website. Uses NMap, Shodan, Wireshark, and other softwares for data collection.",
      tags: "Cybersecurity, Software Design",
      href: "/projects/QuietMap",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-1 w-full h-full">
      <p className="text-center text-xl mb-2">
        Welcome to the projects page! From here you can check out the stuff I
        have worked on and am currently working on!
      </p>
      <div className="w-full max-w-[90%]">
        <Accordion type="single" collapsible>
          {projects.map((project, index) => (
            <AccordionItem
              className="w-full border p-3"
              key={index}
              value={index + 1}
            >
              <AccordionTrigger>
                <span className="flex flex-col sm:flex-row w-full items-center text-center">
                  <p
                    className={`sm:hidden mb-1 ${project.wip ? "text-red-500" : "text-green-500"}`}
                  >
                    Status: {project.wip ? "WIP" : "COMPLETE"}
                  </p>
                  <Image
                    src={project.imageURL}
                    alt="QuietMap"
                    width={150}
                    height={150}
                    className="self-center object-cover rounded-md w-56 h-56 my-2"
                  />
                  <div className="flex flex-col m-2">
                    <p className="text-lg font-bold">{project.name}</p>
                    <p className="text-sm font-light">{project.description}</p>
                  </div>
                  <p
                    className={`hidden sm:flex ml-auto ${project.wip ? "text-red-500" : "text-green-500"}`}
                  >
                    Status: {project.wip ? "WIP" : "COMPLETE"}
                  </p>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  <p>
                    <strong>Description: </strong>
                    {project.description}
                  </p>
                  <Separator className="my-2" />
                  <p>
                    <strong>Related Fields: </strong>
                    {project.tags}
                  </p>
                  <Button
                    className="mt-5"
                    onClick={() => router.push(project.href)}
                  >
                    Learn More
                  </Button>
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
