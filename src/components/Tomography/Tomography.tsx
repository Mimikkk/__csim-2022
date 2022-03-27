import { createContext } from "@/shared/utils";
export const [useContext, ContextProvider] = createContext("Tomography", () => {
  return {};
});
import { ControlsProvider, useControls } from "./components/Controls/context";
import { Controls } from "@/components/Tomography/components";
import { OutlineBox } from "@/shared/components";
import { Show } from "solid-js";

const Content = () => {
  const { original } = useControls();
  return (
    <>
      <Controls />
      <OutlineBox label="Obraz" centered>
        <Show when={original} fallback="Wybierz obraz...">
          <img alt="original image" src={original} />
        </Show>
      </OutlineBox>
    </>
  );
};

export const Tomography = () => (
  <ControlsProvider>
    <Content />
  </ControlsProvider>
);
