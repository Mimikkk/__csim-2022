import { Component } from "solid-js";
import "./Button.scss";
import cx from "classnames";

interface Props {
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

export const Button: Component<Props> = ({
  onClick,
  disabled,
  onDrop,
  children,
}) => {
  let button: HTMLButtonElement = null;

  return (
    <button
      type="button"
      class="Button"
      ref={button}
      disabled={disabled}
      ondragover={(event) => {
        if (!onDrop) return;
        event.preventDefault();
        createRipple(event, button);
      }}
      ondrop={(event) => {
        if (!onDrop) return;
        event.preventDefault();
        createRipple(event, button, "green");
        const file = event.dataTransfer.files[0];
        if (!file) return createRipple(event, button, "red");
        createRipple(event, button, "green");
        onDrop(file);
      }}
      onClick={(event) => {
        if (!onClick) return;
        createRipple(event, button);
        onClick?.();
      }}>
      {children}
    </button>
  );
};
