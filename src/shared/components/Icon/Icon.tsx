import { path, pipe } from "rambda";
import SVGInject from "@iconfu/svg-inject";
import { Component } from "solid-js";
import { AvailableIcon } from "./available-icons";

import { ComponentProps } from "solid-js";

interface Props extends ComponentProps<"svg"> {
  icon: AvailableIcon;
  class?: string;
}

export const Icon: Component<Props> = ({ icon, ...props }) => (
  <div onClick={props.onClick as any} class={props.class}>
    <img
      {...(props as any)}
      src={`/icons/game/${icon}.svg`}
      alt={`${icon} icon`}
      onload={pipe(path("target"), SVGInject)}
    />
  </div>
);
