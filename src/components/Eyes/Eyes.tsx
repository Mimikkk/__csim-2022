import { LoadButton, OutlineBox, Spinner } from "@/shared/components";
import { EyeSelect } from "@/components/Eyes/components";
import "./Eyes.scss";
import { useControls, ControlsProvider } from "./context";
import { Component, Show, createResource } from "solid-js";
import { Status } from "@/shared/types";
import { createTracked } from "@/shared/hooks";
import cx from "classnames";
import { compareService } from "@/components/Eyes/services/compare";
import { percent } from "@/shared/utils";

interface Props {
  status: Status;
  image: string;
  label: string;
  description: string;
}

export const Technique: Component<Props> = (props) => {
  const { original, veins } = useControls();

  const [statistics, statisticsStatus, createStatistics] = createTracked({
    fn: () => compareService.compare(props.image, veins()),
  });

  const [hasCompared] = createResource(statisticsStatus, (status) =>
    Status.isSuccess(status)
  );

  return (
    <OutlineBox
      label={props.label}
      class={cx("flex", !hasCompared() && "flex-col")}
      centered>
      <Show when={original()} fallback="Wybierz obraz...">
        <Show when={props.image} fallback={props.description}>
          <OutlineBox centered class="gap-2 flex-grow w-full h-full">
            <Show when={!Status.isLoading(props.status)} fallback={<Spinner />}>
              <img
                class="max-w-[350px]  flex-grow rendering-pixelated rounded"
                alt="image"
                src={props.image}
              />
            </Show>
            <Show when={hasCompared()}>
              <img
                class="max-w-[350px] flex-grow rendering-pixelated rounded"
                alt="image"
                src={statistics().confusion}
              />
            </Show>
          </OutlineBox>
        </Show>
      </Show>
      <Show when={props.image && veins()}>
        <Show when={!hasCompared()}>
          <LoadButton
            onClick={createStatistics}
            status={statisticsStatus()}
            class="w-full">
            Porównaj z maską ekspercką
          </LoadButton>
        </Show>
        <Show when={hasCompared()}>
          <OutlineBox class="flex flex-col h-full w-full" centered>
            <Show when={Status.isSuccess(statisticsStatus())}>
              <div class="flex w-full justify-between">
                <strong>Celność: </strong>
                <span>{percent(statistics().accuracy)}%</span>
              </div>
              <div class="flex w-full justify-between">
                <strong>Czułość: </strong>
                <span>{percent(statistics().sensitivity)}%</span>
              </div>
              <div class="flex w-full justify-between">
                <strong>Swoistość: </strong>
                <span>{percent(statistics().specificity)}%</span>
              </div>
              <div class="flex w-full gap-2 items-center">
                <div class="w-8 h-8 aspect-square bg-green-600 rounded border-2" />
                <span>Prawdziwy Pozytywny</span>
              </div>
              <div class="flex w-full gap-2 items-center">
                <div class="w-8 h-8 aspect-square bg-red-600 rounded border-2" />
                <span>Fałszywy Pozytywny</span>
              </div>
              <div class="flex w-full gap-2 items-center">
                <div class="w-8 h-8 aspect-square bg-blue-600 rounded border-2" />
                <span>Fałszywy Negatywny</span>
              </div>
              <div class="flex w-full gap-2 items-center">
                <div class="w-8 h-8 aspect-square bg-black rounded border-2" />
                <span>Prawdziwy Negatywny</span>
              </div>
            </Show>
          </OutlineBox>
        </Show>
      </Show>
    </OutlineBox>
  );
};

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
      <OutlineBox label="Oryginał" class="grid gap-2" centered={!original()}>
        <Show when={original()} fallback="Wybierz zdjęcie...">
          <OutlineBox label="Obraz" centered>
            <img
              class="max-w-[350px]  flex-grow rendering-pixelated rounded"
              alt="original image to process"
              src={original()}
            />
          </OutlineBox>
          <OutlineBox label="Maska ekspercka" centered>
            <Show when={veins()} fallback="Zdjęcie nie ma mapy eksperckiej...">
              <img
                class="max-w-[350px]  flex-grow rendering-pixelated rounded"
                alt="original expert created image's veins if has any"
                src={veins()}
              />
            </Show>
          </OutlineBox>
        </Show>
      </OutlineBox>
      <div class="grid gap-2">
        <Technique
          description="Użyj sieci neuronowej..."
          label="Sieć neuronowa"
          status={cnnStatus()}
          image={cnn()}
        />
        <Technique
          description="Użyj wycinków kNN..."
          label="Wycinki kNN"
          status={knnStatus()}
          image={knn()}
        />
        <Technique
          description="Użyj technik tradycyjnych..."
          label="Tradycyjne"
          status={traditionalStatus()}
          image={traditional()}
        />
      </div>
    </fieldset>
  );
};

export const Eyes = () => (
  <ControlsProvider>
    <Content />
  </ControlsProvider>
);
