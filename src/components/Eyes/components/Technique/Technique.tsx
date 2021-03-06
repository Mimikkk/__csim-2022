import { Status } from "@/shared/types";
import { Component, createEffect, createSignal, Show } from "solid-js";
import { useControls } from "@/components/Eyes/context";
import { createTracked } from "@/shared/hooks";
import { compareService } from "@/components/Eyes/services/compare";
import { LoadButton, OutlineBox, Spinner } from "@/shared/components";
import cx from "classnames";
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
  const [hasCompared, setHasCompared] = createSignal(false);

  createEffect(() => {
    if (Status.isLoading(props.status)) setHasCompared(false);
  });
  createEffect(() => {
    if (Status.isSuccess(statisticsStatus())) setHasCompared(true);
  });

  return (
    <OutlineBox
      label={props.label}
      class={cx("flex", !hasCompared() && "flex-col")}
      centered>
      <Show when={original()} fallback="Wybierz obraz...">
        <Show when={!Status.isLoading(props.status)} fallback={<Spinner />}>
          <Show when={props.image} fallback={props.description}>
            <OutlineBox centered class="gap-2 flex-grow w-full h-full">
              <Show
                when={!Status.isLoading(props.status)}
                fallback={<Spinner />}>
                <img
                  class="max-w-[300px] flex-grow rounded"
                  alt="image"
                  src={props.image}
                />
              </Show>
              <Show when={hasCompared()}>
                <img
                  class="max-w-[300px] flex-grow rounded"
                  alt="image"
                  src={statistics().confusion}
                />
              </Show>
            </OutlineBox>
          </Show>
        </Show>
      </Show>
      <Show when={props.image && veins()}>
        <Show when={!hasCompared()}>
          <LoadButton
            onClick={createStatistics}
            status={statisticsStatus()}
            class="w-full">
            Por??wnaj z mask?? eksperck??
          </LoadButton>
        </Show>
        <Show when={hasCompared()}>
          <OutlineBox class="flex flex-col h-full w-full" centered>
            <Show when={Status.isSuccess(statisticsStatus())}>
              <div class="flex w-full justify-between">
                <strong>Celno????: </strong>
                <span>{percent(statistics().accuracy)}%</span>
              </div>
              <div class="flex w-full justify-between">
                <strong>Czu??o????: </strong>
                <span>{percent(statistics().sensitivity)}%</span>
              </div>
              <div class="flex w-full justify-between">
                <strong>Swoisto????: </strong>
                <span>{percent(statistics().specificity)}%</span>
              </div>
              <div class="flex w-full justify-between">
                <strong>??rednia: </strong>
                <span>{percent(statistics().geometric)}%</span>
              </div>
              <div class="flex w-full gap-2 items-center">
                <div class="w-6 h-6 aspect-square bg-green-600 rounded border-2" />
                <span>- Prawdziwy pozytywny</span>
              </div>
              <div class="flex w-full gap-2 items-center">
                <div class="w-6 h-6 aspect-square bg-red-600 rounded border-2" />
                <span>- Fa??szywy pozytywny</span>
              </div>
              <div class="flex w-full gap-2 items-center">
                <div class="w-6 h-6 aspect-square bg-sky-600 rounded border-2" />
                <span>- Fa??szywy negatywny</span>
              </div>
              <div class="flex w-full gap-2 items-center">
                <div class="w-6 h-6 aspect-square bg-black rounded border-2" />
                <span>- Prawdziwy negatywny</span>
              </div>
            </Show>
          </OutlineBox>
        </Show>
      </Show>
    </OutlineBox>
  );
};
