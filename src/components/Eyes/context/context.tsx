import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";
import { Nullable } from "@/shared/types";
import { createTracked } from "@/shared/hooks";
import { timeout } from "@/shared/utils/timeout";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [original, setOriginal] = createSignal<Nullable<string>>(null);
  const [veins, setVeins] = createSignal<Nullable<string>>(null);
  const [traditional, traditionalStatus, createTraditional] = createTracked({
    fn: async () => {
      await timeout(500);
      return original();
    },
  });
  const [knn, knnStatus, createKnn] = createTracked({
    fn: async () => {
      await timeout(500);
      return original();
    },
  });
  const [cnn, cnnStatus, createCnn] = createTracked({
    fn: async () => {
      await timeout(500);
      return original();
    },
  });

  return {
    original,
    setOriginal,
    veins,
    setVeins,
    knn,
    knnStatus,
    traditional,
    traditionalStatus,
    cnn,
    cnnStatus,
    createTraditional,
    createKnn,
    createCnn,
  } as const;
});
