import { createContext } from "@/shared/utils";
import { createStore } from "solid-js/store";

const initial = {
  detectors: 90,
  scans: 90,
  spread: 45,
  useFilter: false,
  original: "",
};
export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [store, setStore] = createStore(initial);
  const setDetectors = (detectors: number) => setStore("detectors", detectors);
  const setScans = (scans: number) => setStore("scans", scans);
  const setSpread = (spread: number) => setStore("spread", spread);
  const setUseFilter = (useFilter: boolean) => setStore("useFilter", useFilter);
  const setOriginal = (original: string) => setStore("original", original);

  return {
    ...store,
    setSpread,
    setDetectors,
    setScans,
    setUseFilter,
    setOriginal,
  } as const;
});
