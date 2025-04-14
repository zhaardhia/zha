import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const techStack = {
  next: "nonicons:next-16",
  nuxt: "material-icon-theme:nuxt",
  tailwind: "vscode-icons:file-type-tailwind",
  react: "logos:react",
  node: "vscode-icons:file-type-node",
  express: "logos:express",
  javascript: "vscode-icons:file-type-js",
  typescript: "vscode-icons:file-type-typescript",
  redux: "devicon:redux",
  // easy-peasy,
  // zustand,
  // shadcn
  jwt: "logos:jwt-icon",
  mysql: "devicon:mysql",
  postgres: "logos:postgresql",
  swift: "vscode-icons:file-type-swift",
  graphql: "vscode-icons:file-type-graphql",
  gatsby: "logos:gatsby",
  chakra: "simple-icons:chakraui",
  sass: "logos:sass",
  docker: "logos:docker-icon",
  nginx: "material-icon-theme:nginx",
  redis: "devicon:redis",
  supabase: "devicon:supabase"
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
  // {
  //   name: "Freelancer",
  //   icon: "simple-icons:freelancer",
  //   color: "text-green-500"
  // },
  // {
  //   name: "Analog Photography",
  //   icon: "mdi:film",
  //   color: "text-slate-500"
  // },
  // {
  //   name: "Street & Portrait Photography",
  //   icon: "mdi:photography",
  //   color: "text-red-500"
  // },
  // {
  //   name: "Music",
  //   icon: "mdi:music",
  //   color: "text-amber-700"
  // },
  // {
  //   name: "Audio Engineer",
  //   icon: "game-icons:lightning-frequency",
  //   color: "text-orange-500"
  // },
]

export const softwareFields = [
  {
    id: "softwareEngineering",
    name: "Software Engineering",
    icon: "teenyicons:code-solid",
    color: "text-yellow-600"
  },
  {
    id: "frontendDeveloper",
    name: "Frontend Developer",
    icon: "icon-park-solid:web-page",
    color: "text-blue-600"
  },
  {
    id: "freelancer",
    name: "Freelancer",
    icon: "simple-icons:freelancer",
    color: "text-green-500"
  },
  {
    id: "next",
    name: "Next",
    icon: techStack["next"],
    color: "text-white"
  },
  {
    id: "react",
    name: "React",
    icon: techStack["react"],
    color: "text-black"
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: techStack["tailwind"],
    color: "text-black"
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: techStack["graphql"],
    color: "text-black"
  },
  {
    id: "node",
    name: "Node JS",
    icon: techStack["node"],
    color: "text-black"
  },
  {
    id: "express",
    name: ".",
    icon: techStack["express"],
    color: "text-black"
  },
  {
    id: "typescript",
    name: "Typescript",
    icon: techStack["typescript"],
    color: "text-black"
  },
  {
    id: "redux",
    name: "Redux",
    icon: techStack["redux"],
    color: "text-black"
  },
  {
    id: "jwt",
    name: "JSON Web Token",
    icon: techStack["jwt"],
    color: "text-black"
  },
  {
    id: "swift",
    name: "Swift",
    icon: techStack["swift"],
    color: "text-black"
  },
  {
    id: "mysql",
    name: "MySql",
    icon: techStack["mysql"],
    color: "text-black"
  },
  {
    id: "postgres",
    name: "PostgreSql",
    icon: techStack["postgres"],
    color: "text-black"
  },
  {
    id: "gatsby",
    name: "Gatsby JS",
    icon: techStack["gatsby"],
    color: "text-black"
  },
  {
    id: "chakra",
    name: "Chakra UI",
    icon: techStack["chakra"],
    color: "text-black"
  },
  {
    id: "sass",
    name: "Sass",
    icon: techStack["sass"],
    color: "text-black"
  },
  {
    id: "nuxt",
    name: "Nuxt",
    icon: techStack["nuxt"],
    color: "text-black"
  },
  {
    id: "docker",
    name: "Docker",
    icon: techStack["docker"],
    color: "text-black"
  },
  {
    id: "redis",
    name: "Redis",
    icon: techStack["redis"],
    color: "text-black"
  },
  {
    id: "nginx",
    name: "Nginx",
    icon: techStack["nginx"],
    color: "text-black"
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: techStack["supabase"],
    color: "text-black"
  },
]
