import { Component } from "solid-js";
import cx from "classnames";

interface Props {
  title?: string;
  class?: string;
}
export const Tile: Component<Props> = (props) => (
  <fieldset
    class={cx(
      { "-mt-2": !!props.title },
      props.class,
      "p-2 flex items-center justify-center bg-gray-800 border-t rounded-md animated w-full"
    )}>
    <legend class="z-50">
      <span>{props.title}</span>
    </legend>
    {props.children}
  </fieldset>
);
