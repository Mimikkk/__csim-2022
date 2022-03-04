import { Component } from "solid-js";
import { path, pipe } from "rambda";
import SVGInject from "@iconfu/svg-inject";
import cx from "classnames";
import "./LinkIcon.scss";

interface Props {
  link: string;
  icon: "github" | "discord";
  class?: string;
}

export const LinkIcon: Component<Props> = ({ link, icon, ...props }) => (
  <div class={props.class}>
    <a href={link}>
      <img
        {...props}
        class={cx(props.class, "link-icon")}
        src={`/icons/links/${icon}.svg`}
        alt={`${link} logo link`}
        onload={pipe(path("target"), SVGInject)}
      />
    </a>
  </div>
);
