import { TomographSelect } from "./Select";
import { Range, Checkbox, OutlineBox } from "@/shared/components";
import { useTomography } from "@/components/Tomography/context";
import { useControls } from "./context";

export const TomographyInfo = () => {
  const { rmse } = useTomography();

  return (
    <OutlineBox class="flex-col">
      <TomographSelect />
      <p>Wysokość: {"placeholder"}</p>
      <p>Szerokość: {"placeholder"}</p>
      <p>RMSE: {rmse}</p>
    </OutlineBox>
  );
};

export const TomographyParameters = () => {
  const { setAngle, setDetectors, setScans, setUseFilter } = useControls();
  const { imagepath } = useTomography();

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
          onChange={setAngle}
        />
        <Checkbox default={false} label="Filtrowanie" onChange={setUseFilter} />
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
