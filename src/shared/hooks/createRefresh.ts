import { createSignal } from "solid-js";

export const createRefresh = (instant?: true) => {
  const [toggled, setToggle] = createSignal(instant || false, {
    equals: () => false,
  });
  const refresh = () => setToggle(() => true);

  return [toggled, refresh] as const;
};
