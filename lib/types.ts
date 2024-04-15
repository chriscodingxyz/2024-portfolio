import { StaticImageData } from "next/image";
import { links, techData } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type TechKey = keyof typeof techData;

export type ProjectDataTypes = {
  title: string;
  description: string;
  tags: TechKey[];
  imageUrl: StaticImageData;
  siteUrl: string;
  codeUrl: string;
};

export type ExperienceDataTypes = {
  date: string;
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  company: string;
  location: string;
};
