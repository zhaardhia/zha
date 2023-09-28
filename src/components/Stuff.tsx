import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FadeBox from './FadeBox'

interface Project {
  desc: string;
  techStack: string;
  link: string;
  open?: string; // Make 'open' property optional if some projects don't have it
}

const projects: Record<string, Project> = {
  "TDSB Homework Management Interface": {
    desc:
      "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
    techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
    link: "https://github.com/gazijarin/TDSBHomeworkManagement",
    open: "https://tdsb-app.herokuapp.com/"
  },
  "Adam A.I.": {
    desc:
      "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
    techStack: "Javascript, HTML / CSS",
    link: "https://github.com/gazijarin/adamai",
    open: "https://gazijarin.github.io/AdamAI/"
  },
  "Distributed Logging and Monitoring System": {
    desc:
      "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
    techStack: "Node.js (Express.js), React.js, PostgreSQL",
    link:
      "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System"
  },
  "Odin Bot": {
    desc:
      "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
    techStack: "Javascript, Node.js, Natural NLP, Telegram API",
    link: "https://github.com/gazijarin/OdinBot",
    open: ""
  },
  "Game Centre": {
    desc:
      "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
    techStack: "Java, Android Studio",
    link: "https://github.com/gazijarin/gamecentre",
    open: ""
  },
  "Minimax Stonehenge": {
    desc:
      "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
    techStack: "Python",
    link: "https://github.com/gazijarin/stonehenge",
    open: ""
  }
};

const Stuff = () => {
  return (
    <div>
      <div className="section-header">
        <span className="section-title text-3xl mt-9">Stuff</span>
      </div>
      <Tabs defaultValue="account" className="w-[100%] mx-auto">
        <TabsList className="mx-auto w-full flex gap-5 bg-slate-800">
          <TabsTrigger value="account" className="w-[30%]">Software Creations</TabsTrigger>
          <TabsTrigger value="password" className="w-[30%]">Photography</TabsTrigger>
          <TabsTrigger value="music" className="w-[30%]">Music</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="project-container">
            <ul className="projects-grid">
              {Object.keys(projects).map((key, i) => (
                <FadeBox delay={`${i + 1}00ms`}>
                  <li className="projects-card">
                    <div className="card-header">
                      <div className="folder-icon">
                        <FolderOpenRoundedIcon
                          style={{ fontSize: 35 }}
                        ></FolderOpenRoundedIcon>
                      </div>
                      <ExternalLinks
                        githubLink={projects[key]["link"]}
                        openLink={projects[key]["open"]}
                      ></ExternalLinks>
                    </div>

                    <div className="card-title">{key}</div>
                    <div className="card-desc">{projects[key]["desc"]}</div>
                    <div className="card-tech">{projects[key]["techStack"]}</div>
                  </li>
                </FadeBox>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsContent value="music">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default Stuff