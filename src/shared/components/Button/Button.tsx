import { Component } from "solid-js";
import "./Button.scss";

interface Props {
  onClick: () => void;
}

const createRipple = (
  { clientX, clientY }: MouseEvent,
  button: HTMLElement
) => {
  let [x, y] = [clientX - button.offsetLeft, clientY - button.offsetTop];
  let ripple = document.createElement("span");
  ripple.style.top = `${y}px`;
  ripple.style.left = `${x}px`;
  ripple.className = "ripple";

  button.append(ripple);
  setTimeout(() => ripple.remove(), 1000);
};

export const Button: Component<Props> = ({ onClick, children }) => {
  let button: HTMLButtonElement = null;

  return (
    <button
      class="Button"
      ref={button}
      onClick={(event) => {
        createRipple(event, button);
        onClick();
      }}>
      {children}
    </button>
  );
};
