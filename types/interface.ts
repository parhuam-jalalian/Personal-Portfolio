import { TechStackEnum } from "./enum";

export interface INavbarOptions {
  id: number;
  label: string;
  icon?: string;
  path: string;
}

export interface ITechStackOptionProp {
  title: string;
  mainImage: string;
  stack: TechStackEnum.FRONTEND | TechStackEnum.BACKEND | TechStackEnum.DEVOPS;
  _id: string;
  serial: number;
}
