import { createContext } from "@/shared/utils";
import { createEffect, createResource, createSignal } from "solid-js";
import { fetchTomographyData } from "@/components/Tomography/components";
import { useTomography } from "@/components/Tomography/context";

export const [useCanvas, CanvasProvider] = createContext("Canvas", () => {
  const { image } = useTomography();
  const [imagedata] = createResource(image, fetchTomographyData);
  const [canvas, setCanvas] = createSignal<HTMLCanvasElement>(null);

  createEffect(() => {
    if (!canvas() || !imagedata()) return;
    canvas().getContext("2d").putImageData(imagedata(), 0, 0);
  });

  return { canvas, setCanvas, imagedata } as const;
});
