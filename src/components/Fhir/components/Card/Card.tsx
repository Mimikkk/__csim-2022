import { useData } from "solid-app-router";
import { createEffect, Show } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Status } from "@/shared/types";
import { Spinner } from "@/shared/components";
import { Patient } from "@/components/Fhir/models";
import { Tracked } from "@/shared/hooks";
import { FiUser } from "solid-icons/fi";

export const PatientCard = () => {
  const [data, status] = useData<Tracked<ReadResponse>>();

  createEffect(() => {
    console.log({
      available: data(),
      s: Status.isSuccess(status()),
      z: status(),
    });
  });

  return (
    <section class="w-full h-full">
      <Show
        when={Status.isSuccess(status())}
        fallback={<Spinner centered class="w-48 h-48" />}>
        <header class="bg-rose-900 gap-2 items-center opacity-60">
          <span class="w-full capitalize animated">
            {Patient.Row.fullname(data().patient)}
          </span>
          <span>/</span>
          <span class="w-full capitalize animated">
            {Patient.Row.gender(data().patient)}
          </span>
          <span>/</span>
          <span class="w-full capitalize animated">
            {Patient.Row.birthdate(data().patient)}
          </span>
          <span>/</span>
          <span
            class="w-full capitalize animated ellipsis"
            title={Patient.Row.identifierTitle(data().patient)}>
            {Patient.Row.identifierTitle(data().patient)}
          </span>
        </header>
        <div class="p-2 grid grid-cols-12 gap-2">
          <div class="col-span-3">
            <div class="bg-gray-800 p-4 border-t rounded-md animated">
              <Show
                when={Patient.Card.photo(data().patient)}
                fallback={
                  <FiUser class="w-full h-full rounded-full border-4 animated bg-gray-600 clip-circle" />
                }>
                <img
                  class="w-full h-full rounded-full border-4 animated"
                  src={Patient.Card.photo(data().patient)}
                  alt="patients photo"
                />
              </Show>
            </div>
          </div>
          <div class="col-span-9 max-h-[800px] overflow-y-auto flex gap-1 flex-col">
            <div class="bg-gray-800 p-4 border-t rounded-md animated">123</div>
            <div class="bg-gray-800 p-4 border-t rounded-md animated">123</div>
            <div class="bg-gray-800 p-4 border-t rounded-md animated">123</div>
            <div class="bg-gray-800 p-4 border-t rounded-md animated">123</div>
            <div class="bg-gray-800 p-4 border-t rounded-md animated">123</div>
            <div class="bg-gray-800 p-4 border-t rounded-md animated">123</div>
            <div class="bg-gray-800 p-4 border-t rounded-md animated">123</div>
          </div>
        </div>
      </Show>
    </section>
  );
};
