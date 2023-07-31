import { Base } from "../base/models";

interface Technology {
  label: string;
  value: string;
}

export interface Project extends Base {
  frontendTech: Technology[];
  backendTech: Technology[];
  devOpsTech: Technology[];
}

export type Projects = Project[];
