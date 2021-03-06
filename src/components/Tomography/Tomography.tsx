import { ControlsProvider, useControls } from "./components/Controls/context";
import { Controls } from "@/components/Tomography/components";
import { Button, OutlineBox, Spinner } from "@/shared/components";
import { Show } from "solid-js";
import "./Tomography.scss";
import { sinogramService } from "@/components/Tomography/services";
import { Status } from "@/shared/types";

const Content = () => {
  const {
    original,
    sinogram,
    reconstruction,
    setWidth,
    filter,
    setFilter,
    setHeight,
    reconstructionStatus,
    sinogramStatus,
  } = useControls();

  return (
    <fieldset class="tomography">
      <Controls />
      <div class="flex flex-col gap-2">
        <OutlineBox label="Obraz" centered class="min-h-[350px] min-w-[350px]">
          <Show when={original()} fallback="Wybierz obraz...">
            <img
              alt="original image"
              src={original()}
              onload={({ currentTarget: { naturalHeight, naturalWidth } }) => {
                setWidth(naturalWidth);
                setHeight(naturalHeight);
              }}
              class="max-h-[350px] rendering-pixelated"
            />
          </Show>
        </OutlineBox>
        <OutlineBox
          centered
          label="Sinogram"
          class="min-h-[350px] min-w-[350px] flex-grow flex flex-col gap-2">
          <Show when={original()} fallback="Wybierz obraz...">
            <Show
              when={!Status.isLoading(sinogramStatus())}
              fallback={<Spinner />}>
              <Show when={sinogram()} fallback="Wykonaj sinogram...">
                <img
                  alt="sinogram image of the original"
                  src={sinogram()}
                  class="max-h-[350px] flex-grow rendering-pixelated rounded"
                />
                <Show
                  when={filter()}
                  fallback={
                    <Button
                      onClick={async () =>
                        setFilter(await sinogramService.filter(sinogram()))
                      }>
                      Poka?? przefiltrowany
                    </Button>
                  }>
                  <img
                    alt="filtered sinogram image of the original"
                    src={filter()}
                    class="max-h-[350px] flex-grow rendering-pixelated rounded"
                  />
                </Show>
              </Show>
            </Show>
          </Show>
        </OutlineBox>
      </div>
      <div class="flex flex-col gap-2">
        <OutlineBox
          centered
          label="Obraz"
          class="flex-grow min-h-[300px] min-w-[300px]">
          <Show
            when={!Status.isLoading(reconstructionStatus())}
            fallback={<Spinner />}>
            <Show when={reconstruction()} fallback="Wykonaj rekonstrukcje...">
              <img
                alt="reconstruction of the original"
                src={reconstruction().image}
                class="max-h-[350px] rendering-pixelated"
              />
            </Show>
          </Show>
        </OutlineBox>
        <OutlineBox
          centered
          label="Animacja"
          class="flex-grow min-h-[300px] min-w-[300px]">
          <Show
            when={!Status.isLoading(reconstructionStatus())}
            fallback={<Spinner />}>
            <Show when={reconstruction()} fallback="Wykonaj rekonstrukcje...">
              <img
                alt="animation of the reconstruction process of the original"
                src={reconstruction().animation}
                class="max-h-[350px] rendering-pixelated"
              />
            </Show>
          </Show>
        </OutlineBox>
      </div>
    </fieldset>
  );
};

export const Tomography = () => (
  <ControlsProvider>
    <Content />
  </ControlsProvider>
);
