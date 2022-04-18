import { LoadButton, OutlineBox } from "@/shared/components";
import { EyeSelect } from "@/components/Eyes/components";
import "./Eyes.scss";
import { useControls, ControlsProvider } from "./context";
import { Show } from "solid-js";
import { Status } from "@/shared/types";

export const Content = () => {
  const { original } = useControls();

  return (
    <fieldset class="eye">
      <div>
        <EyeSelect />
        <OutlineBox class="flex flex-col gap gap-2">
          <LoadButton onClick={() => {}} class="w-full" status={Status.Success}>
            Użyj sieci neuronowej
          </LoadButton>
          <LoadButton onClick={() => {}} class="w-full" status={Status.Success}>
            Użyj wycinków kNN
          </LoadButton>
          <LoadButton onClick={() => {}} class="w-full" status={Status.Success}>
            Użyj technik klasycznych
          </LoadButton>
        </OutlineBox>
      </div>
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
        <OutlineBox label="Wycinki kNN" centered>
          Wycinki kNN
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
