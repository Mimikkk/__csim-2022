import { CodeableConcept, Comparator, Base } from "./base";
import { head } from "rambda";

export interface Quantity {
  value: number;
  unit: string;
  comparator: Comparator;
}

export interface Component {
  valueQuantity: Quantity;
  text?: string;
}

export interface Observation extends Base {
  category: CodeableConcept[];
  code: CodeableConcept;
  valueQuantity?: Quantity;
  effectiveDateTime: string;
  component?: Component[];
}

const round2 = (value: number) => Math.round(value * 100) / 100;
const valueQuantityS = (item?: Quantity[] | Quantity) =>
  item
    ? Array.isArray(item)
      ? `${item
          .map(({ value }) => value)
          .map(round2)
          .join("/")} ${head(item).unit}`
      : `${round2(item.value)} ${item.unit}`
    : "";

export module Observation {
  export module Card {
    export const description = ({ code }: Observation) => code?.text || "-";

    export const category = (observation: Observation) =>
      observation.category?.[0].coding?.[0]?.display || "-";

    export const time = ({ effectiveDateTime }: Observation) =>
      (effectiveDateTime && new Date(effectiveDateTime).toLocaleString()) ||
      "-";

    export const value = ({ valueQuantity, component }: Observation) =>
      valueQuantityS(
        valueQuantity || component?.map(({ valueQuantity }) => valueQuantity)
      );
  }
}
