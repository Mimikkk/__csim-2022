import { CodeableConcept } from "./codeable-concept";
import { Period } from "./period";

export type Use = "usual" | "official" | "temp" | "secondary" | "old";

export interface Identifier {
  use?: Use;
  type?: CodeableConcept;
  system?: string;
  value?: string;
  period?: Period;
}
