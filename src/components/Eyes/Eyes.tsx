import { LoadButton, OutlineBox, Spinner } from "@/shared/components";
import { EyeSelect } from "@/components/Eyes/components";
import "./Eyes.scss";
import { useControls, ControlsProvider } from "./context";
import { Show } from "solid-js";
import { Status } from "@/shared/types";

export const Content = () => {
  const {
    original,
    veins,
    traditional,
    createTraditional,
    traditionalStatus,
    knn,
    createKnn,
    knnStatus,
    cnn,
    createCnn,
    cnnStatus,
  } = useControls();

  return (
    <fieldset class="eye">
      <div>
        <EyeSelect />
        <OutlineBox class="flex flex-col gap gap-2">
          <LoadButton
            onClick={createCnn}
            status={cnnStatus()}
            disabled={!original()}>
            Użyj sieci neuronowej
          </LoadButton>
          <LoadButton
            onClick={createKnn}
            status={knnStatus()}
            disabled={!original()}>
            Użyj wycinków kNN
          </LoadButton>
          <LoadButton
            onClick={createTraditional}
            status={traditionalStatus()}
            disabled={!original()}>
            Użyj technik klasycznych
          </LoadButton>
        </OutlineBox>
      </div>
      <OutlineBox label="Oryginał" class="grid gap-2">
        <OutlineBox label="Obraz" centered>
          <Show when={original()} fallback="Wybierz zdjęcie...">
            <img
              class="max-w-[350px]  flex-grow rendering-pixelated rounded"
              alt="original image to process"
              src={original()}
            />
          </Show>
        </OutlineBox>
        <OutlineBox label="Maska ekspercka" centered>
          <Show when={original()} fallback="Wybierz zdjęcie...">
            <Show when={veins()} fallback="Zdjęcie nie ma mapy eksperckiej...">
              <img
                class="max-w-[350px]  flex-grow rendering-pixelated rounded"
                alt="original expert created image's veins if has any"
                src={veins()}
              />
            </Show>
          </Show>
        </OutlineBox>
      </OutlineBox>
      <OutlineBox label="Wyniki" class="grid gap-2">
        <OutlineBox label="Sieć neuronowa" centered>
          <Show when={original()} fallback="Wybierz obraz...">
            <Show when={!Status.isLoading(cnnStatus())} fallback={<Spinner />}>
              <Show when={cnn()} fallback="Użyj sieci neuronowej...">
                <img
                  class="max-w-[350px]  flex-grow rendering-pixelated rounded"
                  alt="cnn image"
                  src={cnn()}
                />
              </Show>
            </Show>
          </Show>
        </OutlineBox>
        <OutlineBox label="Wycinki kNN" centered>
          <Show when={original()} fallback="Wybierz obraz...">
            <Show when={!Status.isLoading(knnStatus())} fallback={<Spinner />}>
              <Show when={knn()} fallback="Użyj wycinków kNN...">
                <img
                  class="max-w-[350px] flex-grow rendering-pixelated rounded"
                  alt="cnn image"
                  src={knn()}
                />
              </Show>
            </Show>
          </Show>
        </OutlineBox>
        <OutlineBox label="Tradycyjne" centered>
          <Show when={original()} fallback="Wybierz obraz...">
            <Show
              when={!Status.isLoading(traditionalStatus())}
              fallback={<Spinner />}>
              <Show
                when={traditional()}
                fallback="Użyj technik tradycyjnych...">
                <img
                  class="max-w-[350px]  flex-grow rendering-pixelated rounded"
                  alt="image processed by traditional methods"
                  src={traditional()}
                />
              </Show>
            </Show>
          </Show>
        </OutlineBox>
      </OutlineBox>
    </fieldset>
  );
};

export const Eyes = () => (
  <ControlsProvider>
    <Content />
  </ControlsProvider>
);
