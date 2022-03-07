import { TomographSelect } from "./Select";
import { Range, Checkbox } from "@/shared/components";
import { useTomography } from "@/components/Tomography/context";
import { useControls } from "./context";

export const TomographyInfo = () => {
  return (
    <>
      <p>Szerokość:</p>
      <p>Wysokość:</p>
      <p>RSME:</p>
    </>
  );
};

export const TomographyParameters = () => {
  const { setAngle, setDetectors, setScans, setShouldFilter } = useControls();
  const { image } = useTomography();

  return (
    <fieldset disabled={!image()} class="flex flex-col gap-y-2">
      <div>
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
      </div>
      <Checkbox
        default={false}
        label="Filtrowanie"
        onChange={setShouldFilter}
      />
    </fieldset>
  );
};

export const TomographyControls = () => (
  <div>
    <TomographSelect />
    <TomographyInfo />
    <TomographyParameters />
  </div>
);
