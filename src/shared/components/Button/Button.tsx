import { Component, Show } from "solid-js";
import "./Button.scss";
import cx from "classnames";
import { Status } from "@/shared/types";
import { Spinner } from "@/shared/components";

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

interface BaseProps {
  class?: string;
  onClick?: () => void;
  onDrop?: (file: File) => void;
  disabled?: boolean;
}

export const Button: Component<BaseProps> = (props) => {
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

interface LoadProps extends BaseProps {
  status: Status;
  onClick?: () => void;
}

export const LoadButton: Component<LoadProps> = (props) => (
  <Button
    {...props}
    disabled={props.disabled || Status.isLoading(props.status)}>
    <Show
      when={!Status.isLoading(props.status)}
      fallback={<Spinner centered />}>
      {props.children}
    </Show>
  </Button>
);
