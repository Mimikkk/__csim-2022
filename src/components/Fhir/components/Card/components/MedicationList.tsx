import { useData } from "solid-app-router";
import { Component, For } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Tracked } from "@/shared/hooks";
import cx from "classnames";
import { Tile } from "@/shared/components/Tile";
import { CardEmptyList } from "@/components/Fhir/components/Card/components/EmptyList";

interface Props {
  class?: string;
}
export const CardMedicationList: Component<Props> = (props) => {
  const [data] = useData<Tracked<ReadResponse>>();
  const { medicationStatements } = data();

  return (
    <div
      class={cx("overflow-y-auto flex gap-1 flex-col rounded-md", props.class)}>
      <For
        each={medicationStatements}
        fallback={
          <CardEmptyList title="Medication" reason="No Prescribed Medication" />
        }>
        {(_, index) => <Tile title={index() === 0 && "Medication"}>123</Tile>}
      </For>
    </div>
  );
};
