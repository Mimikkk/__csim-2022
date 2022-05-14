import { groupBy } from "rambda";

export interface Chartable {
  time: number;
  name: string;
  value: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface Series {
  name: string;
  data: Point[];
}

export module Chartable {
  export const byName = groupBy<Chartable>(({ name }) => name);

  export const toPoint = ({ time: x, value: y }: Chartable): Point => ({
    x,
    y,
  });
  export const toSeries = ([name, values]: [string, Chartable[]]): Series => ({
    name,
    data: values.map(Chartable.toPoint),
  });
}
