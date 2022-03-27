import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [detectors, setDetectors] = createSignal(90);
  const [scans, setScans] = createSignal(90);
  const [spread, setSpread] = createSignal(45);
  const [useFilter, setUseFilter] = createSignal(false);

  return {
    spread,
    detectors,
    scans,
    useFilter,
    setSpread,
    setDetectors,
    setScans,
    setUseFilter,
  } as const;
});
