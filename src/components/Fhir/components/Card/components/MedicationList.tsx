import { useData } from "solid-app-router";
import { Accessor, Component, For } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Tracked } from "@/shared/hooks";
import cx from "classnames";
import { Tile } from "@/shared/components/Tile";
import { CardEmptyList } from "@/components/Fhir/components/Card/components/EmptyList";
import { BiEdit } from "solid-icons/bi";
import { Labeled } from "@/shared/components/Labled";
import { MedicationStatement } from "@/components/Fhir/models";

const { dosage, value } = MedicationStatement.Card;

interface RowProps {
  medication: MedicationStatement;
  index: Accessor<number>;
}
export const MedicationRow: Component<RowProps> = (props) => {
  const title = !props.index() && "Medication";
  console.log({ props });
  return (
    <Tile title={title} class="p-4 grid grid-cols-12 gap-2">
      <div class="col-span-1">
        <BiEdit class="w-full h-full" />
      </div>
      <div class="col-span-11 flex flex-col">
        <Labeled label="Dosage" value={dosage(props.medication)} />
        <Labeled label="Value" value={value(props.medication)} />
      </div>
    </Tile>
  );
};

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
        {(m, i) => <MedicationRow medication={m} index={i} />}
      </For>
    </div>
  );
};
