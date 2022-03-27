import "./Textfield.scss";

interface Props<T extends string | number> {
  label?: string;
  placeholder?: string;
  value?: T;
  onChange?: (value: T) => void;
}

export const Textfield = <T extends string | number>(props: Props<T>) => (
  <label>
    <fieldset class="select-fieldset">
      <legend>{props.label}</legend>
      <input
        onChange={({ currentTarget: { value } }) => {
          props.onChange(value as T);
        }}
        placeholder={props.placeholder}
        value={props.value}
      />
    </fieldset>
  </label>
);
