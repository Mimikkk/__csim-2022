import { path, pipe } from "rambda";
import "./Textfield.scss";

interface Props<T extends string | number> {
  label?: string;
  placeholder?: string;
  value?: T;
  onChange?: (value: T) => void;
}

export const Textfield = <T extends string | number>({
  label,
  onChange,
  placeholder,
  value: defaultValue,
}: Props<T>) => (
  <label>
    <fieldset class="select-fieldset">
      <legend>{label}</legend>
      <input
        onChange={pipe(path("currentTarget.value"), onChange)}
        placeholder={placeholder}
        value={defaultValue || null}
      />
    </fieldset>
  </label>
);
