import { createSignal } from "solid-js";
import { not, pipe } from "rambda";

export const createToggle = () => {
  const [get, set] = createSignal(false);
  return [get, pipe(get, not, set)] as const;
};
