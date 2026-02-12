import {
  architecture,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  tbc,
  leverx,
  revenue,
  postgres,
  wildOasis,
  movie,
  productStore,
  travel,
  password,
  github,
  githubProject,
  tipCalculator,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "github",
    title: "GitHub",
    href: "https://github.com/dachidavituri",
    icon: github,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/dachi-davituri/",
    icon: linkedin,
  },
];

const values = [
  {
    title: "High-Quality Development",
    description:
      "I focus on writing clean, maintainable, and scalable code that follows modern best practices and delivers long-term value.",
  },
  {
    title: "Reliable Communication",
    description:
      "Clear and consistent communication is a priority for me, ensuring smooth collaboration with clients, teams, and stakeholders.",
  },
  {
    title: "On-Time Delivery",
    description:
      "I respect deadlines and organize my workflow efficiently to deliver stable and well-tested solutions on schedule.",
  },
];

const services = [
  { title: "Modern Frontend Development", icon: web },
  { title: "Scalable Backend Systems", icon: backend },
  { title: "REST API & Database Architecture", icon: architecture },
  { title: "Full-Stack Web Solutions", icon: creator },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Node js Developer",
    company_name: "LEVERX",
    icon: leverx,
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Nov 2025",
    points: [
      "Built and improved backend features using Node.js and Express, focusing on clean architecture and maintainable code.",
      "Designed RESTful APIs and integrated them with frontend applications and external services.",
      "Worked with databases to manage data efficiently and ensure reliable application performance.",
      "Collaborated with senior developers through code reviews, debugging, and feature implementation in an Agile environment.",
    ],
  },
  {
    title: "Advanced React Accelerator",
    company_name: "TBC",
    icon: tbc,
    iconBg: "#383E56",
    date: "Sep 2024 - Feb 2025",
    points: [
      "Developed modern frontend applications using React, Next.js, and TypeScript with a focus on performance and scalability.",
      "Implemented reusable components, state management solutions, and responsive UI layouts.",
      "Integrated REST APIs, authentication flows, and real-time data handling into production-style projects.",
      "Collaborated in team-based development, applying Git workflows, code reviews, and best practices in software engineering.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Revenue Service",
    icon: revenue,
    iconBg: "#383E56",
    date: "Feb 2024 - Jul 2024",
    points: [
      "Contributed to the development of internal web applications",
      "Implemented RESTful API integrations, form handling, and data validation to support business workflows.",
      "Worked with relational databases to manage and retrieve structured data efficiently and securely.",
    ],
  },
];

const projects = [
  {
    name: "The Wild Oasis",
    description:
      "A full-stack hotel management and booking platform where users can browse cabins, make reservations, and manage bookings with secure authentication and real-time database integration using Supabase.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "orange-text-gradient",
      },
      {
        name: "OAuth",
        color: "black-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
    ],
    image: wildOasis,
    live_link: "https://the-wild-oasis-beta-sandy.vercel.app/",
    source_code_link: "https://github.com/dachidavituri/The-Wild-Oasis",
  },
  {
    name: "Movie-App",
    description:
      "A responsive movie discovery application that fetches real-time film data from an external API, allowing users to browse movies, view details, and explore ratings with a modern UI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Ant Design",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "text-text-gradient",
      },
    ],
    image: movie,
    live_link: "https://movie-app-seven-lyart.vercel.app/ka/movies/1220564",
    source_code_link: "https://github.com/dachidavituri/movie-app",
  },
  {
    name: "Product Store",
    description:
      "A PERN stack e-commerce CRUD application where users can create, edit, delete, and browse products, featuring a RESTful Express backend, PostgreSQL database, and secure request protection with Arcjet.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Arcjet",
        color: "white-text-gradient",
      },
    ],
    image: productStore,
    live_link: "https://pern-product-store-2s39.onrender.com/",
    source_code_link: "https://github.com/dachidavituri/pern-product-store",
  },
  {
    name: "Travel Agency",
    description:
      "A multilingual travel booking platform where users can explore tours, select dates, and manage reservations, built with React, internationalization support, and dynamic date handling for a seamless user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "dayjs",
        color: "orange-text-gradient",
      },
      {
        name: "i18next",
        color: "green-text-gradient",
      },
    ],
    image: travel,
    live_link: "https://my-travel-six.vercel.app/ka/home",
    source_code_link: "https://github.com/dachidavituri/myTravel",
  },
  {
    name: "Password Generator",
    description:
      "A TypeScript-based password generator that creates secure, customizable passwords using regex rules and user-defined criteria such as length, symbols, numbers, and uppercase characters.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "regExp",
        color: "orange-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: password,
    live_link: "https://dachidavituri.github.io/Password-generator/",
    source_code_link: "https://github.com/dachidavituri/Password-generator",
  },
  {
    name: "Github Search App",
    description:
      "A GitHub user search tool that consumes the public GitHub REST API to display profiles, repositories, and key statistics with fast, responsive UI built in React and TypeScript.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "orange-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: githubProject,
    live_link: "https://dachidavituri.github.io/github-search-app/",
    source_code_link: "https://github.com/dachidavituri/Password-generator",
  },
  {
    name: "Tip Calculator",
    description:
      "A lightweight JavaScript application that calculates tips and total bills in real time based on bill amount, tip percentage, and number of people, demonstrating core DOM manipulation and clean UI logic.",
    tags: [
      {
        name: "Vanilla Js",
        color: "yellow-text-gradient",
      },
      {
        name: "DOM",
        color: "orange-text-gradient",
      },
    ],
    image: tipCalculator,
    live_link: "https://dachidavituri.github.io/tip-calculator/",
    source_code_link: "https://github.com/dachidavituri/Password-generator",
  },
];

export { services, technologies, experiences, projects, values };
