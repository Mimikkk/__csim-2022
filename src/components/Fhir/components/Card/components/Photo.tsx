import { useData } from "solid-app-router";
import { Component, Show } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Patient } from "@/components/Fhir/models";
import { Tracked } from "@/shared/hooks";
import { FiUser } from "solid-icons/fi";
import { Tile } from "@/shared/components/Tile";

const { photo, fullname } = Patient.Card;

interface Props {
  class?: string;
}
export const CardPhoto: Component<Props> = (props) => {
  const [data] = useData<Tracked<ReadResponse>>();
  const { patient } = data();

  return (
    <div class={props.class}>
      <Tile class="flex flex-col gap-4 p-4">
        <Show
          when={photo(patient)}
          fallback={
            <FiUser class="w-full h-full rounded-full border-4 animated bg-gray-600 clip-circle" />
          }>
          <img
            class="w-full h-full rounded-full border-4 animated"
            src={photo(patient)}
            alt="patients photo"
          />
        </Show>
        <span class="text-center font-bold">{fullname(patient)}</span>
      </Tile>
    </div>
  );
};
