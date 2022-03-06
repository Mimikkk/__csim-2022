import { createContext } from "@/shared/utils";
import { createEffect, createSignal } from "solid-js";

export const [useTomography, TomographyProvider] = createContext(
  "Tomography",
  () => {
    const [image, setImage] = createSignal("scout.jpg");

    return { image, setImage } as const;
  }
);
