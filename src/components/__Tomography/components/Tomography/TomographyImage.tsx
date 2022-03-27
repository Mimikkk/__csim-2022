import { Component, Show } from "solid-js";
import { useTomography } from "@/components/__Tomography/context";

export const TomographyImage: Component = () => {
  const { imagepath } = useTomography();

  return (
    <Show when={imagepath()} fallback="Wybierz zdjęcie...">
      <img
        class="max-h-[350px] rounded-md"
        src={imagepath()}
        alt="Tomography image"
      />
    </Show>
  );
};
