import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Experience = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex flex-col gap-2 text-start">
            <p className="text-lg">Software Engineer at <span className="text-[#2cb67d]">Mayar</span></p>
            <p className="text-sm text-slate-300">Mar 2023 - Present</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ol className="flex flex-col gap-3 text-lg job-description text-slate-600">
            <li>Developed and maintain a scalable, high-performing, and user-friendly web application for digital payment solution & commerce for growing business using React + Redux, GraphQL, Node, and Redis</li>
            <li>Engage in daily communication and cooperation with cross-functional teams comprising engineers and business development professionals</li>
            <li>Implemented a microservices architecture that improved system modularity and reduced dependencies between components</li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex flex-col gap-2 text-start">
            <p className="text-lg">Frontend Engineer Intern at <span className="text-[#2cb67d]">Campaign.com</span></p>
            <p className="text-sm text-slate-300">Jan 2023 - Jul 2023</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ol className="flex flex-col gap-3 text-lg job-description text-slate-600">
            <li>Successfully created & improved feature for admin-side</li>
            <li>Successfully migrated admin menu from PHP to Next.js</li>
            <li>Successfully migrated use case to React Ecosystem</li>
            <li>Collaborated with internal Front-end team, Back-end & Designer team, and Product team</li>
            <li>Compose reusable front page components</li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="flex flex-col gap-2 text-start">
            <p className="text-lg">Software Engineer Intern at <span className="text-[#2cb67d]">IKI Karunia Indonesia (Anabatic Digital Raya's Subsidiaries)</span></p>
            <p className="text-sm text-slate-300">Mar 2023 - Present</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ol className="flex flex-col gap-3 text-lg job-description text-slate-600">
            <li>Collaborate closely in the squad to deliver featur</li>
            <li>Develop back-end services for P2P Lending Platform using Express JS</li>
            <li>Successfully migrated Java code base for back-end services to JavaScript (Express JS)</li>
            <li>Successfully renew the front page with the fresh UI/UX and better performance using React & Tailwind CSS on IKI Modal Web Platform</li>
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Experience