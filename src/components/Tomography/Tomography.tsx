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
  const { original, setWidth, setHeight } = useControls();

  return (
    <>
      <Controls />
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
