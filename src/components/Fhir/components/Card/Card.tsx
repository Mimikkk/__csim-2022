import { useData, useParams } from "solid-app-router";
import { createEffect, Show } from "solid-js";
import { patientService, ReadResponse } from "@/components/Fhir/services";
import { createTracked, Tracked } from "@/shared/hooks";
import { Status } from "@/shared/types";
import { Spinner } from "@/shared/components";

export const PatientCard = () => {
  const [data, status] = useData<Tracked<ReadResponse>>();

  return (
    <Show
      when={!Status.isSuccess(status())}
      fallback={<Spinner centered class="w-48 h-48" />}>
      123
    </Show>
  );
};
