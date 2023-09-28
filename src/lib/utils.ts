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
