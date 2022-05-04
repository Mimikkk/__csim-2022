import { Period } from "./base";

export interface HumanName {
  use?: string;
  family?: string;
  given: string[];
  prefix: string[];
  suffix: string[];
  text?: string;
  period?: Period;
}
