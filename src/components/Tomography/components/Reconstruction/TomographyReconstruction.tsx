import { useTomography } from "@/components/Tomography/context";
import { Component, Show } from "solid-js";

export const TomographyReconstruction: Component = () => {
  const { imagepath } = useTomography();

  return (
    <Show when={imagepath()} fallback="Wybierz zdjęcie...">
      <Show when={false} fallback="Ładowanie zdjęcia...">
        <canvas class="max-h-[800px]" />
      </Show>
    </Show>
  );
};
