import { useData } from "solid-app-router";
import { Show } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Patient } from "@/components/Fhir/models";
import { Tracked } from "@/shared/hooks";
import { FiUser } from "solid-icons/fi";

const { photo, fullname } = Patient.Card;
export const CardPhoto = () => {
  const [data] = useData<Tracked<ReadResponse>>();
  const { patient } = data();

  return (
    <div class="col-span-3 row-span-1">
      <div class="flex flex-col gap-4 bg-gray-800 p-4 border-t rounded-md animated">
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
      </div>
    </div>
  );
};
