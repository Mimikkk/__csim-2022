import { createSignal } from "solid-js";
import { createContext } from "@/shared/utils";

export const [useTomography, TomographyProvider] = createContext(
  "Tomography",
  () => {
    const [image, setImage] = createSignal("CT_ScoutView.jpg");

    return { image, setImage } as const;
  }
);
