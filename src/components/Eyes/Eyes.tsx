import { OutlineBox } from "@/shared/components";
import { EyeSelect } from "@/components/Eyes/components";
import "./Eyes.scss";
import { useControls, ControlsProvider } from "./context";
import { Show } from "solid-js";

export const Content = () => {
  const { original } = useControls();

  return (
    <fieldset class="eye">
      <EyeSelect />
      <OutlineBox label="Obraz oryginalny" centered>
        <Show when={original()} fallback="Wybierz zdjęcie...">
          <img
            class="max-h-[350px] flex-grow rendering-pixelated"
            alt="original image to process"
            src={original()}
          />
        </Show>
      </OutlineBox>
      <OutlineBox label="Wynik" class="grid gap-2">
        <OutlineBox label="Tradycyjne" centered>
          Tradycyjne
        </OutlineBox>
        <OutlineBox label="Sieć neuronowa" centered>
          Sieć
        </OutlineBox>
      </OutlineBox>
    </fieldset>
  );
};

export const Eyes = () => (
  <ControlsProvider>
    <Content />
  </ControlsProvider>
);
