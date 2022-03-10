import { path, pipe } from "rambda";
import { For } from "solid-js";
import "./Select.scss";

export interface Option<T = string> {
  label: string;
  value: T;
}

interface Props<T> {
  label?: string;
  default?: Option<T>;
  options: Option<T>[];
  value?: T;
  onChange?: (value: T) => void;
}

export const Select = <T,>({
  label,
  options,
  onChange,
  value: defaultValue,
  default: defaultOption,
}: Props<T>) => (
  <label>
    <fieldset class="select-fieldset">
      <legend>{label}</legend>
      <select onChange={pipe(path("currentTarget.value"), onChange)}>
        <For each={[defaultOption, ...options]}>
          {({ label, value }) => (
            <option value={value as any} selected={value === defaultValue}>
              {label}
            </option>
          )}
        </For>
      </select>
    </fieldset>
  </label>
);
