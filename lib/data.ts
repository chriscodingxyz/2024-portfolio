import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import hackathonImg from "@/public/hackathon.png";
import covidImg from "@/public/covid.png";
import type { ExperienceDataTypes, ProjectDataTypes } from "./types";

export const CVLINK =
  "https://www.linkedin.com/in/colin-y-yang";

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
] as const;

export const experiencesData: ExperienceDataTypes[] = [
  {
    title: "Software Engineer Intern",
    company: "Ware Malcomb",
    link: "https://www.waremalcomb.com/",
    location: "Irvine, California, United States",
    description:
      "Built an internal notification system with Python and PowerShell, integrating with SendGrid API to automate   email alerts for upcoming password expirations.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2022",
  },
] as const;

export const projectsData: ProjectDataTypes[] = [
  {
    title: "Google Cloud x MLB Hackathon Project",
    description:
      "Built a fan engagement platform with React, Flask, and Tailwind CSS featuring live game schedules, AI news digests, and k-means recommendations.",
    tags: [
      "React",
      "Flask",
      "Tailwind",
      "Google Cloud",
      "Python",
      "Machine Learning",
      "AI",
      "Real-time",
      "Full-stack",
      "Fan Engagement",
      "K-Means"
    ],
    imageUrl: hackathonImg,
    siteUrl: "#",
    codeUrl: "https://github.com/GentleOtaku/GoatSquad",
  },
  {
    title: "Epidemiological Risk Modeling and Visualization Platform",
    description:
      "Predictive modeling pipeline for COVID transmission risk in schools using pandas, NumPy, and scikit-learn. React/Django dashboard on GCP.",
    tags: [
      "React",
      "Django",
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "GCP",
      "Data Visualization",
      "Machine Learning"
    ],
    imageUrl: covidImg,
    siteUrl: "#",
    codeUrl: "#",
  },
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
  Flask: {
    name: "Flask",
    description: "A lightweight Python web framework",
    url: "https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=flask&logoColor=white",
    type: "Backend",
  },
  "Google Cloud": {
    name: "Google Cloud",
    description: "Google Cloud Platform",
    url: "https://img.shields.io/badge/-GoogleCloud-4285F4?style=flat-square&logo=google-cloud&logoColor=white",
    type: "Cloud",
  },
  Python: {
    name: "Python",
    description: "A popular high-level programming language known for its readability and versatility.",
    url: "https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white",
    type: "Language",
  },
  "Machine Learning": {
    name: "Machine Learning",
    description: "The study of computer algorithms that improve automatically through experience.",
    url: "https://img.shields.io/badge/-Machine%20Learning-FF6384?style=flat-square",
    type: "Artificial Intelligence",
  },
  AI: {
    name: "AI",
    description: "Artificial Intelligence enabling machines to mimic human behavior.",
    url: "https://img.shields.io/badge/-AI-FFB74D?style=flat-square",
    type: "Artificial Intelligence",
  },
  "Real-time": {
    name: "Real-time",
    description: "Real-time data processing capabilities for immediate results.",
    url: "https://img.shields.io/badge/-Real--time-4CAF50?style=flat-square",
    type: "Feature",
  },
  "Data Visualization": {
    name: "Data Visualization",
    description: "Techniques and tools for representing data graphically.",
    url: "https://img.shields.io/badge/-Data%20Visualization-00ACC1?style=flat-square",
    type: "Visualization",
  },
  Dashboard: {
    name: "Dashboard",
    description: "Components and frameworks for building interactive dashboards.",
    url: "https://img.shields.io/badge/-Dashboard-9C27B0?style=flat-square",
    type: "UI Component",
  },
  Simulation: {
    name: "Simulation",
    description: "Tools and platforms for modeling real-world systems and scenarios.",
    url: "https://img.shields.io/badge/-Simulation-795548?style=flat-square",
    type: "Simulation",
  },
  "Full-stack": {
    name: "Full-stack",
    description: "Full-stack development encompassing both frontend and backend technologies.",
    url: "https://img.shields.io/badge/-Full--stack-4CAF50?style=flat-square",
    type: "Development",
  },
  "Fan Engagement": {
    name: "Fan Engagement",
    description: "Technologies focusing on engaging fans through interactive interfaces and real-time updates.",
    url: "https://img.shields.io/badge/-Fan%20Engagement-FF5722?style=flat-square",
    type: "Feature",
  },
  "K-Means": {
    name: "K-Means",
    description: "K-Means clustering algorithm for partitioning data.",
    url: "https://img.shields.io/badge/-K--Means-9C27B0?style=flat-square",
    type: "Algorithm",
  },
  "COVID-19": {
    name: "COVID-19",
    description: "Relating to the COVID-19 pandemic and its data analysis use cases.",
    url: "https://img.shields.io/badge/-COVID--19-007BFF?style=flat-square",
    type: "Event",
  },
  Interactive: {
    name: "Interactive",
    description: "Interactive UI elements and interfaces.",
    url: "https://img.shields.io/badge/-Interactive-FF9800?style=flat-square",
    type: "UI Component",
  },
  "Data Analysis": {
    name: "Data Analysis",
    description: "Data analysis and insights, often involving statistical techniques.",
    url: "https://img.shields.io/badge/-Data%20Analysis-3F51B5?style=flat-square",
    type: "Analytics",
  },
  Django: {
    name: "Django",
    description: "A high-level Python web framework that encourages rapid development.",
    url: "https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django&logoColor=white",
    type: "Backend",
  },
  pandas: {
    name: "pandas",
    description: "Data manipulation and analysis library for Python.",
    url: "https://img.shields.io/badge/-pandas-150458?style=flat-square&logo=pandas&logoColor=white",
    type: "Data Science",
  },
  NumPy: {
    name: "NumPy",
    description: "Fundamental package for scientific computing with Python.",
    url: "https://img.shields.io/badge/-NumPy-013243?style=flat-square&logo=numpy&logoColor=white",
    type: "Data Science",
  },
  "scikit-learn": {
    name: "scikit-learn",
    description: "Machine learning library for Python.",
    url: "https://img.shields.io/badge/-scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white",
    type: "Machine Learning",
  },
  GCP: {
    name: "GCP",
    description: "Google Cloud Platform for cloud computing services.",
    url: "https://img.shields.io/badge/-GCP-4285F4?style=flat-square&logo=google-cloud&logoColor=white",
    type: "Cloud",
  },
  "Predictive Modeling": {
    name: "Predictive Modeling",
    description: "Statistical techniques for predicting future outcomes based on historical data.",
    url: "https://img.shields.io/badge/-Predictive%20Modeling-FF6B6B?style=flat-square",
    type: "Machine Learning",
  },
  Epidemiology: {
    name: "Epidemiology",
    description: "Study of disease patterns and health outcomes in populations.",
    url: "https://img.shields.io/badge/-Epidemiology-8E44AD?style=flat-square",
    type: "Health Science",
  }
} as const;

export const contactData = {
  email: "yangcolin.y@gmail.com",
  linkedIn: "https://www.linkedin.com/in/colin-y-yang"
};

export const summaryData = "I’m a dedicated and ambitious Computer Science student with a strong foundation in full-stack development, machine learning, and cloud technologies. Currently completing my A.S. at Irvine Valley College, I have a guaranteed transfer to UC Irvine in Fall 2025 to pursue my B.S. in Computer Science. I thrive on building impactful projects that bridge technology and user experience. My most notable work includes a Google Cloud x MLB Hackathon project, where I developed a full-stack fan engagement platform using React, Flask, and Tailwind CSS. This app features real-time game schedules, AI-driven multilingual news digests, and a k-means clustering recommendation system. Beyond hackathons, I’ve built a COVID-19 simulation dashboard in Flask, providing intuitive data insights through an interactive UI. My passion lies in leveraging AI and software engineering to create seamless, data-driven experiences. Always open to collaborating on innovative projects and connecting with like-minded engineers!";

export const educationData = [
  {
    institution: "UC Irvine",
    degree: "Bachelor's degree",
    field: "Computer Science",
    duration: "2025 - 2027"
  },
  {
    institution: "Irvine Valley College",
    degree: "Associate's degree",
    field: "Computer Science",
    duration: "June 2023 - August 2025"
  },
  {
    institution: "Saddleback College",
    degree: "Associate's degree",
    field: "Computer Science",
    duration: "June 2023 - August 2025"
  },
  {
    institution: "University High School, Irvine",
    degree: "High School Diploma",
    field: "",
    duration: "August 2019 - June 2023"
  }
] as const;
