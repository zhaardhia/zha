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
      "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
    techStack: ["next", "tailwind", "typescript"],
    link: "https://github.com/gazijarin/TDSBHomeworkManagement",
    open: "https://tdsb-app.herokuapp.com/"
  },
  "mertapada profit-spending management": {
    desc:
      "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
    techStack: ["next", "tailwind", "typescript", "node", "jwt", "mysql"],
    link: "https://github.com/gazijarin/adamai",
    open: "https://gazijarin.github.io/AdamAI/"
  },
  "monda commerce": {
    desc:
      "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
    techStack: ["next", "tailwind", "node", "jwt", "mysql"],
    link:
      "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System"
  },
  "fokus": {
    desc:
      "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
    techStack: ["swift"],
    link: "https://github.com/gazijarin/OdinBot",
    open: ""
  },
  "threap app": {
    desc:
      "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
    techStack: ["react", "tailwind", "redux"],
    link: "https://github.com/gazijarin/gamecentre",
    open: ""
  },
  "countriez": {
    desc:
      "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
    techStack: ["next", "tailwind", "typescript", "graphql"],
    link: "https://github.com/gazijarin/stonehenge",
    open: ""
  },
  "sultan tangsel BPN": {
    desc:
      "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
    techStack: ["react", "tailwind", "node", "jwt", "mysql"],
    link: "https://github.com/gazijarin/OdinBot",
    open: ""
  },
  "covid 19 data": {
    desc:
      "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
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