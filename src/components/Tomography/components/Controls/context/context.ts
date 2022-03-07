import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [angle, setAngle] = createSignal(0);
  const [detectors, setDetectors] = createSignal(0);
  const [scans, setScans] = createSignal(0);
  const [shouldFilter, setShouldFilter] = createSignal(false);

  return {
    angle,
    detectors,
    scans,
    shouldFilter,
    setAngle,
    setDetectors,
    setScans,
    setShouldFilter,
  } as const;
});
