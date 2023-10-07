import React from 'react'
import FadeBox from '../FadeBox';
import { Icon } from '@iconify/react';
import ExternalLinks from '../ExternalLink';
import { techStack } from '@/lib/utils';

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

const projectsApp: Record<string, Project> = {
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
    link: "https://github.com/zhaardhia/countriez",
    open: ""
  },
  "covid 19 data": {
    desc:
      "A mini web-app for visualise Covid Statistics data in Indonesia.",
    techStack: ["gatsby", "chakra", "javascript"],
    link: "https://github.com/zhaardhia/Covid19-Data-v2",
    open: ""
  },
};

const SoftwareMiniProject = () => {
  return (
    <div className="project-container my-10">
      <ul className="projects-grid">
        {Object.keys(projectsApp).map((key, i) => (
          <FadeBox delay={`${i + 1}00ms`}>
            <li className="projects-card cursor-pointer">
              <div className="card-header">
                <div className="folder-icon">
                  <Icon icon="ic:outline-folder" className="text-lg" />
                </div>
                <ExternalLinks
                  githubLink={projectsApp[key]["link"]}
                  openLink={projectsApp[key]["open"]}
                ></ExternalLinks>
              </div>
              
              <div className="card-title">{key}</div>
              <div className="card-desc">{projectsApp[key]["desc"]}</div>
              <div className="flex gap-2">
                {projectsApp[key]["techStack"].map((stack: string) => {
                  console.log({stack})
                  return (
                    <Icon icon={techStack[stack as keyof TechType]} className="text-2xl shadow-2xl text-white" />
                  )
                })}
              </div>
            </li>
          </FadeBox>
        ))}
      </ul>
    </div>
  )
}

export default SoftwareMiniProject