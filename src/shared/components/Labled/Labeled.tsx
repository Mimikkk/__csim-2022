import { Component } from "solid-js";

interface Props {
  label: string;
  value: string;
}

export const Labeled: Component<Props> = (props) => (
  <span>
    <span>{props.label}: </span>
    <span class="text-gray-400" title={props.value}>
      {props.value}
    </span>
  </span>
);
