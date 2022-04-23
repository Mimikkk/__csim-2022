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
  const [tree, treeStatus, createTree] = createTracked({
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
    tree,
    treeStatus,
    traditional,
    traditionalStatus,
    cnn,
    cnnStatus,
    createTraditional,
    createTree,
    createCnn,
  } as const;
});
