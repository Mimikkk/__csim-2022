import { Component } from "solid-js";
import "./Button.scss";
import cx from "classnames";

interface Props {
  class?: string;
  onClick?: () => void;
  onDrop?: (file: File) => void;
  disabled?: boolean;
}

const createRipple = (
  { clientX, clientY }: MouseEvent,
  button: HTMLElement,
  color?: "white" | "green" | "red"
) => {
  let [x, y] = [clientX - button.offsetLeft, clientY - button.offsetTop];
  let ripple = document.createElement("span");
  ripple.style.top = `${y}px`;
  ripple.style.left = `${x}px`;
  ripple.className = cx("ripple", color && `ripple--${color}`);

  button.append(ripple);
  setTimeout(() => ripple.remove(), 1000);
};

export const Button: Component<Props> = (props) => {
  let button: HTMLButtonElement = null;

  return (
    <button
      class={cx("Button", props.class, { disabled: props.disabled })}
      ref={button}
      disabled={props.disabled}
      ondragover={(event) => {
        if (!props.onDrop) return;
        event.preventDefault();
        createRipple(event, button);
      }}
      ondrop={(event) => {
        if (!props.onDrop) return;
        event.preventDefault();
        createRipple(event, button, "green");
        const file = event.dataTransfer.files[0];
        if (!file) return createRipple(event, button, "red");
        createRipple(event, button, "green");
        props.onDrop(file);
      }}
      onClick={(event) => {
        if (!props.onClick) return;
        createRipple(event, button);
        props.onClick?.();
      }}>
      {props.children}
    </button>
  );
};
