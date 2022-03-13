import { createEffect, createResource, createSignal } from "solid-js";
import {
  createContext,
  fetchImageBase64FromSource,
  fetchImageDataFromSource,
} from "@/shared/utils";
import { tomographyService } from "@/components/Tomography/service";
import { useControls } from "@/components/Tomography/components/Controls/context";

const options = {
  initialValue: {
    reconstruction: new ImageData(1, 1),
    sinogram: new ImageData(1, 1),
    rmse: 0,
  },
};

const putImageOnContext = (canvas: HTMLCanvasElement, image: ImageData) => {
  if (!canvas) return;
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext("2d")?.putImageData(image, 0, 0);
};

export const [useTomography, TomographyProvider] = createContext(
  "Tomography",
  () => {
    const [imagepath, setImagepath] = createSignal(
      "tomograph/photos/Kwadraty2.jpg"
    );
    const [original] = createResource(imagepath, fetchImageDataFromSource);

    const [sinogram, setSinogram] = createSignal<HTMLCanvasElement>(null);
    const [reconstruction, setReconstruction] =
      createSignal<HTMLCanvasElement>(null);

    const { detectors, spread, scans, useFilter } = useControls();
    const [processed, { refetch }] = createResource(
      imagepath,
      async () =>
        await tomographyService.process({
          encodedImage: await fetchImageBase64FromSource(imagepath()),
          detectors: detectors(),
          spread: spread(),
          scans: scans(),
          useFilter: useFilter(),
        }),
      options
    );

    createEffect(() => {
      if (processed.loading) return;
      console.log({ processed: processed() });
      putImageOnContext(sinogram(), processed().sinogram);
      putImageOnContext(reconstruction(), processed().reconstruction);
    });

    return {
      original,
      processed,
      imagepath,
      refetch,
      setImagepath,
      setSinogram,
      setReconstruction,
    } as const;
  }
);
