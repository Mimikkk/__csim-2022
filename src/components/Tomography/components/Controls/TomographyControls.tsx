import { TomographSelect } from "./Select";
import { Range, Checkbox, OutlineBox } from "@/shared/components";
import { useTomography } from "@/components/Tomography/context";
import { useControls } from "./context";
import { useCanvas } from "@/components/Tomography/components/Canvas/context";

export const TomographyInfo = () => {
  const { width, height } = useTomography();
  const { rmse } = useCanvas();

  return (
    <OutlineBox class="flex-col">
      <p>Wysokość: {height}</p>
      <p>Szerokość: {width}</p>
      <p>RMSE: {rmse}</p>
    </OutlineBox>
  );
};

export const TomographyParameters = () => {
  const { setAngle, setDetectors, setScans, setUseFilter } = useControls();
  const { image } = useTomography();

  return (
    <OutlineBox>
      <fieldset disabled={!image()} class="flex flex-col gap-y-2">
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
    <TomographSelect />
    <TomographyInfo />
    <TomographyParameters />
  </div>
);
