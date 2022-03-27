import { createContext } from "@/shared/utils";
export const [useContext, ContextProvider] = createContext("Tomography", () => {
  return {};
});
import { ControlsProvider, useControls } from "./components/Controls/context";
import { Controls } from "@/components/Tomography/components";
import { OutlineBox } from "@/shared/components";
import { Show } from "solid-js";
import "./Tomography.scss";

const Content = () => {
  const { original, sinogram, setWidth, setHeight } = useControls();

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
          class="min-h-[350px] min-w-[350px] flex-grow">
          <Show when={original()} fallback="Wybierz obraz...">
            <Show when={sinogram()} fallback="Wykonaj sinogram...">
              <img
                alt="sinogram image of the original"
                src={sinogram()}
                class="max-h-[350px]"
              />
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
