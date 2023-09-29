import React from 'react'
import FadeBox from './FadeBox'
import { Icon } from '@iconify/react';
import ExternalLinks from './ExternalLink';
import { techStack } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
interface Project {
  desc: string;
  techStack: string[];
  link: string;
  open?: string; // Make 'open' property optional if some projects don't have it
}

interface TechType {
  next: string;
  tailwind: string;
  react: string;
  node: string;
  express: string;
  javascript: string;
  typescript: string;
  redux: string;
  // easy-peasy,
  // zustand,
  jwt: string;
  mysql: string;
  postgres: string;
  swift: string;
  graphql: string;
  gatsby: string;
  chakra: string;
  sass: string;
}

const projects: Record<string, Project> = {
  "last man standing": {
    desc:
      "A Web 3 based game to guess random word against others and win the prize of crypto.",
    techStack: ["next", "tailwind", "typescript"],
    link: "https://github.com/gazijarin/TDSBHomeworkManagement",
    open: "https://tdsb-app.herokuapp.com/"
  },
  "mertapada profit-spending management": {
    desc:
      "A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee",
    techStack: ["next", "tailwind", "typescript", "node", "jwt", "mysql"],
    link: "https://github.com/zhaardhia/mertapada-investor-frontend",
    // open: "https://gazijarin.github.io/AdamAI/"
  },
  "monda commerce": {
    desc:
      "An E-commerce Web Application for UMKM named Monda Kitchen, integrate with Payment Gateway (Midtrans)",
    techStack: ["next", "tailwind", "node", "jwt", "mysql"],
    link:
      "https://github.com/zhaardhia/monda-frontend"
  },
  "fokus": {
    desc:
      "A Daily Task Tracker with pomodoro timer & gamification, helping people that have tendencies of ADHD.",
    techStack: ["swift"],
    link: "https://github.com/utopeeuh/Fokus",
    open: ""
  },
  "threap app": {
    desc:
      "An online thread apps that could create thread, like/unlike, and comment on every thread.",
    techStack: ["react", "tailwind", "redux"],
    link: "https://github.com/zhaardhia/threap-app",
    open: ""
  },
  "countriez": {
    desc:
      "A mini web-app that gather information of each country in the world.",
    techStack: ["next", "tailwind", "typescript", "graphql"],
    link: "https://github.com/gazijarin/stonehenge",
    open: ""
  },
  "sultan tangsel BPN": {
    desc:
      "A Company Profile Web with Registration Form, E-ticket, queuing, and other Admin Features.",
    techStack: ["react", "tailwind", "node", "jwt", "mysql"],
    link: "https://github.com/gazijarin/OdinBot",
    open: ""
  },
  "covid 19 data": {
    desc:
      "A mini web-app for visualise Covid Statistics data in Indonesia.",
    techStack: ["gatsby", "chakra", "javascript"],
    link: "https://github.com/gazijarin/gamecentre",
    open: ""
  },
};

const SoftwareProjects = () => {
  return (
    <div className="project-container my-10">
      <ul className="projects-grid">
        {Object.keys(projects).map((key, i) => (
          <FadeBox delay={`${i + 1}00ms`}>
            <li className="projects-card cursor-pointer">
              <div className="card-header">
                <div className="folder-icon">
                  <Icon icon="ic:outline-folder" className="text-lg" />
                </div>
                <ExternalLinks
                  githubLink={projects[key]["link"]}
                  openLink={projects[key]["open"]}
                ></ExternalLinks>
              </div>
              
              <div className="card-title">{key}</div>
              <div className="card-desc">{projects[key]["desc"]}</div>
              <div className="flex gap-2">
                {projects[key]["techStack"].map((stack: string) => {
                  console.log({stack})
                  return (
                    <Icon icon={techStack[stack as keyof TechType]} className="text-2xl shadow-2xl" />
                  )
                })}
              </div>
            </li>
          </FadeBox>
        ))}
      </ul>
      <Link href="/software">
        <Button variant="outline" className="mt-10 rounded-xl hover:bg-slate-50">View All Software Projects <Icon icon="grommet-icons:next" className="ml-1" /></Button>
      </Link>
    </div>
  )
}

export default SoftwareProjects