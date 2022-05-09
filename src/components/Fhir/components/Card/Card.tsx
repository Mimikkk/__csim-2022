import { useData } from "solid-app-router";
import { createEffect, Show } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Status } from "@/shared/types";
import { Spinner } from "@/shared/components";
import { Patient } from "@/components/Fhir/models";
import { Tracked } from "@/shared/hooks";

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
        <div>
          <img
            src={Patient.Card.photo(data().patient)}
            alt={"123"}
            width={400}
            height={400}
          />
        </div>
      </Show>
    </section>
  );
};
