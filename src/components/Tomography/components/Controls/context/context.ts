import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";
import { Nullable } from "@/shared/types";
import { createTracked } from "@/shared/hooks";
import {
  reconstructionService,
  sinogramService,
} from "@/components/Tomography/services";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [detectors, setDetectors] = createSignal(180);
  const [scans, setScans] = createSignal(180);
  const [spread, setSpread] = createSignal(180);
  const [useFilter, setUseFilter] = createSignal(false);

  const [original, setOriginal] = createSignal<Nullable<string>>(null);
  const [width, setWidth] = createSignal<Nullable<number>>(null);
  const [height, setHeight] = createSignal<Nullable<number>>(null);

  const [name, setName] = createSignal<Nullable<string>>(null);
  const [id, setId] = createSignal<Nullable<string>>(null);
  const [comments, setComments] = createSignal<Nullable<string>>(null);

  const [sinogram, sinogramStatus, createSinogram] = createTracked({
    fn: () =>
      sinogramService.create({
        original: original(),
        scans: scans(),
        spread: spread(),
        detectors: detectors(),
      }),
  });

  const [reconstruction, reconstructionStatus, recreateImage] = createTracked({
    fn: () =>
      reconstructionService.reconstruct({
        original: original(),
        sinogram: sinogram(),
        spread: spread(),
        detectors: detectors(),
        scans: scans(),
        use_filter: useFilter(),
      }),
  });

  const [filter, setFilter] = createSignal<Nullable<string>>(null);

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
    sinogram,
    reconstruction,
    filter,
    setSpread,
    setDetectors,
    setScans,
    setOriginal,
    setWidth,
    setHeight,
    setName,
    setId,
    setComments,
    sinogramStatus,
    createSinogram,
    reconstructionStatus,
    recreateImage,
    setUseFilter,
    setFilter,
  } as const;
});
