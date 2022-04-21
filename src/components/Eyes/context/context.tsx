import { createContext } from "@/shared/utils";
import { createSignal } from "solid-js";
import { Nullable } from "@/shared/types";
import { createTracked } from "@/shared/hooks";
import {
  cnnService,
  treeService,
  traditionalService,
} from "@/components/Eyes/services";

export const [useControls, ControlsProvider] = createContext("Controls", () => {
  const [original, setOriginal] = createSignal<Nullable<string>>(null);
  const [veins, setVeins] = createSignal<Nullable<string>>(null);
  const [traditional, traditionalStatus, createTraditional] = createTracked({
    fn: () => traditionalService.process(original()),
  });
  const [knn, knnStatus, createKnn] = createTracked({
    fn: () => treeService.process(original()),
  });
  const [cnn, cnnStatus, createCnn] = createTracked({
    fn: () => cnnService.process(original()),
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
