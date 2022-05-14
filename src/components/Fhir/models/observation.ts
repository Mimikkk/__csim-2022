import { CodeableConcept, Quantity, Base } from "./base";
import { Chartable, Series } from "@/shared/models";

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

export module Observation {
  export module Card {
    export const description = ({ code }: Observation) => code?.text || "-";

    export const category = (observation: Observation) =>
      observation.category?.[0].coding?.[0]?.display || "-";

    export const time = ({ effectiveDateTime }: Observation) =>
      (effectiveDateTime && new Date(effectiveDateTime).toLocaleString()) ||
      "-";

    export const value = ({ valueQuantity, component }: Observation) =>
      Quantity.toString(
        valueQuantity || component?.map(({ valueQuantity }) => valueQuantity)
      );
  }

  export module Chart {
    export const isChartable = ({
      code,
      valueQuantity,
      effectiveDateTime,
    }: Observation) => code?.text && valueQuantity && effectiveDateTime;

    const round2 = (value: number) => Math.round(value * 100) / 100;
    export const asChartable = ({
      code,
      valueQuantity: { unit, value },
      effectiveDateTime,
    }: Observation): Chartable => ({
      name: `${code.text} [${unit}]`,
      value: round2(value),
      time: Date.parse(effectiveDateTime),
    });

    export const toSeries = (observations: Observation[]): Series[] =>
      Object.entries(
        Chartable.byName(observations.filter(isChartable).map(asChartable))
      ).map(Chartable.toSeries);
  }
}
