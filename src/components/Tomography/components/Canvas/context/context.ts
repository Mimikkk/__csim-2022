import { createContext } from "@/shared/utils";
import { createEffect, createResource, createSignal } from "solid-js";
import { fetchTomographyData } from "@/components/Tomography/components";
import { useTomography } from "@/components/Tomography/context";
import { useControls } from "@/components/Tomography/components/Controls/context";
import { tomographyService } from "@/components/Tomography/service";

export const [useCanvas, CanvasProvider] = createContext("Canvas", () => {
  const { image } = useTomography();
  const { angle, useFilter, detectors, scans } = useControls();
  const [imagedata] = createResource(image, fetchTomographyData);
  const [canvas, setCanvas] = createSignal<HTMLCanvasElement>(null);
  const [rmse, setRmse] = createSignal(0);

  createEffect(async () => {
    if (!canvas() || !imagedata()) return;
    const context = canvas().getContext("2d");

    context.putImageData(imagedata(), 0, 0);

    const { imagedata: img, rmse } = await tomographyService.process({
      angle: angle(),
      useFilter: useFilter(),
      scans: scans(),
      detectors: detectors(),
      encodedImage: canvas().toDataURL(),
    });

    setRmse(rmse);
    context.putImageData(img, 0, 0);
  });

  return { rmse, canvas, setCanvas, imagedata } as const;
});
