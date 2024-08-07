import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import rmtdevImg from "@/public/rmtdev.png";
import cherrynftImg from "@/public/project-nft.png";
import win98Img from "@/public/project-98.png";
import eventoImg from "@/public/project-evento.png";
import tailsidImg from "@/public/project-tailsid.png";
import type { ExperienceDataTypes, ProjectDataTypes } from "./types";

export const CVLINK =
  "https://docs.google.com/document/d/1OPZ7AvdwdWzd3o_vCGJ2zDj6sVUScl-3fwgepYFS2-g/edit?usp=sharing";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData: ExperienceDataTypes[] = [
  {
    title: "Freelance Developer",
    company: "LittleCraftsLondon",
    link: "https://littlecraftslondon.com/",
    location: "Remote, UK",
    description:
      "I've worked primarily with LittleCraftsLondon.com helping update the website and create new features, especially during holidays and new seasons.",
    // icon: React.createElement(FaReact),
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Junior Developer",
    company: "NorthCoders",
    link: "https://northcoders.com/",
    location: "Remote, UK",
    description:
      "Certified fullstack developer bootcamp. The ciriculum focused on React for the frontend and a SQL database for the backend.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "IT Consultant",
    company: "MacSeven",
    link: "https://www.mac-seven.com/",
    location: "London, UK",
    description:
      "Worked as an IT Consultant for clients such as John Lewis, The White Company, Debenhams, and more.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
] as const;

export const projectsData: ProjectDataTypes[] = [
  {
    title: "TailsID (*beta*)",
    description:
      "Next.js app for managing QR code pet tags. Users can log in, sign up, manage accounts, and order custom QR code tags for their pets",
    tags: [
      "TypeScript",
      "React",
      "Nextjs",
      "ContextAPI",
      "Tailwind",
      "Prisma",
      "PSQL",
      "Zod",
      "FramerMotion",
      "Supabase",
    ],
    imageUrl: tailsidImg,
    siteUrl: "https://tailsid.chriscoding.xyz/",
    codeUrl: "https://github.com/chriscodingxyz/tailsid",
  },
  {
    title: "Evento",
    description:
      "Nextjs fullstack app with a hosted SQL database or local events. Zod for validation, Prisma for database, and Framer Motion for animations.",
    tags: [
      "TypeScript",
      "React",
      "Nextjs",
      "ContextAPI",
      "Tailwind",
      "Prisma",
      "PSQL",
      "Zod",
      "FramerMotion",
    ],
    imageUrl: eventoImg,
    siteUrl: "https://evento-seven.vercel.app/",
    codeUrl: "https://github.com/chriscodingxyz/evento",
  },

  {
    title: "Remote Dev",
    description:
      "Job board for remote developer jobs. It has features like filtering, sorting and pagination. Built with Tanstack and Vercel.",
    tags: ["TypeScript", "React", "Tailwind", "Tanstack"],
    imageUrl: rmtdevImg,
    siteUrl: "https://remotedev.vercel.app/",
    codeUrl: "https://github.com/chriscodingxyz/remotedev",
  },
  {
    title: "Cherry NFT",
    description:
      "A fullstack NFT web app for viewing popular NFTs. Uses RestAPI for the data. View by Ethereum or $USD pricing, also via different timeframes",
    tags: [
      "JavaScript",
      "React",
      "Axios",
      "Tanstack",
      "Tailwind",
      "ContextAPI",
      "FramerMotion",
      "Supabase",
    ],
    imageUrl: cherrynftImg,
    siteUrl: "https://nft.chriscoding.xyz/",
    codeUrl: "https://github.com/chriscodingxyz/rupee-nft",
  },
  {
    title: "Win98 Portfolio",
    description:
      "Fun single page application portfolio. Nostalgic Windows 98 theme. Features my projects, my skills and my experience.",
    tags: ["JavaScript", "React", "Axios", "Tailwind", "Zustand"],
    imageUrl: win98Img,
    siteUrl: "https://98.chriscoding.xyz/",
    codeUrl: "https://github.com/chriscodingxyz/cherrydub98",
  },

  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const techData = {
  CSS: {
    name: "CSS",
    description: "Cascading Style Sheets",
    url: "https://img.shields.io/badge/-CSS3-2B74B8?style=flat-square&logo=css3&logoColor=white",
    type: "Styling",
  },
  HTML: {
    name: "HTML",
    description: "Hypertext Markup Language",
    url: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
    type: "Frontend",
  },
  JavaScript: {
    name: "JavaScript",
    description:
      "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
    url: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white",
    type: "Language",
  },
  TypeScript: {
    name: "TypeScript",
    description:
      "Typed superset of JavaScript that compiles to plain JavaScript.",
    url: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
    type: "Language",
  },
  Axios: {
    name: "Axios",
    description: "Promise based HTTP client for the browser and node.js",
    url: "https://img.shields.io/badge/-Axios-007396?style=flat-square&logo=axios&logoColor=white",
    type: "Frontend",
  },
  Tailwind: {
    name: "Tailwind",
    description: "A utility-first CSS framework",
    url: "https://img.shields.io/badge/-Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
    type: "Styling",
  },
  FramerMotion: {
    name: "Framer Motion",
    description: "Production-ready motion library for React",
    url: "https://img.shields.io/badge/-Framer-0055FF?style=flat-square&logo=framer&logoColor=white",
    type: "Frontend",
  },
  React: {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    url: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white",
    type: "Library",
  },

  ContextAPI: {
    name: "Context API",
    description:
      "A way to pass data through the component tree without having to pass props down manually at every level",
    url: "https://img.shields.io/badge/-Context-61DAFB?style=flat-square&logo=react&logoColor=white",
    type: "State Management",
  },
  Zustand: {
    name: "Zustand",
    description:
      "A small, fast and scaleable bearbones state-management solution",
    url: "https://img.shields.io/badge/-Zustand-FFB14B?style=flat-square&logo=zustand&logoColor=white",
    type: "State Management",
  },
  Redux: {
    name: "Redux",
    description: "A predictable state container for JavaScript apps",
    url: "https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white",
    type: "State Management",
  },
  Tanstack: {
    name: "Tanstack",
    description:
      "A collection of tools for building web applications with React",
    url: "https://img.shields.io/badge/-Tanstack-FF4154?style=flat-square&logo=react%20query&logoColor=white",
    type: "Frontend",
  },
  Nextjs: {
    name: "Next.js",
    description: "The React framework for production",
    url: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
    type: "Framework",
  },
  Express: {
    name: "Express",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    url: "https://img.shields.io/badge/-Express-000000?style=flat-square&logo=Express&logoColor=white",
    type: "Backend",
  },
  Nodejs: {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    url: "https://img.shields.io/badge/-Node-339933?style=flat-square&logo=node.js&logoColor=white",
    type: "Backend",
  },
  // MySQL: {
  //   name: "MySQL",
  //   description: "Open-source relational database management system",
  //   url: "https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white",
  //   type: "Database",
  // },
  PSQL: {
    name: "PSQL",
    description: "Open-source relational database management system",
    url: "https://img.shields.io/badge/-PSQL-336791?style=flat-square&logo=postgresql&logoColor=white",
    type: "Database",
  },
  Supabase: {
    name: "Supabase",
    description: "The open source Firebase alternative",
    url: "https://img.shields.io/badge/-Supabase-008060?style=flat-square&logo=supabase&logoColor=white",
    type: "Backend",
  },
  MongoDB: {
    name: "MongoDB",
    description: "NoSQL document database",
    url: "https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white",
    type: "Database",
  },
  Firebase: {
    name: "Firebase",
    description: "Firebase helps you build and run successful apps",
    url: "https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white",
    type: "Backend",
  },
  AWS: {
    name: "AWS",
    description: "Amazon Web Services",
    url: "https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white",
    type: "Backend",
  },
  GitHub: {
    name: "GitHub",
    description: "GitHub is a code hosting platform",
    url: "https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white",
    type: "Version Control",
  },
  Git: {
    name: "Git",
    description: "Version control system",
    url: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
    type: "Version Control",
  },
  Jest: {
    name: "Jest",
    description: "Delightful JavaScript testing framework",
    url: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
    type: "Testing",
  },
  Zod: {
    name: "Zod",
    description: "TypeScript-first schema declaration and validation library",
    url: "https://img.shields.io/badge/-Zod-0A81AB?style=flat-square&logo=zod&logoColor=white",
    type: "Type Validation",
  },
  Prisma: {
    name: "Prisma",
    description: "Next-generation ORM for Node.js and TypeScript",
    url: "https://img.shields.io/badge/-Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white",
    type: "Backend",
  },
} as const;
