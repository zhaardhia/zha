import React from 'react'
import FadeBox from './FadeBox'
import { Icon } from '@iconify/react';
import ExternalLinks from './ExternalLink';
import { techStack } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import SwiperImages from './SwiperImages';
interface Project {
  id: string;
  desc: string;
  techStack: string[];
  link?: string;
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
    id: "lsm",
    desc:
      "A Web 3 based game to guess random word against others and win the prize of Eth. (still on develop)",
    techStack: ["next", "tailwind", "typescript"],
    // link: "https://github.com/gazijarin/TDSBHomeworkManagement",
    // open: "https://tdsb-app.herokuapp.com/"
  },
  "mertapada profit-spending management": {
    id: "mertapada",
    desc:
      "A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee",
    techStack: ["next", "tailwind", "typescript", "node", "jwt", "mysql"],
    link: "https://github.com/zhaardhia/mertapada-admin-frontend",
    open: "https://pengelola.localdiskzha.com"
  },
  "monda commerce": {
    id: "monda",
    desc:
      "An E-commerce Web Application for UMKM named Monda Kitchen, integrate with Payment Gateway (Midtrans).",
    techStack: ["next", "tailwind", "node", "jwt", "mysql"],
    link:
      "https://github.com/zhaardhia/monda-frontend",
    open: "https://mondakitchen.com"
  },
  "fokus": {
    id: "fokus",
    desc:
      "A Daily Task Tracker with pomodoro timer & gamification, helping people that have tendencies of ADHD.",
    techStack: ["swift"],
    link: "https://github.com/utopeeuh/Fokus",
    open: "https://apps.apple.com/id/app/fokus/id1663702869"
  },
  "threap app": {
    id: "threap",
    desc:
      "An online thread apps that could create thread, like/unlike, and comment on every thread.",
    techStack: ["react", "tailwind", "redux"],
    link: "https://github.com/zhaardhia/threap-app",
    open: ""
  },
  "sultan tangsel BPN": {
    id: "sultantangsel",
    desc:
      "A Company Profile Web with Registration Form, E-ticket, queuing, and other Admin Features.",
    techStack: ["react", "tailwind", "node", "jwt", "mysql"],
    // link: "https://github.com/gazijarin/OdinBot",
    open: "https://sultantangsel.id/"
  },
};

const SoftwareProjects = () => {
  return (
    <div className="project-container my-10">
      <SwiperImages />
      <ul className="projects-grid">
        {Object.keys(projects).map((key, i) => (
          <FadeBox delay={`${i + 1}00ms`}>
            <div className="projects-card cursor-pointer">
              <div className="card-header">
                <div className="folder-icon">
                  <Link href={`/software/${projects[key]["id"]}`} className="">
                    <Icon icon="ic:outline-folder" className="text-2xl" />
                  </Link>
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
                    <Icon icon={techStack[stack as keyof TechType]} className="text-2xl shadow-2xl text-white" />
                  )
                })}
              </div>
            </div>
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