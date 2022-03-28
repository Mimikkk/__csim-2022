import { Component, createSignal } from "solid-js";
import "./Range.scss";

interface Props {
  label?: string;
  value?: number;
  min: number;
  max: number;
  step: number;
  onChange?: (value: number) => void;
}

export const Range: Component<Props> = (props) => (
  <label>
    <fieldset class="range-fieldset">
      <legend>
        {props.label} - {props.value}
      </legend>
      {props.min}
      <input
        type="range"
        step={props.step}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={(event) => {
          props?.onChange(event.currentTarget.value as any);
        }}
      />
      {props.max}
    </fieldset>
  </label>
);
