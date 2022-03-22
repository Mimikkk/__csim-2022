import { createEffect, createResource, createSignal } from "solid-js";
import {
  createContext,
  fetchImageBase64FromSource,
  fetchImageDataFromSource,
} from "@/shared/utils";
import {
  TomographyParsedResponse,
  tomographyService,
} from "@/components/Tomography/service";
import { useControls } from "@/components/Tomography/components/Controls/context";

const options = {
  initialValue: {
    reconstruction: new ImageData(1, 1),
    sinogram: new ImageData(1, 1),
    rmse: 0,
    rmses: [0],
    reconstruction_animation: "",
    sinogram_animation: "",
  } as TomographyParsedResponse,
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
      "tomograph/photos/Kropka.jpg"
    );
    const [original] = createResource(imagepath, fetchImageDataFromSource);
    const [sinogram, setSinogram] = createSignal<HTMLCanvasElement>(null);
    const [reconstruction, setReconstruction] =
      createSignal<HTMLCanvasElement>(null);
    const [canRun, setCanRun] = createSignal(false);

    const { detectors, spread, scans, useFilter } = useControls();
    const [processed, { refetch }] = createResource(async () => {
      if (!canRun()) return options.initialValue;

      return await tomographyService.process({
        encodedImage: await fetchImageBase64FromSource(imagepath()),
        detectors: detectors(),
        spread: spread(),
        scans: scans(),
        useFilter: useFilter(),
      });
    }, options);

    createEffect(() => {
      if (processed.loading) return;
      putImageOnContext(sinogram(), processed().sinogram);
      putImageOnContext(reconstruction(), processed().reconstruction);
    });

    return {
      original,
      processed,
      imagepath,
      refetch: () => {
        setCanRun(true);
        refetch();
      },
      setImagepath,
      setSinogram,
      setReconstruction,
    } as const;
  }
);
