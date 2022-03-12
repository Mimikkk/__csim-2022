import { createEffect, createResource, createSignal } from "solid-js";
import { createContext, fetchImageBase64FromSource } from "@/shared/utils";
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
    const [imagepath, setImagepath] = createSignal("");
    const [sinogram, setSinogram] = createSignal<HTMLCanvasElement>(null);
    const [reconstruction, setReconstruction] =
      createSignal<HTMLCanvasElement>(null);

    const { detectors, angle, scans, useFilter } = useControls();
    const [processed] = createResource(
      imagepath,
      async () =>
        await tomographyService.process({
          encodedImage: await fetchImageBase64FromSource(imagepath()),
          detectors: detectors(),
          angle: angle(),
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
      processed,
      imagepath,
      setImagepath,
      setSinogram,
      setReconstruction,
    } as const;
  }
);
