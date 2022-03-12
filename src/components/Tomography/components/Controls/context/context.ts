import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [angle, setAngle] = createSignal(45);
  const [detectors, setDetectors] = createSignal(90);
  const [scans, setScans] = createSignal(90);
  const [useFilter, setUseFilter] = createSignal(false);

  return {
    angle,
    detectors,
    scans,
    useFilter,
    setAngle,
    setDetectors,
    setScans,
    setUseFilter,
  } as const;
});
