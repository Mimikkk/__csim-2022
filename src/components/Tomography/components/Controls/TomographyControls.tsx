import { TomographSelect } from "./Select";
import { Range, Checkbox, OutlineBox, Button } from "@/shared/components";
import { useTomography } from "@/components/Tomography/context";
import { useControls } from "./context";
import { Show } from "solid-js";

export const TomographyInfo = () => {
  const { original, processed } = useTomography();

  return (
    <OutlineBox class="flex-col">
      <TomographSelect />
      <p>
        <strong>Szerokość: </strong>
        <Show when={!original.loading} fallback="Ładowanie...">
          {original().width}px
        </Show>
      </p>
      <p>
        <strong>Wysokość: </strong>
        <Show when={!original.loading} fallback="Ładowanie...">
          {original().height}px
        </Show>
      </p>
      <p>
        <strong>RMSE: </strong>
        <Show when={!processed.loading} fallback="Ładowanie...">
          {processed().rmse}
        </Show>
      </p>
    </OutlineBox>
  );
};

export const TomographyParameters = () => {
  const { setSpread, setDetectors, setScans, setUseFilter } = useControls();
  const { imagepath, refetch } = useTomography();

  return (
    <OutlineBox>
      <fieldset disabled={!imagepath()} class="flex flex-col gap-y-2">
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
        <Button onClick={refetch}>Wykonaj sinogram i rekonstrukcje</Button>
      </fieldset>
    </OutlineBox>
  );
};

export const TomographyControls = () => (
  <div>
    <TomographyInfo />
    <TomographyParameters />
  </div>
);
