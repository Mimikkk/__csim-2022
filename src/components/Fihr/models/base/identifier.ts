import { CodeableConcept } from "./codeable-concept";
import { Period } from "./period";

export interface Identifier {
  use?: string;
  type?: CodeableConcept;
  system?: string;
  value?: string;
  period?: Period;
}
