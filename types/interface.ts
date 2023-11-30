import { TechStackEnum } from "./enum";

export interface INavbarOptions {
  id: number;
  label: string;
  icon?: string;
  path: string;
}

export interface IHeroSectionProps {
  title: string;
  name: string;
  mainImage: string;
  _id: string;
  github: string;
  linkedin: string;
  email: string;
}

export interface ITechStackOptionProp {
  title: string;
  mainImage: string;
  stack: TechStackEnum.FRONTEND | TechStackEnum.BACKEND | TechStackEnum.DEVOPS;
  _id: string;
  serial: number;
}
