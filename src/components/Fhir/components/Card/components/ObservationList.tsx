import { useData } from "solid-app-router";
import { Accessor, Component, For } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Observation } from "@/components/Fhir/models";
import { Tracked } from "@/shared/hooks";
import { BiEdit } from "solid-icons/bi";
import { Labeled } from "@/shared/components/Labled";
import cx from "classnames";
import { Tile } from "@/shared/components/Tile";
import { CardEmptyList } from "@/components/Fhir/components/Card/components/EmptyList";

const { category, time, description, value } = Observation.Card;

interface RowProps {
  observation: Observation;
  index: Accessor<number>;
}
const ObservationRow: Component<RowProps> = (props) => (
  <Tile
    class="p-4 grid grid-cols-12 gap-2"
    title={props.index() === 0 && "Observations"}>
    <div class="col-span-1">
      <BiEdit class="w-full h-full" />
      <span class="flex justify-center">{props.index() + 1}</span>
    </div>
    <div class="col-span-11 flex flex-col">
      <Labeled label="Time" value={time(props.observation)} />
      <Labeled label="Category" value={category(props.observation)} />
      <Labeled label="Description" value={description(props.observation)} />
      <Labeled label="Value" value={value(props.observation)} />
    </div>
  </Tile>
);

interface Props {
  class?: string;
}
export const CardObservationList: Component<Props> = (props) => {
  const [data] = useData<Tracked<ReadResponse>>();
  const { observations } = data();

  return (
    <div class={cx("overflow-y-auto flex gap-1 flex-col", props.class)}>
      <For
        each={observations}
        fallback={
          <CardEmptyList title="Observations" reason="No observations" />
        }>
        {(o, i) => <ObservationRow observation={o} index={i} />}
      </For>
    </div>
  );
};
