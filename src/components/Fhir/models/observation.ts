import { CodeableConcept, Comparator } from "./base";

export interface Quantity {
  value: number;
  unit: string;
  comparator: Comparator;
  system: string;
  code: string;
}

export interface Observation {
  code: CodeableConcept;
  valueQuantity: Quantity;
}
