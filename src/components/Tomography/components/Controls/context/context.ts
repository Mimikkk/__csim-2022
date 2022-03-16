import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [spread, setSpread] = createSignal(25);
  const [detectors, setDetectors] = createSignal(25);
  const [scans, setScans] = createSignal(15);
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
