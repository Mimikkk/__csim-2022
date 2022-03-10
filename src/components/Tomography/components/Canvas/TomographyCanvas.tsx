import { useTomography } from "@/components/Tomography/context";
import { Component, Show } from "solid-js";
import { fetchImageDataFromSource } from "@/shared/utils";
import { useCanvas } from "./context";
import "./TomographyCanvas.scss";

export const fetchTomographyData = (imagepath: string) =>
  fetchImageDataFromSource(`tomograph/photos/${imagepath}`);

export const TomographyCanvas: Component = () => {
  const { image } = useTomography();
  const { setCanvas, imagedata } = useCanvas();

  return (
    <Show when={image()} fallback="Wybierz zdjęcie...">
      <Show when={imagedata()} fallback="Ładowanie zdjęcia...">
        <canvas
          class="tomography-canvas"
          ref={setCanvas}
          width={imagedata().width}
          height={imagedata().height}
        />
      </Show>
    </Show>
  );
};
