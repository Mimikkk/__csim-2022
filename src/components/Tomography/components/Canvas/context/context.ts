import { createContext } from "@/shared/utils";

export const [useCanvas, CanvasProvider] = createContext("Canvas", () => {
  return {} as const;
});
