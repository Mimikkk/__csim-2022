import { TomographSelect } from "./Select";
import {
  Range,
  Checkbox,
  OutlineBox,
  Button,
  Textfield,
} from "@/shared/components";
import { useControls } from "./context";
import { Show } from "solid-js";

const Info = () => {
  const { original, width, height } = useControls();

  return (
    <OutlineBox class="flex-col">
      <TomographSelect />
      <p>
        <strong>Szerokość: </strong>
        <Show when={original()} fallback="Wybierz zdjęcie...">
          <Show when={width()} fallback="Ładowanie...">
            {width}px
          </Show>
        </Show>
      </p>
      <p>
        <strong>Wysokość: </strong>
        <Show when={original()} fallback="Wybierz zdjęcie...">
          <Show when={height()} fallback="Ładowanie...">
            {height}px
          </Show>
        </Show>
      </p>
      <p>
        <strong>RMSE: </strong>
        <Show when={true} fallback="Wykonaj rekonstrukcje...">
          <Show when={true} fallback="Ładowanie...">
            TODO - RMSE
          </Show>
        </Show>
      </p>
    </OutlineBox>
  );
};

const Parameters = () => {
  const { setSpread, setDetectors, setScans, setUseFilter } = useControls();

  return (
    <OutlineBox>
      <fieldset class="flex flex-col gap-y-2">
        <Range
          default={90}
          min={90}
          max={720}
          step={90}
          label="Detekory"
          onChange={setDetectors}
        />
        <Range
          default={90}
          min={90}
          max={720}
          step={90}
          label="Skany"
          onChange={setScans}
        />
        <Range
          default={45}
          min={45}
          max={270}
          step={45}
          label="Rozpiętość"
          onChange={setSpread}
        />
        <Checkbox default={false} label="Filtrowanie" onChange={setUseFilter} />
        <Button
          onClick={() => {
            console.log("Todo: Save parameters");
          }}>
          Wykonaj sinogram
        </Button>
      </fieldset>
    </OutlineBox>
  );
};

const Patient = () => {
  const { setComments, setName, setId, id, name, comments } = useControls();

  return (
    <OutlineBox label="Pacjent" class="flex flex-col gap-2">
      <Textfield
        label="Imię i nazwisko"
        onChange={setName}
        value={name()}
        placeholder="Wprowadź..."
      />
      <Textfield
        label="Identyfikator"
        onChange={setId}
        value={id()}
        placeholder="Wprowadź..."
      />
      <Textfield
        label="Komentarz"
        onChange={setComments}
        value={comments()}
        placeholder="Wprowadź..."
      />
    </OutlineBox>
  );
};

export const Controls = () => (
  <div class="flex flex-col gap-2">
    <Info />
    <Parameters />
    <Patient />
  </div>
);
