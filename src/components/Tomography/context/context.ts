import { createContext } from "@/shared/utils";
import { createEffect, createSignal } from "solid-js";

export const [useTomography, TomographyProvider] = createContext(
  "Tomography",
  () => {
    const [image, setImage] = createSignal("CT_ScoutView.jpg");

    return { image, setImage } as const;
  }
);
