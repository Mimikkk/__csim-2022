import { useTomography } from "@/components/Tomography/context";
import { Component, Show } from "solid-js";
import { OutlineBox } from "@/shared/components";

export const TomographyReconstruction: Component = () => {
  const { imagepath, processed, setReconstruction } = useTomography();

  return (
    <Show when={imagepath()} fallback="Wybierz zdjęcie...">
      <Show when={!processed.loading} fallback="Ładowanie...">
        <OutlineBox label="Wynik">
          <canvas class="max-h-[800px]" ref={setReconstruction} />
        </OutlineBox>
        <OutlineBox label="Proces">
          <img
            src={processed().reconstruction_animation}
            alt="animacja rekonstrukcji sinogramu"
          />
        </OutlineBox>
      </Show>
    </Show>
  );
};
