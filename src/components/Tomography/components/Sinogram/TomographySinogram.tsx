import { useTomography } from "@/components/Tomography/context";
import { Component, Show } from "solid-js";
import { OutlineBox } from "@/shared/components";

export const TomographySinogram: Component = () => {
  const { imagepath, processed, setSinogram } = useTomography();

  return (
    <Show when={imagepath()} fallback="Wybierz zdjęcie...">
      <Show when={!processed.loading} fallback="Ładowanie...">
        <Show when={processed().isOk} fallback="Wykonaj sinogram">
          <OutlineBox label="Wynik">
            <canvas class="max-h-[350px] rounded-md" ref={setSinogram} />
          </OutlineBox>
          <OutlineBox label="Proces">
            <img
              src={processed().sinogramAnimation}
              alt="animacja konstrukcji sinogramu"
            />
          </OutlineBox>
        </Show>
      </Show>
    </Show>
  );
};
