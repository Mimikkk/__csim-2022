import { createEffect, createSignal } from "solid-js";
import { createContext } from "@/shared/utils";

const emptyImage = new ImageData(1, 1);

export const [useTomography, TomographyProvider] = createContext(
  "Tomography",
  () => {
    const [imagepath, setImagepath] = createSignal("");
    const [reconstruction, setReconstruction] = createSignal(emptyImage);
    const [tomography, setTomography] = createSignal(emptyImage);
    const [sinogram, setSinogram] = createSignal(emptyImage);
    const [rmse, setRmse] = createSignal(0);

    return {
      reconstruction,
      sinogram,
      rmse,
      imagepath,
      setImagepath,
    } as const;
  }
);
