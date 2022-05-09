import { useData } from "solid-app-router";
import { createEffect, Show } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Tracked } from "@/shared/hooks";
import { Status } from "@/shared/types";
import { Spinner } from "@/shared/components";

export const PatientCard = () => {
  const [data, status] = useData<Tracked<ReadResponse>>();

  createEffect(() => {
    console.log({ available: data() });
  });

  return (
    <Show
      when={!Status.isSuccess(status())}
      fallback={<Spinner centered class="w-48 h-48" />}>
      123
    </Show>
  );
};
