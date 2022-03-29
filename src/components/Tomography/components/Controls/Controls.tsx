import { TomographSelect } from "./Select";
import {
  Checkbox,
  LoadButton,
  OutlineBox,
  Range,
  Spinner,
  Textfield,
} from "@/shared/components";
import { useControls } from "./context";
import { Show } from "solid-js";
import { dicomService } from "@/components/Tomography/services";
import { Link } from "solid-app-router";
import { Status } from "@/shared/types";
import { createTracked } from "@/shared/hooks";

const Info = () => {
  const { original, width, height, reconstruction, reconstructionStatus } =
    useControls();

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
        <Show
          when={!Status.isIdle(reconstructionStatus())}
          fallback="Wykonaj rekonstrukcje...">
          <Show
            when={!Status.isLoading(reconstructionStatus())}
            fallback={<Spinner />}>
            {reconstruction().rmse}
          </Show>
        </Show>
      </p>
    </OutlineBox>
  );
};

const Parameters = () => {
  const {
    original,
    createSinogram,
    sinogramStatus,
    setSpread,
    sinogram,
    setDetectors,
    setScans,
    spread,
    scans,
    detectors,
    recreateImage,
    reconstructionStatus,
    setUseFilter,
  } = useControls();

  return (
    <OutlineBox>
      <fieldset class="flex flex-col gap-y-2">
        <Range
          value={detectors()}
          min={90}
          max={720}
          step={90}
          label="Detekory"
          onChange={setDetectors}
        />
        <Range
          value={scans()}
          min={90}
          max={720}
          step={90}
          label="Skany"
          onChange={setScans}
        />
        <Range
          value={spread()}
          min={45}
          max={270}
          step={45}
          label="Rozpiętość"
          onChange={setSpread}
        />
        <Checkbox label="Czy filtrować?" onChange={setUseFilter} />
        <LoadButton
          disabled={!original()}
          onClick={createSinogram}
          status={sinogramStatus()}>
          Wykonaj sinogram
        </LoadButton>
        <LoadButton
          disabled={!sinogram()}
          onClick={recreateImage}
          status={reconstructionStatus()}>
          Wykonaj rekonstrukcje
        </LoadButton>
      </fieldset>
    </OutlineBox>
  );
};

const Patient = () => {
  const { original, setComments, setName, setId, id, name, comments } =
    useControls();

  const [, status, savePatient] = createTracked({
    fn: async () => {
      const file = await dicomService.save({
        image: original(),
        patient: { comments: comments(), name: name(), id: id() },
      });

      const url = window.URL.createObjectURL(file);
      Object.assign(document.createElement("a"), {
        href: url,
        download: "download.dcm",
      }).click();
      window.URL.revokeObjectURL(url);
    },
  });

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
      <LoadButton
        onClick={savePatient}
        disabled={!(name() && id() && comments())}
        status={status()}>
        Zapisz rekonstrukcje jako DICOM
      </LoadButton>
    </OutlineBox>
  );
};

export const Controls = () => (
  <div class="flex flex-col gap-2">
    <Info />
    <Parameters />
    <Patient />
    <Link
      href="/tomography-experiment"
      class="self-center hover:text-amber-400 font-bold">
      Wyniki Eksperymentów
    </Link>
  </div>
);
