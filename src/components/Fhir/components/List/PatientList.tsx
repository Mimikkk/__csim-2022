import { For, Show } from "solid-js";
import { PatientRow } from "./components";
import { useFhir } from "@/components/Fhir/context";
import { Status } from "@/shared/types";
import "./PatientList.scss";
import { Spinner } from "@/shared/components";

export const EmptyBody = () => {
  return (
    <tr>
      <td class="text-center" colspan="100%">
        No patients found
      </td>
    </tr>
  );
};

export const PatientList = () => {
  const { patients, patientsStatus } = useFhir();

  return (
    <Show
      when={Status.isSuccess(patientsStatus())}
      fallback={
        <div class="flex justify-center h-full items-center">
          <Spinner class="w-48 h-48" />
        </div>
      }>
      <table class="w-full">
        <thead>
          <tr>
            <th>Imię</th>
            <th>Płeć</th>
            <th>Data urodzenia</th>
            <th>Identyfikator</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <For each={patients()} fallback={<EmptyBody />}>
            {(patient) => <PatientRow patient={patient} />}
          </For>
        </tbody>
      </table>
    </Show>
  );
};
