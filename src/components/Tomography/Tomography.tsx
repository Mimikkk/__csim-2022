import { createContext } from "@/shared/utils";
export const [useContext, ContextProvider] = createContext("Tomography", () => {
  return {};
});
import { ControlsProvider, useControls } from "./components/Controls/context";
import { Controls } from "@/components/Tomography/components";
import { Button, OutlineBox } from "@/shared/components";
import { Show } from "solid-js";
import "./Tomography.scss";
import { sinogramService } from "@/components/Tomography/services";

const Content = () => {
  const {
    original,
    sinogram,
    reconstruction,
    animation,
    setWidth,
    setSinogram,
    setHeight,
  } = useControls();

  return (
    <fieldset class="tomography">
      <Controls />
      <div class="flex flex-col gap-2">
        <OutlineBox label="Obraz" centered class="min-h-[350px] min-w-[350px]">
          <Show when={original()} fallback="Wybierz obraz...">
            <img
              alt="original image"
              src={original()}
              onload={({ currentTarget: { naturalHeight, naturalWidth } }) => {
                setWidth(naturalWidth);
                setHeight(naturalHeight);
              }}
              class="max-h-[350px]"
            />
          </Show>
        </OutlineBox>
        <OutlineBox
          centered
          label="Sinogram"
          class="min-h-[350px] min-w-[350px] flex-grow flex flex-col gap-2">
          <Show when={original()} fallback="Wybierz obraz...">
            <Show when={sinogram()} fallback="Wykonaj sinogram...">
              <img
                alt="sinogram image of the original"
                src={sinogram()}
                class="max-h-[350px] flex-grow rendering-pixelated"
              />
              <Button
                onClick={async () =>
                  setSinogram(await sinogramService.filter(sinogram()))
                }>
                Przefiltruj sinogram
              </Button>
            </Show>
          </Show>
        </OutlineBox>
      </div>
      <div class="flex flex-col gap-2">
        <OutlineBox
          centered
          label="Obraz"
          class="min-h-[300px] min-w-[300px] flex-grow">
          <Show when={reconstruction()} fallback="Wykonaj rekonstrukcje...">
            <img
              alt="reconstruction of the original"
              src={reconstruction()}
              class="max-h-[350px]"
            />
          </Show>
        </OutlineBox>
        <OutlineBox
          centered
          label="Animacja"
          class="flex-grow min-h-[300px] min-w-[300px]">
          <Show when={animation()} fallback="Wykonaj rekonstrukcje...">
            <img
              alt="animation of the reconstruction process of the original"
              src={animation()}
              class="max-h-[350px] flex-grow"
            />
          </Show>
        </OutlineBox>
      </div>
    </fieldset>
  );
};

export const Tomography = () => (
  <ControlsProvider>
    <Content />
  </ControlsProvider>
);
