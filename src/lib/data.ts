export const softwareProjectsDetail = [
  {
    id: "lsm",
    name: "last man standing",
    description: [
      "A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto.",
      "A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto."
    ],
    banner: "/lsm/lsmBanner2.png",
    techStack: ["next", "tailwind", "typescript"],
    showCase: {
      formatName: "lsmShow",
      formatFile: "png",
      totalImage: 4
    }
  },
  {
    id: "mertapada",
    name: "warteg mertapada profit-spending management",
    description: [
      "A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee.",
      "A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee."
    ],
    banner: "/mertapada/mertapadaBanner2.png",
    techStack: ["next", "tailwind", "typescript", "node", "jwt", "mysql"],
    showCase: {
      formatName: "mertapadaShow",
      formatFile: "png",
      totalImage: 13
    }
  },
  {
    id: "monda",
    name: "monda kitchen commerce",
    description: [
      "A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee.",
      "A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee."
    ],
    banner: "/monda/mondaBanner2.png",
    techStack: ["next", "tailwind", "node", "jwt", "mysql"],
    showCase: {
      formatName: "mondaShowcase",
      formatFile: "png",
      totalImage: 5
    }
  },
  {
    id: "fokus",
    name: "fokus.",
    description: [
      "A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee.",
      "A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee. A Web-app to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee."
    ],
    banner: "/fokus/fokusBanner2.png",
    techStack: ["swift"],
    showCase: {
      formatName: "fokusShow",
      formatFile: "png",
      totalImage: 6
    }
  },
]

export type SoftwareProjectDetailShowCaseType = {
  formatName: string;
  formatFile: string;
  totalImage: number;
}
export interface SoftwareProjectDetailType {
  id: string;
  name: string;
  description: string[];
  banner: string;
  techStack: string[];
  showCase: SoftwareProjectDetailShowCaseType
}
