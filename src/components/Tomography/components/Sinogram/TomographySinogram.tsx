import { useTomography } from "@/components/Tomography/context";
import { Component, Show } from "solid-js";

export const TomographySinogram: Component = () => {
  const { imagepath, processed, setSinogram } = useTomography();

  return (
    <Show when={imagepath()} fallback="Wybierz zdjęcie...">
      <Show when={!processed.loading} fallback="Ładowanie...">
        <canvas class="max-h-[350px] rounded-md" ref={setSinogram} />
      </Show>
    </Show>
  );
};
