import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [spread, setSpread] = createSignal(135);
  const [detectors, setDetectors] = createSignal(180);
  const [scans, setScans] = createSignal(270);
  const [useFilter, setUseFilter] = createSignal(true);

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
