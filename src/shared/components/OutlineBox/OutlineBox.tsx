import { Component } from "solid-js";
import "./OutlineBox.scss";
import cx from "classnames";

interface Props {
  class?: string;
  centered?: boolean;
}
export const OutlineBox: Component<Props> = ({
  children,
  centered = false,
  class: classname,
}) => <div class={cx("outline-box", { centered }, classname)}>{children}</div>;
