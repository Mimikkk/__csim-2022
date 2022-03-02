import { path, pipe } from "rambda";
import { For } from "solid-js";

export interface Option<T = string> {
  label: string;
  value: T;
}

export interface Props<T> {
  label?: string;
  default?: Option<T>;
  options: Option<T>[];
  onChange: (value: T) => void;
}

export const Select = <T,>({
  label,
  options,
  onChange,
  default: defaultOption,
}: Props<T>) => (
  <label>
    {label && <span class="pr-2">{label}</span>}
    <select
      class="w-40 h-8 font-extrabold rounded-md text-opacity-80 bg-blue-300 text-black"
      onChange={pipe(path("currentTarget.value"), onChange)}>
      <For each={[defaultOption, ...options]}>
        {({ label, value }) => <option value={value as any}>{label}</option>}
      </For>
    </select>
  </label>
);
