import { useData } from "solid-app-router";
import { Component, createSignal, Show } from "solid-js";
import {
  patientService,
  readfile,
  ReadResponse,
} from "@/components/Fhir/services";
import { Patient } from "@/components/Fhir/models";
import { Tracked } from "@/shared/hooks";
import { FiUser } from "solid-icons/fi";
import { Tile } from "@/shared/components/Tile";
import { Button } from "@/shared/components";
import { AiOutlineEdit } from "solid-icons/ai";

const { photo, fullname } = Patient.Card;

interface Props {
  class?: string;
}
export const CardPhoto: Component<Props> = (props) => {
  const [data] = useData<Tracked<ReadResponse>>();
  const { patient } = data();

  const [photo, setPhoto] = createSignal(Patient.Card.photo(patient));

  return (
    <div class={props.class}>
      <Tile class="flex flex-col gap-4 p-4">
        <Show
          when={photo()}
          fallback={
            <FiUser class="w-full h-full rounded-full border-4 animated bg-gray-600 clip-circle" />
          }>
          <img
            class="w-full h-full aspect-square rounded-full border-4 animated"
            src={photo()}
            alt="patients photo"
          />
        </Show>
        <div class="flex gap-2 items-center -ml-8">
          <Button
            onDrop={async (file) => {
              await patientService.uploadPhoto(patient.id, file);
              setPhoto(await readfile(file));
            }}>
            <AiOutlineEdit />
          </Button>
          <span class="text-center font-bold">{fullname(patient)}</span>
        </div>
      </Tile>
    </div>
  );
};
