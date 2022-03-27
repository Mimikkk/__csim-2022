import { createEffect, createSignal, For } from "solid-js";
import "./Select.scss";
import { Nullable } from "@/shared/types";
import { Show } from "solid-js";

export interface Option<T = string> {
  label: string;
  value: T;
}

interface Props<T> {
  label?: string;
  placeholder?: string;
  nooptions?: string;
  options: Option<T>[];
  value?: Nullable<T>;
  defaultValue?: Nullable<T>;
  onChange?: (value: Nullable<T>) => void;
}

export const Select = <T,>({
  value,
  label,
  options,
  onChange,
  nooptions = "Brak opcji",
  placeholder,
  defaultValue,
}: Props<T>) => {
  const [current, setCurrent] = createSignal<Nullable<T>>(defaultValue || null);

  createEffect(() => {
    if (value) setCurrent(() => value);
  });

  return (
    <label>
      <fieldset class="select-fieldset">
        <legend>{label}</legend>
        <select
          onChange={({ currentTarget: { value } }) => {
            setCurrent(value as any);
            onChange?.(value as any);
          }}>
          <Show when={placeholder && options.length > 0}>
            <option value={null} disabled selected={current() === null}>
              {placeholder}
            </option>
          </Show>
          <For
            each={options}
            fallback={
              <option disabled selected>
                {nooptions}
              </option>
            }>
            {({ label, value }) => (
              <option value={value as any} selected={value === current()}>
                {label}
              </option>
            )}
          </For>
        </select>
      </fieldset>
    </label>
  );
};
