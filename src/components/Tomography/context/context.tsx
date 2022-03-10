import { createEffect, createSignal } from "solid-js";
import { createContext } from "@/shared/utils";

export const [useTomography, TomographyProvider] = createContext(
  "Tomography",
  () => {
    const [image, setImage] = createSignal("");
    const [width, setWidth] = createSignal(0);
    const [height, setHeight] = createSignal(0);

    createEffect(async () => {
      const img = new Image();
      img.src = `/tomograph/photos/${image()}`;
      try {
        await img.decode();

        setWidth(img.naturalWidth);
        setHeight(img.naturalHeight);
      } catch {
        setWidth(0);
        setHeight(0);
      }
    });

    return {
      image,
      setImage,
      width,
      height,
    } as const;
  }
);
