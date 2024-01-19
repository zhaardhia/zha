import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import FadeBox from '../FadeBox'
import Link from 'next/link'

const Experience = () => {
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger className="no-underline">
          <div className="flex flex-col gap-2 text-start">
            {/* <p className="text-lg no-underline">Software Engineer at <span className="text-[#0C54EC] hover:border-b-[2px] hover:border-[#EB1C7C]">May<span className="text-[#EB1C7C]">ar</span></span></p> */}
            <p className="text-lg no-underline">Software Engineer at {" "}
              <span className="text-[#0C54EC]"
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundImage: "linear-gradient(90deg, #0C54EC, #EB1C7C)"
                }}
              >Mayar</span>
            </p>
            <p className="text-sm text-slate-300">Mar 2023 - Present</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <a href='https://mayar.id' target='_blank' className="underline"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #0C54EC, #EB1C7C)",
              textDecoration: "underline"
            }}
          >mayar.id</a>
          <ol className="flex flex-col gap-3 text-lg job-description text-slate-600">
            <FadeBox delay={`${0 + 1}00ms`}>
              <li>Developed and maintain a scalable, high-performing, and user-friendly web application for digital payment solution & commerce for growing business using React + Redux, GraphQL, Node, and Redis</li>
            </FadeBox>
            <FadeBox delay={`${1 + 1}00ms`}>
              <li>Engage in daily communication and cooperation with cross-functional teams comprising engineers and business development professionals</li>
            </FadeBox>
            <FadeBox delay={`${2 + 1}00ms`}>
              <li>Implemented a microservices architecture that improved system modularity and reduced dependencies between components</li>
            </FadeBox>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex flex-col gap-2 text-start">
            <p className="text-lg">Frontend Engineer Intern at {" "}
            {/* <span className="text-[#0d6efd]">Campaign.com</span> */}
              <span className="text-[#0C54EC]"
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundImage: "linear-gradient(90deg, #0d6efd, #00d1ff)"
                }}
              >Campaign.com</span>
            </p>
            <p className="text-sm text-slate-300">Jan 2023 - Jul 2023</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <a href='https://campaign.com' target='_blank' className="underline text-slate-600"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #0d6efd, #00d1ff)"
            }}
          >campaign.com</a>
          <ol className="flex flex-col gap-3 text-lg job-description text-slate-600">
            <FadeBox delay={`${0 + 1}00ms`}>
              <li>Successfully created & improved feature for admin-side</li>
            </FadeBox>
            <FadeBox delay={`${1 + 1}00ms`}>
              <li>Successfully migrated admin menu from PHP to Next.js</li>
            </FadeBox>
            <FadeBox delay={`${2 + 1}00ms`}>
              <li>Successfully migrated use case to React Ecosystem</li>
            </FadeBox>
            <FadeBox delay={`${3 + 1}00ms`}>
              <li>Collaborated with internal Front-end team, Back-end & Designer team, and Product team</li>
            </FadeBox>
            <FadeBox delay={`${4 + 1}00ms`}>
              <li>Compose reusable front page components</li>
            </FadeBox>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="flex flex-col gap-2 text-start">
            <p className="text-lg">Software Engineer Intern at {" "}
              {/* <span className="text-[#f14651]">IKI Karunia Indonesia (Anabatic Digital Raya's Subsidiaries)</span> */}
              <span className="text-[#0C54EC]"
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundImage: "linear-gradient(90deg, #f14651, #000000)"
                }}
              >IKI Karunia Indonesia (Anabatic Digital Raya's Subsidiaries)</span>
            </p>
            <p className="text-sm text-slate-300">Feb 2022 - Feb 2023</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <a href='https://ikimodal.com' target='_blank' className="underline text-slate-600"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #f14651, #000000)"
            }}
          >ikimodal.com</a>
          <ol className="flex flex-col gap-3 text-lg job-description text-slate-600">
            <FadeBox delay={`${0 + 1}00ms`}>
              <li>Collaborate closely in the squad to deliver feature</li>
            </FadeBox>
            <FadeBox delay={`${1 + 1}00ms`}>
              <li>Develop back-end services for P2P Lending Platform using Express JS</li>
            </FadeBox>
            <FadeBox delay={`${2 + 1}00ms`}>
              <li>Successfully migrated Java code base for back-end services to JavaScript (Express JS)</li>
            </FadeBox>
            <FadeBox delay={`${3 + 1}00ms`}>
              <li>Successfully renew the front page with the fresh UI/UX and better performance using React & Tailwind CSS on <a target='_blank' href="https://v2.ikimodal.app">IKI Modal Web Platform</a></li>
            </FadeBox>
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Experience
