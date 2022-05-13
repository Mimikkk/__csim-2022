import { useData } from "solid-app-router";
import { createEffect, Show } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Status } from "@/shared/types";
import { Spinner } from "@/shared/components";
import { Tracked } from "@/shared/hooks";
import {
  CardHeader,
  CardMedicationList,
  CardObservationList,
  CardPhoto,
} from "./components";
import "./Card.scss";

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
    <section class="w-full h-full flex flex-col items-center">
      <Show
        when={Status.isSuccess(status())}
        fallback={<Spinner centered class="w-48 h-48" />}>
        <CardHeader />
        <div class="grid grid-cols-12 py-4 gap-2 w-full max-w-[1200px]">
          <CardPhoto class="col-span-3 w-full" />
          <CardObservationList class="col-span-5 max-h-[800px]" />
          <CardMedicationList class="col-span-4 max-h-[800px]" />
        </div>
      </Show>
    </section>
  );
};
