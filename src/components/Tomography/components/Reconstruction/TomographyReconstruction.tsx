import { useTomography } from "@/components/Tomography/context";
import { Component, Show } from "solid-js";

export const TomographyReconstruction: Component = () => {
  const { imagepath, processed, setReconstruction } = useTomography();

  return (
    <Show when={imagepath()} fallback="Wybierz zdjęcie...">
      <Show when={!processed.loading} fallback="Ładowanie...">
        <canvas class="max-h-[800px]" ref={setReconstruction} />
      </Show>
    </Show>
  );
};
