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

export default function Projects() {
  const router = useRouter();
  const projects = [
    {
      name: "QuietMap",
      wip: true,
      description:
        "Tool for automated reconaissance on a website. Uses NMap, Shodan, Wireshark, and other softwares for data collection.",
      tags: "Cybersecurity, Software Design",
      href: "/projects/QuietMap",
    },
  ];
  return (
    <div className="flex flex-col items-center m-2 w-full h-full">
      <p className="text-center text-xl mb-2">
        Welcome to the projects page! From here you can check out the stuff I've
        worked on and am currently working on!
      </p>
      <div className="w-full max-w-[70%]">
        <Accordion type="single" collapsible>
          {projects.map((project, index) => (
            <AccordionItem
              className="w-full border p-3"
              key={index}
              value={index + 1}
            >
              <AccordionTrigger>
                <span className="flex flex-row w-full">
                  <p>
                    {index + 1}. {project.name}
                  </p>
                  <p
                    className={` ml-auto ${project.wip ? "text-red-500" : "text-green-500"}`}
                  >
                    {project.wip ? "WIP Project" : "Completed Project"}
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
