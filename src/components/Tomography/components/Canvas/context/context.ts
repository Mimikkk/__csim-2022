import { createContext } from "@/shared/utils";
import { createEffect, createResource, createSignal } from "solid-js";
import { fetchTomographyData } from "@/components/Tomography/components";
import { useTomography } from "@/components/Tomography/context";
import axios from "axios";
import { useControls } from "@/components/Tomography/components/Controls/context";

export const [useCanvas, CanvasProvider] = createContext("Canvas", () => {
  const { image } = useTomography();
  const { angle, useFilter, detectors, scans } = useControls();
  const [imagedata] = createResource(image, fetchTomographyData);
  const [canvas, setCanvas] = createSignal<HTMLCanvasElement>(null);
  const [rmse, setRmse] = createSignal(0);

  createEffect(async () => {
    if (!canvas() || !imagedata()) return;

    canvas().getContext("2d").putImageData(imagedata(), 0, 0);
    canvas().toDataURL();

    const image = new Image();

    const {
      data: { rawImage, rsme },
    } = await axios.post("http://localhost:3001/api/tomography/process", {
      raw_image: canvas().toDataURL(),
      useFilter,
      detectors,
      angle,
      scans,
    });

    setRmse(rsme);
    image.src = rawImage;
    await image.decode();

    canvas().getContext("2d").drawImage(image, 0, 0);
  });

  createEffect(() => {
    if (!canvas() || !imagedata()) return;
    const context = canvas().getContext("2d");
    context.putImageData(imagedata(), 0, 0);
  });

  return { rmse, canvas, setCanvas, imagedata } as const;
});
