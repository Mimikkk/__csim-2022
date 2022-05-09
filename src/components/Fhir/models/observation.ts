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

export module Observation {
  export module Card {
    export const description = ({ code }: Observation) => code?.text || "-";
    export const category = (observation: Observation) =>
      observation.category?.[0].coding?.[0]?.display || "-";
    export const time = ({ effectiveDateTime }: Observation) =>
      (effectiveDateTime && new Date(effectiveDateTime).toLocaleString()) ||
      "-";
    export const value = ({ valueQuantity }: Observation) =>
      (valueQuantity && `${valueQuantity?.value} ${valueQuantity?.unit}`) ||
      "-";
  }
}
