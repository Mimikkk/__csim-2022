import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";
import { Nullable } from "@/shared/types";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [detectors, setDetectors] = createSignal(90);
  const [scans, setScans] = createSignal(90);
  const [spread, setSpread] = createSignal(45);
  const [useFilter, setUseFilter] = createSignal(false);

  const [original, setOriginal] = createSignal<Nullable<string>>(null);
  const [width, setWidth] = createSignal<Nullable<number>>(null);
  const [height, setHeight] = createSignal<Nullable<number>>(null);

  const [name, setName] = createSignal<Nullable<string>>(null);
  const [id, setId] = createSignal<Nullable<string>>(null);
  const [comments, setComments] = createSignal<Nullable<string>>(null);

  return {
    spread,
    detectors,
    scans,
    useFilter,
    original,
    width,
    height,
    name,
    id,
    comments,
    setSpread,
    setDetectors,
    setScans,
    setUseFilter,
    setOriginal,
    setWidth,
    setHeight,
    setName,
    setId,
    setComments,
  } as const;
});
