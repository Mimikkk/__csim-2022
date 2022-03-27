import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";
import { Nullable } from "@/shared/types";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [detectors, setDetectors] = createSignal(90);
  const [scans, setScans] = createSignal(90);
  const [spread, setSpread] = createSignal(45);
  const [useFilter, setUseFilter] = createSignal(false);
  const [original, setOriginal] = createSignal<Nullable<string>>(null);

  return {
    spread,
    detectors,
    scans,
    useFilter,
    original,
    setSpread,
    setDetectors,
    setScans,
    setUseFilter,
    setOriginal,
  } as const;
});
