import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";
import { Nullable } from "@/shared/types";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [original, setOriginal] = createSignal<Nullable<string>>(null);

  return { original, setOriginal } as const;
});
