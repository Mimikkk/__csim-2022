import { Comparator } from "./comparator";
import { head } from "rambda";

export interface Quantity {
  value: number;
  unit: string;
  comparator: Comparator;
}

export module Quantity {
  const round2 = (value: number) => Math.round(value * 100) / 100;
  export const toString = (item?: Quantity[] | Quantity) =>
    item
      ? Array.isArray(item)
        ? `${item
            .map(({ value }) => value)
            .map(round2)
            .join("/")} ${head(item).unit}`
        : `${round2(item.value)} ${item.unit}`
      : "";
}
