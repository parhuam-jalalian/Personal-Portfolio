import { TechStackEnum } from "./enum";

export interface ICommonProps {
  _type: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _createdAt: string;
  name: string;
  image: string;
  title: string;
}

export interface INavbarOptions {
  id: number;
  label: string;
  icon?: string;
  path: string;
}

export interface IAboutSection extends ICommonProps {
  body: any[];
}

export interface ILinksProps {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}
export interface IHeroSectionProps extends ILinksProps {
  title: string;
  name: string;
  mainImage: string;
  _id: string;
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

export interface IProjectData extends ICommonProps {
  mainImage: string;
  description: string;
  github: string;
  deployment: string;
}

export interface IExperienceData {
  _key: string;
  companyName: string;
  designation: string;
  startDate: string;
  currentlyEmployed: boolean;
  endDate: string;
  body: any[];
}

export interface IExperienceList extends ICommonProps {
  experiences: IExperienceData[];
}
