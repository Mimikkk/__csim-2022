import { Component } from "solid-js";
import "./OutlineBox.scss";
import cx from "classnames";
import { Show } from "solid-js";

interface Props {
  class?: string;
  centered?: boolean;
  label?: string;
}
export const OutlineBox: Component<Props> = (props) => (
  <fieldset
    class={cx(
      "outline-box",
      { centered: props.centered, label: Boolean(props.label) },
      props.class
    )}>
    <Show when={props.label}>
      <legend>{props.label}</legend>
    </Show>
    {props.children}
  </fieldset>
);
