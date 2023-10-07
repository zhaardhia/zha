export const softwareProjectsDetail = [
  {
    id: "lsm",
    name: "last man standing",
    description: [
      "Last Man Standing is a Web 3 based game to guess random word against others and win the prize of Eth.",
      "In this game, there are several stages: Beginning, Countdown, Day, Dusk, and Night. It all starts with purchasing tickets during the Beginning phase, and you can still buy tickets during the Countdown phase, but their prices go up whenever someone makes a purchase. The Day phase is where you place a keyword that you want to use. At the start of the game, ten possible keywords are generated, with only one being the actual key.",
      "These ten words are posted on Twitter for participants to see. When the Dusk phase comes, one keyword is selected from the ten, which becomes the key. In the Night phase, participants must guess who among all the attendees checked in using the chosen keyword. If you checked-in component's ticket, and the ticket doesn't have the keyword BAYEM, you're dead. However, if the keyword matches, the value of their ticket is transferred to you. The twist is that the value can shift to someone else if they registered after you did. For example, if your ID is 4 and another person's ID is 6, and they checked in using your keyword 'BAYEM' but they registered after you, then the value of your ticket would transfer to the person with ID 5",
      "This continues until there's a single winner, who can then claim the prize money. If there are only two participants left, they have the option to split the pot and share the winnings equally."
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
      "Warteg Mertapada Bahari is a franchise warteg from Warteg Kharisma Bahari (WKB). This website aims to recap daily & additional spending, calculate expense & profit, also manage the warteg's employee.",
      "There are 2 side of this website, one is for the investor that have full access of feature, and the other is for admin that organize the warteg directly.",
      "The flow is that the admin must input shopping goods with their price every single day as raw materials for making food at the warteg, then admin must input the profit of that day, also checklist the employees absence, then the program will calculate report of the day, and add the daily profit to monthly profit. As the day goes on, the program will calculate a monthly report which can be seen in its own menu (from the 1st to today's date), which consists of expense per shopping goods category, total expense, total profit, total salary for each employee according to the absences filled in. every day, and also the total profit sharing between investors and admin",
    ],
    banner: "/mertapada/mertapadaBanner2.png",
    techStack: ["next", "tailwind", "typescript", "node", "jwt", "mysql"],
    showCase: {
      formatName: "mertapadaShow",
      formatFile: "png",
      totalImage: 13
    },
    references: [
      {
        name: "Warteg Kharisma Bahari",
        link: "https://wartegkharismabaharigroup.com/"
      }
    ]
  },
  {
    id: "monda",
    name: "monda kitchen commerce",
    description: [
      "Monda Kitchen is an MSME business that sells frozen food in JABODETABEK only. This website aims to market Monda Kitchen online by displaying the profile of Monda Food itself and you can shop directly on the same website.",
      
      "The features of this website, apart from having a landing page, also provide its own commerce app which is integrated with Midtrans (Payment Gateway), as well as a Monthly Shopping feature, where selected items will automatically be added to the cart according to the desired date. Apart from that, for the web admin, there are turnover statistics features, add/update frozen food stock, and also control orders and their status",
    ],
    banner: "/monda/mondaBanner2.png",
    techStack: ["next", "tailwind", "node", "jwt", "mysql"],
    showCase: {
      formatName: "mondaShowcase",
      formatFile: "png",
      totalImage: 5
    },
    references: [
      {
        name: "Payment Gateway",
        link: "https://www.xendit.co/en-id/blog/what-is-payment-gateway/"
      },
      {
        name: "Midtrans",
        link: "https://midtrans.com/"
      }
    ]
  },
  {
    id: "fokus",
    name: "fokus.",
    description: [
      "Fokus is an app that accompany user doing daily tasks / activity in daily basis, using Pomodoro Technique, White Noise and Gamification. User can set their task along with the scheduler, set pomodoro settings (pomodoro cycles, work & rest duration), and turn on/off White Noise while the task is started. Pomodoro cycle will start right after user started their task and when its done, user get the point to be part of they're gamification.",
      "The aim of this project is to help people especially people with ADHD so they can optimalized their work."
    ],
    banner: "/fokus/fokusBanner2.png",
    techStack: ["swift"],
    showCase: {
      formatName: "fokusShow",
      formatFile: "png",
      totalImage: 6
    },
    references: [
      {
        name: "Pomodoro Technique",
        link: "https://www.themuse.com/advice/take-it-from-someone-who-hates-productivity-hacksthe-pomodoro-technique-actually-works"
      },
      {
        name: "White Noise",
        link: "https://www.sleepfoundation.org/noise-and-sleep/white-noise"
      },
      {
        name: "Gamification",
        link: "https://www.biworldwide.com/gamification/what-is-gamification/#:~:text=Gamification%20is%20adding%20game%20mechanics,inspire%20collaborate%2C%20share%20and%20interact."
      }
    ]
  },
  {
    id: "sultantangsel",
    name: "Sultan Tangsel",
    description: [
      "Sultan Tangsel is a registration service by BPN Tangerang Selatan so the South Tangerang's residents can queue for their land management. I continued BPN last website's design and adding a registration service, along with admin site to manage and control the registrant",
    ],
    banner: "/sultantangsel/bannerSultangsel.png",
    techStack: ["react", "tailwind", "node", "jwt", "mysql"],
    showCase: {
      formatName: "sultangsel",
      formatFile: "png",
      totalImage: 6
    },
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
  showCase: SoftwareProjectDetailShowCaseType,
  references?: ReferencesProjectsType[] | undefined
}

export interface ReferencesProjectsType {
  name: string;
  link: string
}