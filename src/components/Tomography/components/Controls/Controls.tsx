import { TomographSelect } from "./Select";
import { Range, OutlineBox, Button, Textfield } from "@/shared/components";
import { useControls } from "./context";
import { Show } from "solid-js";
import {
  dicomService,
  reconstructionService,
  sinogramService,
} from "@/components/Tomography/services";

const Info = () => {
  const { original, width, height, rmse } = useControls();

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
        <Show when={rmse()} fallback="Wykonaj rekonstrukcje...">
          {rmse()}
        </Show>
      </p>
    </OutlineBox>
  );
};

const Parameters = () => {
  const {
    original,
    setSinogram,
    setSpread,
    sinogram,
    setDetectors,
    setScans,
    spread,
    scans,
    detectors,
    setReconstruction,
    setAnimation,
    setRmse,
  } = useControls();

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
        <Button
          disabled={!original()}
          onClick={async () =>
            setSinogram(
              await sinogramService.create({
                original: original(),
                scans: scans(),
                spread: spread(),
                detectors: detectors(),
              })
            )
          }>
          Wykonaj sinogram
        </Button>
        <Button
          disabled={!sinogram()}
          onClick={async () => {
            const { image, rmse, animation } =
              await reconstructionService.reconstruct({
                original: original(),
                sinogram: sinogram(),
                spread: spread(),
                detectors: detectors(),
                scans: scans(),
              });

            setReconstruction(image);
            setAnimation(animation);
            setRmse(rmse);
          }}>
          Wykonaj rekonstrukcje
        </Button>
      </fieldset>
    </OutlineBox>
  );
};

const Patient = () => {
  const { original, setComments, setName, setId, id, name, comments } =
    useControls();

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
      <Button
        onClick={async () => {
          const file = await dicomService.save({
            image: original(),
            patient: { comments: comments(), name: name(), id: id() },
          });

          Object.assign(document.createElement("a"), {
            href: window.URL.createObjectURL(file),
            download: "download.dcm",
          }).click();
        }}
        disabled={!(name() && id() && comments())}>
        Zapisz rekonstrukcje jako DICOM
      </Button>
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
