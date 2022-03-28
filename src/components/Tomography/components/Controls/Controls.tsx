import { TomographSelect } from "./Select";
import {
  Button,
  Checkbox,
  OutlineBox,
  Range,
  Spinner,
  Textfield,
} from "@/shared/components";
import { useControls } from "./context";
import { Show } from "solid-js";
import {
  dicomService,
  reconstructionService,
  sinogramService,
} from "@/components/Tomography/services";
import { Link } from "solid-app-router";
import { RequestStatus } from "@/shared/types";
import { createTracked } from "@/shared/hooks/createTracked";

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
    setFilter,
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
    useFilter,
    setUseFilter,
  } = useControls();

  const [, status, refresh] = createTracked({
    fn: async () =>
      setSinogram(
        await sinogramService.create({
          original: original(),
          scans: scans(),
          spread: spread(),
          detectors: detectors(),
        })
      ),
  });

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
        <Button disabled={!original()} onClick={refresh}>
          <Show
            when={RequestStatus.isLoading(status())}
            fallback={
              <div class="flex justify-center">
                <Spinner />
              </div>
            }>
            Wykonaj sinogram
          </Show>
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
                use_filter: useFilter(),
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

          const url = window.URL.createObjectURL(file);
          Object.assign(document.createElement("a"), {
            href: url,
            download: "download.dcm",
          }).click();
          window.URL.revokeObjectURL(url);
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
    <Link
      href="/tomography-experiment"
      class="self-center hover:text-amber-400 font-bold">
      Wyniki Eksperymentów
    </Link>
  </div>
);
