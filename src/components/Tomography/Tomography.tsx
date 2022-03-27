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
  const { original, sinogram, setWidth, setSinogram, setHeight } =
    useControls();

  return (
    <>
      <Controls />
      <OutlineBox label="Oryginał" centered class="flex flex-col gap-2">
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
                onClick={async () => {
                  console.log(sinogram());
                  return setSinogram(await sinogramService.filter(sinogram()));
                }}>
                Przefiltruj sinogram
              </Button>
            </Show>
          </Show>
        </OutlineBox>
      </OutlineBox>
      <OutlineBox label="Obraz" centered>
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
    </>
  );
};

export const Tomography = () => (
  <ControlsProvider>
    <fieldset class="tomography">
      <Content />
    </fieldset>
  </ControlsProvider>
);
