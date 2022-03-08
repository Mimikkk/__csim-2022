import { Component, Show } from "solid-js";
import { useTomography } from "@/components/Tomography/context";

export const TomographyImage: Component = () => {
  const { image } = useTomography();

  return (
    <Show when={image()} fallback="Wybierz zdjęcie...">
      <img
        class="max-h-[800px]"
        src={`/tomograph/photos/${image()}`}
        alt="Tomography image"
        onload={(event) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            console.log({ x: reader.result });
          };

          console.log({ event, c: event.currentTarget });
        }}
      />
    </Show>
  );
};
