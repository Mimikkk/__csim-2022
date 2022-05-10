import { Component } from "solid-js";
import cx from "classnames";
import { Tile } from "@/shared/components/Tile";

interface Props {
  title: string;
  reason: string;
  class?: string;
}

export const CardEmptyList: Component<Props> = (props) => (
  <Tile title={props.title} class={cx(props.class, "min-h-[200px]")}>
    {props.reason}
  </Tile>
);
