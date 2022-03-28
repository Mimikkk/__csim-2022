import "./Spinner.scss";
import { Component } from "solid-js";
import cx from "classnames";

interface Props {
  class?: string;
}

export const Spinner: Component<Props> = (props) => (
  <div class={cx(props.class, "spinner")} />
);
