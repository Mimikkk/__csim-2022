import { CodeableConcept, Comparator } from "./base";

export interface Quantity {
  value: number;
  unit: string;
  comparator: Comparator;
}

export interface Observation {
  category: CodeableConcept[];
  code: CodeableConcept;
  valueQuantity: Quantity;
  effectiveDateTime: string;
}
