import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const techStack = {
  next: "devicon:nextjs-wordmark",
  tailwind: "vscode-icons:file-type-tailwind",
  react: "logos:react",
  node: "vscode-icons:file-type-node",
  express: "logos:express",
  javascript: "vscode-icons:file-type-js",
  typescript: "vscode-icons:file-type-typescript",
  redux: "devicon:redux",
  // easy-peasy,
  // zustand,
  jwt: "logos:jwt",
  mysql: "devicon:mysql",
  postgres: "logos:postgresql",
  swift: "vscode-icons:file-type-swift",
  graphql: "vscode-icons:file-type-graphql",
  gatsby: "logos:gatsby",
  chakra: "simple-icons:chakraui",
  sass: "logos:sass"
}

export const mainPersonalFields = [
  {
    name: "Software Engineering",
    icon: "teenyicons:code-solid",
    color: "text-yellow-600"
  },
  {
    name: "Frontend Developer",
    icon: "icon-park-solid:web-page",
    color: "text-blue-600"
  },
  {
    name: "Freelancer",
    icon: "simple-icons:freelancer",
    color: "text-green-500"
  },
  {
    name: "Analog Photography",
    icon: "mdi:film",
    color: "text-slate-500"
  },
  {
    name: "Street & Portrait Photography",
    icon: "mdi:photography",
    color: "text-red-500"
  },
  {
    name: "Music",
    icon: "mdi:music",
    color: "text-amber-700"
  },
  {
    name: "Audio Engineer",
    icon: "game-icons:lightning-frequency",
    color: "text-orange-500"
  },
]

export const softwareFields = [
  {
    name: "Software Engineering",
    icon: "teenyicons:code-solid",
    color: "text-yellow-600"
  },
  {
    name: "Frontend Developer",
    icon: "icon-park-solid:web-page",
    color: "text-blue-600"
  },
  {
    name: "Freelancer",
    icon: "simple-icons:freelancer",
    color: "text-green-500"
  },
  {
    name: "Next JS",
    icon: techStack["next"],
    color: "text-black"
  },
  {
    name: "React",
    icon: techStack["react"],
    color: "text-black"
  },
  {
    name: "Tailwind",
    icon: techStack["tailwind"],
    color: "text-black"
  },
  {
    name: "GraphQL",
    icon: techStack["graphql"],
    color: "text-black"
  },
  {
    name: "Node JS",
    icon: techStack["node"],
    color: "text-black"
  },
  {
    name: ".",
    icon: techStack["express"],
    color: "text-black"
  },
  {
    name: "Typescript",
    icon: techStack["typescript"],
    color: "text-black"
  },
  {
    name: "Redux",
    icon: techStack["redux"],
    color: "text-black"
  },
  {
    name: "JSON Web Token",
    icon: techStack["jwt"],
    color: "text-black"
  },
  {
    name: "MySql",
    icon: techStack["mysql"],
    color: "text-black"
  },
  {
    name: "PostgreSql",
    icon: techStack["postgres"],
    color: "text-black"
  },
  {
    name: "Gatsby JS",
    icon: techStack["gatsby"],
    color: "text-black"
  },
  {
    name: "Chakra UI",
    icon: techStack["chakra"],
    color: "text-black"
  },
  {
    name: "Sass",
    icon: techStack["sass"],
    color: "text-black"
  },
]
