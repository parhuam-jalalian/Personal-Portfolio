import { TechStackEnum } from "./enum";

export interface ICommonProps {
  _type: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _createdAt: string;
  name: string;
  image: string;
}

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
  resume: string;
}

export interface ITechStackSingleItem {
  stack: TechStackEnum.FRONTEND | TechStackEnum.BACKEND | TechStackEnum.DEVOPS;
  icon: string;
  label: string;
  _key: string;
}

export interface ITechStackOptionProp extends ICommonProps {
  technologies: ITechStackSingleItem[];
}
