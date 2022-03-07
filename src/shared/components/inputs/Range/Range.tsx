import { Component, createSignal } from "solid-js";
import "./Range.scss";

interface Props {
  label?: string;
  default?: number;
  min: number;
  max: number;
  step: number;
  onChange?: (value: number) => void;
}

export const Range: Component<Props> = ({
  label,
  onChange,
  min,
  max,
  step,
  default: defaultValue,
}) => {
  const [value, setValue] = createSignal(defaultValue || min);

  return (
    <label>
      <fieldset class="range-fieldset">
        <legend>
          {label} - {value() as any}
        </legend>
        {min}
        <input
          type="range"
          step={step}
          min={min}
          max={max}
          value={defaultValue}
          onChange={(event) => {
            onChange(event.currentTarget.value as any);
            setValue(event.currentTarget.value as any);
          }}
        />
        {max}
      </fieldset>
    </label>
  );
};
