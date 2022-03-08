import { TomographSelect } from "./Select";
import { Range, Checkbox, OutlineBox } from "@/shared/components";
import { useTomography } from "@/components/Tomography/context";
import { useControls } from "./context";

export const TomographyInfo = () => (
  <OutlineBox class="flex-col">
    <p>Wysokość:</p>
    <p>Szerokość:</p>
    <p>RSME:</p>
  </OutlineBox>
);

export const TomographyParameters = () => {
  const { setAngle, setDetectors, setScans, setShouldFilter } = useControls();
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
        <Checkbox
          default={false}
          label="Filtrowanie"
          onChange={setShouldFilter}
        />
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
