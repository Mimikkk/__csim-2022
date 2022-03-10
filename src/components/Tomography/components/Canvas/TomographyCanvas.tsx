import { useTomography } from "@/components/Tomography/context";
import { Component, createEffect, createResource, on, Show } from "solid-js";
import { fetchImageDataFromSource } from "@/shared/utils/canvas";
import "./TomographyCanvas.scss";

export const fetchTomographyData = (imagepath: string) =>
  fetchImageDataFromSource(`tomograph/photos/${imagepath}`);

export const TomographyCanvas: Component = () => {
  const { image } = useTomography();
  const [imagedata] = createResource(image, fetchTomographyData);
  let canvas: HTMLCanvasElement = null;

  createEffect(() => {
    if (imagedata()) {
      canvas.getContext("2d").putImageData(imagedata(), 0, 0);
    }
  });

  return (
    <Show when={image()} fallback="Wybierz zdjęcie...">
      <Show when={imagedata()} fallback="Ładowanie zdjęcia...">
        <canvas
          class="tomography-canvas"
          ref={canvas}
          width={imagedata().width}
          height={imagedata().height}
        />
      </Show>
    </Show>
  );
};
