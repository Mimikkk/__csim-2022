import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";
import { Nullable } from "@/shared/types";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [detectors, setDetectors] = createSignal(30);
  const [scans, setScans] = createSignal(30);
  const [spread, setSpread] = createSignal(15);

  const [original, setOriginal] = createSignal<Nullable<string>>(null);
  const [width, setWidth] = createSignal<Nullable<number>>(null);
  const [height, setHeight] = createSignal<Nullable<number>>(null);

  const [name, setName] = createSignal<Nullable<string>>(null);
  const [id, setId] = createSignal<Nullable<string>>(null);
  const [comments, setComments] = createSignal<Nullable<string>>(null);

  const [sinogram, setSinogram] = createSignal<Nullable<string>>(null);
  const [reconstruction, setReconstruction] =
    createSignal<Nullable<string>>(null);
  const [rmse, setRmse] = createSignal<Nullable<number>>(null);
  const [animation, setAnimation] = createSignal<Nullable<string>>(null);

  return {
    spread,
    detectors,
    scans,
    original,
    width,
    height,
    name,
    id,
    comments,
    sinogram,
    reconstruction,
    rmse,
    animation,
    setSpread,
    setDetectors,
    setScans,
    setOriginal,
    setWidth,
    setHeight,
    setName,
    setId,
    setComments,
    setSinogram,
    setReconstruction,
    setRmse,
    setAnimation,
  } as const;
});
