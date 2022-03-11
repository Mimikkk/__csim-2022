import { Component } from "solid-js";
import "./OutlineBox.scss";
import cx from "classnames";
import { Show } from "solid-js";

interface Props {
  class?: string;
  centered?: boolean;
  label?: string;
}
export const OutlineBox: Component<Props> = ({
  children,
  centered = false,
  label,
  class: classname,
}) => {
  return (
    <fieldset
      class={cx("outline-box", { centered, label: Boolean(label) }, classname)}>
      <Show when={label}>
        <legend>{label}</legend>
      </Show>
      {children}
    </fieldset>
  );
};
