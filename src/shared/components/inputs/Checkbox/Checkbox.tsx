import "./Checkbox.scss";
import { Component } from "solid-js";

interface Props {
  label?: string;
  default?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox: Component<Props> = ({
  label,
  onChange,
  default: defaultValue = false,
}) => (
  <div class="checkbox-input">
    <label for={label}>{label}:</label>
    <input
      id={label}
      checked={defaultValue}
      type="checkbox"
      onChange={(event) => onChange(event.currentTarget.checked)}
      title={label}
    />
  </div>
);
