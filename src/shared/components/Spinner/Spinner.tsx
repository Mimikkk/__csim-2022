import "./Spinner.scss";
import { Component } from "solid-js";
import cx from "classnames";

interface Props {
  class?: string;
  centered?: true;
}

export const Spinner: Component<Props> = (props) => {
  if (props.centered) {
    return (
      <div class="flex justify-center align-middle">
        <Spinner class={props.class} />
      </div>
    );
  }
  return <div class={cx(props.class, "spinner")} />;
};
