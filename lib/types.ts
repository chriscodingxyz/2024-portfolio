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
